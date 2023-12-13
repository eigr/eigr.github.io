---
slug: "distributed-elixir-made-easy-with-spawn"
title: "Distributed Elixir made easy with Spawn"
authors: [eliasdarruda, sleipnir]
tags: [spawn, serverless, elixir, distributed, durable computing]
draft: "false"
---

Hello Elixir enthusiasts! 🚀 As the tech landscape evolves, so should our tools and approaches to development. Today, I'm excited to introduce you to a significant advancement in Elixir development that can reshape how we build distributed systems – I present to you Spawn.

## The Elixir Actors Dilemma

We've all been there – struck by that stroke of genius while working with Elixir. The allure of in-memory state storage, backed by the reliability of Erlang/OTP, seems like a dream come true. But reality hits hard, especially in the realm of production environments where Kubernetes often plays a pivotal role. Managing multiple servers autonomously, especially in distributed systems, can quickly turn our dream into a complex nightmare.

## Enter Spawn: A New Approach to Actors

[**Spawn**](https://github.com/eigr/spawn) is not just another framework; it's a paradigm shift in how we implement code. Imagine a world where you can care less about the underlying infrastructure and instead focus on crafting the domain-specific logic that truly matters. That's precisely what Spawn brings to the table.

Let's delve into a quick comparison between a traditional GenServer approach and the innovative Spawn Actor using the [**_Spawn Elixir SDK_**](https://github.com/eigr/spawn/tree/main/spawn_sdk/spawn_sdk).

### Consider a GenServer that does the following:

```elixir
defmodule Incrementor do
  use GenServer

  defmodule State do
    defstruct [total: 0]
  end

  def init(_), do: {:ok, %State{total: 0}}

  def handle_call({:add, value}, _from, state) do
    new_total = state.total + value

    {:reply, {:ok, %{total: new_total}}, %State{state | total: new_total}}
  end
end
```

If we execute it, as you probably now already, we can add a specified value to the total stored in memory, and calling add will always return the total amount stored in memory.

```elixir
iex(1)> {:ok, pid} = GenServer.start_link(Incrementor, [])
iex(2)> GenServer.call(pid, {:add, 1})
{:ok, %{total: 1}}

iex(3)> GenServer.call(pid, {:add, 1})
{:ok, %{total: 2}}
```

### With Spawn, the same definition would look like:

Our process defined by the `GenServer`, we call it an _Actor_.

```elixir
defmodule IncrementorActor do
  use SpawnSdk.Actor,
    name: "incrementor",
    kind: :named,
    state_type: :json,
    deactivate_timeout: 30_000,
    snapshot_timeout: 10_000

  defmodule State do
    @derive {Jason.Encoder, only: [:total]}
    defstruct [total: 0]
  end

  defact init(%Context{} = ctx), do: Value.noreply_state!(ctx.state || %State{})

  defact add(%{value: value}, %Context{} = ctx) do
    new_total = ctx.state.total + value

    Value.of()
    |> Value.state(%State{total: new_total})
    |> Value.response(%{total: new_total})
  end
end
```

Our application would look like:

```elixir
defmodule Example.Application do
  @moduledoc false
  use Application

  @impl true
  def start(_type, _args) do
    children = [
      {
        SpawnSdk.System.Supervisor,
        system: "spawn-system",
        actors: [
          IncrementorActor
        ]
      }
    ]

    opts = [strategy: :one_for_one, name: Example.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
```

And the SDK can be installed in your Elixir project with:

```elixir
[
  {:spawn_sdk, "~> 1.1"},
  # if using stateful actors
  # {:spawn_statestores_mysql, "~> 1.1"}
  # {:spawn_statestores_postgres, "~> 1.1"}
  # ... others
]
```

When using a statestore, you need to define a statestore key in `config.exs` or using `SPAWN_STATESTORE_KEY` environment variable to make sure your actor state is properly encrypted.

> **NOTE:** It is **recommended** to securely store the key in the environment where it is being used.

```elixir
config :spawn_statestores, statestore_key: "secure_database_key"
```

Having that defined, the same for `Calling` or `Casting` a process in a GenServer, we do it with `invoke`.

Passing any message we want in the payload attribute, it needs to be a struct or map that can be encoded to JSON or a protobuf struct.

```elixir
iex(1)> SpawnSdk.invoke("incrementor", system: "spawn-system", action: "add", payload: %{value: 1})
{:ok, %{total: 1}}
```

> **_NOTE_**: We **recommend** to use protobufs as payload and also the state definition, with: `state_type: Protos.YourStateType`, however for this example for the sake of simplicity we are using JSON.

## Unpacking the Magic: Answers to Your Questions

1. What exactly is "spawn-system"?

Spawn operates as a platform that manages infrastructure for you. "spawn-system" is a configuration entity encapsulating multiple actors within a meaningful context.

2. Why is it an SDK?

Spawn embraces a multi-language approach. SDKs allow different actors, even in different languages, to register with Spawn. For instance, you could have Elixir and NodeJS actors running the same logic seamlessly.

3. How do I run it?

In development, you can use Spawn as a lib. For production, use Kubernetes CRDs provided by Spawn for easy and scalable deployment.

4. How do we handle state persistence?

Spawn intelligently handles state persistence through well-defined timeouts and snapshot mechanisms, ensuring reliability even during rollouts.

5. Why not just use a GenServer?

Managing a distributed system with GenServer requires tackling numerous challenges. Spawn abstracts away these complexities, allowing you to focus on your domain logic without getting lost in infrastructure intricacies.

Two items above deserve a little more comment:

### Actor System

Spawn is a platform that also handles infrastructure for you, we run on top of kubernetes and have defined some [**Kubernetes CRDs**](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) that helps you configure the clustering and lifecycle of your actors.

A system is an entity that encapsulates multiple Actors in a context that makes sense for you.

We can configure one using the pre-defined Spawn CRDs, and we will also be configuring here which persistent database we are going to use to hold our Actors state.

### SDKs

We can have multiple actors in the same system, with different SDKs registering those actors.
We call each deployment that uses an SDK an "ActorHost."

In our example, we could have two SDKs, Elixir and NodeJS, running the same actor or different ones.
Spawn will then forward any invocations for one of those registered SDKs, with the specified implementation for each action.
You can even invoke an actor registered in a different system or in the same system from another SDK.

For instance, if we wanted to invoke the same actor we wrote but in a [NodeJS ActorHost](https://github.com/eigr/spawn-node-sdk), it would look like this:

```ts
import spawn from '@eigr/spawn-sdk'

const response = await spawn.invoke('incrementor', {
  action: 'add',
  system: 'spawn-system',
  payload: {value: 5}
})

console.log(response)
// { total: 6 }
```

This way, we can interact with each actor globally, across different Systems and ActorHosts, while still maintaining the same state handling mechanism. And the best part? We can achieve all of this without the need for transactions, locks, or any additional infrastructure to support sequential state write changes of that nature.

### That sounds magical, how do I run it?

In development mode for Elixir, you can take advantage of using Spawn as a lib, you'll be able to use all the features you wan't in a single runtime.

However for production we **recommend** using our CRDs set up for you.

First of all you need to install our k8s CRD with the following manifest (using kubectl):

```bash
kubectl create ns eigr-functions && curl -L https://github.com/eigr/spawn/releases/download/v1.1.1/manifest.yaml | kubectl apply -f -
```

> **_NOTE:_** You need to inform the desired release version. Check our github to see the latest one released.

After installing it successfully, you need now to configure your System:

```yaml
apiVersion: spawn-eigr.io/v1
kind: ActorSystem
metadata:
  name: spawn-system # Mandatory. Name of the ActorSystem
  namespace: default # Optional. Default namespace is "default"
spec:
  statestore:
    type: MySql # Valid are [Postgres, MySql, MariaDB, Sqlite, MSSQL, CockroachDB]
    credentialsSecretRef: mysql-connection-secret # The secret containing connection params created in the previous step.
    pool: # Optional
      size: "10"
```

You can generate the credentialsSecret or use whatever secret you are using to store your database credentials.
An example would be, note that the secret needs to be created at the namespace `eigr-functions`.

```bash
kubectl create secret generic mysql-connection-secret -n eigr-functions \
  --from-literal=database=eigr-functions-db \
  --from-literal=host='mysql' \
  --from-literal=port='3306' \
  --from-literal=username='admin' \
  --from-literal=password='admin' \
  --from-literal=encryptionKey=$(openssl rand -base64 32)
```

After installing the system, you will need to register your ActorHost, that can look like:

```yaml
apiVersion: spawn-eigr.io/v1
kind: ActorHost
metadata:
  name: elixir-example
  namespace: default
  annotations:
    spawn-eigr.io/actor-system: spawn-system
spec:
  host:
    image: org/your-host-image:0.0.1
    embedded: true # this is only for Elixir Sdks, you can ignore this if you will use another language
    ports:
      - name: "http"
        containerPort: 8800
  autoscaler:
    min: 1
    max: 2
```

Just by applying this configuration, and having a container that has the application with the example we wrote in the start of the article, we should see
the instances starting that should handle the clustering and all the heavy infrastructure work for you.

## Managing State Resilience with Spawn

In the realm of Spawn, we prioritize the resilience of your application's state. Each actor in Spawn comes with configurable parameters, namely the snapshot_timeout and deactivate_timeout. Let's delve into these settings:

- **deactivate_timeout** determines the duration (in milliseconds) your actor remains actively in memory, even when not in use.

- **snapshot_timeout** how frequently snapshots of your actor's state are saved in your persistent storage.

The magic unfolds after an actor is deactivated, triggered either by the specified timeout or during a Kubernetes rollout. In this scenario, Spawn meticulously manages the lifecycle of each process, ensuring that the state is gracefully saved in the configured persistent storage.

Here's the key assurance: even in the face of failures, crashes, or net-splits, Spawn guarantees that the state of your application will always revert to the last valid state. This means if an instance fails, another node seamlessly takes over from where it left off, ensuring the continuity and integrity of your application's data. Our meticulous tuning of Custom Resource Definitions (CRDs) and signal handling ensures that you won't lose data during rollouts or network partitions.

With Spawn, you can confidently embrace a resilient state management model, where the reliability and consistency of your application's data are at the forefront of our design philosophy.

## Unleashing Gains in Agility and Innovation with Spawn

Beyond the facade of extensive configurations lies a treasure trove of advantages awaiting exploration. Spawn not only simplifies but significantly enriches your development experience. Imagine bidding farewell to the complexities of defining Kubernetes resources, the intricacies of rollouts, the considerations of HPA, and the worries of scalability, network configurations, and system integrity assessments.

Spawn emerges as the driving force behind a newfound sense of agility and innovation. It liberates you from the burdensome aspects of infrastructure management, allowing you to redirect your focus towards what truly matters – crafting innovative solutions. Step into a future where complexities dissolve, and your journey into agile and innovative Elixir development begins with a resounding hello!

If you choose to go down that path, you will need to face at least the following challenges:

- Ensuring proper handling of connections between multiple nodes in your Erlang cluster.
- Ensuring reliable and synchronized data rollouts to avoid message or state loss during instances rolling out.
- Implementing effective persistence mechanisms to recover data in the event of netsplit scenarios, preventing data loss.
- Managing the process lifecycle to ensure predictable recovery and maintain a consistent state in case of errors.
- Designing a well-defined API that integrates your processes seamlessly with other systems, ensuring message synchronization.
- Establishing a reliable distribution mechanism for sending messages to actors within your own edge, with the ability to synchronize them later.
- Mitigating process queue bottlenecks to optimize performance and prevent delays.
- Ensuring atomicity in a distributed system, maintaining data consistency and integrity.
- Ensuring that you can concentrate on your domain-specific code without being burdened by unnecessary complexities and boilerplate.
- Implementing seamless integration patterns, including process pipelines, customized activators, workflows, and effective management of side effects, among others.
- Developing and managing infrastructure code related to brokers, caching, and other components.

## Conclusion

This is more than just a practical example; it's an invitation to explore the full potential of Spawn. For a deeper dive into the concepts and foundations, refer to our [Spawn Full Documentation](https://github.com/eigr/spawn) and our insightful article [Beyond Monoliths and Microservices](https://eigr.io/blog/beyond-monoliths-and-microservices/).

Ready to elevate your Elixir development experience? Embrace the future with Spawn. Happy coding! 🚀✨
