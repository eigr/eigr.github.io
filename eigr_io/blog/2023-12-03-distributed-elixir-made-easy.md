---
slug: "distributed-elixir-made-easy-with-spawn"
title: "Distributed Elixir made easy with Spawn"
authors: [eliasdarruda]
tags: [spawn, serverless, eigr-functions, elixir, distributed]
draft: "false"
---

Have you ever had that brilliant idea while using Elixir? The one you tought that storing some state in memory would be super cool because of the consistency and all the goodness that Erlang/OTP brings. But then, reality hit you hard, and it turned out to be way more complex than you initially imagined.

In many production environments that use Elixir, Kubernetes often comes into play. But here's the thing, using Kubernetes with Elixir can sometimes be quite challenging. The complex infrastructure work that comes along with it can make your cool idea of storing state in memory less and less appealing.

Wouldn't it be awesome if you could care less about dealing with all that infrastructure and instead focus more on implementing the domain-specific logic you need? Imagine having to worry only about your domain code while still having the flexibility to control and make important tweaks to your infrastructure.

# I'm talking about [**Spawn**](https://github.com/eigr/spawn)

A framework that can change the way you implement code.

Lets talk code and start with a quick example, comparing a regular **GenServer** and a **Spawn Actor** using [_Spawn Elixir SDK_](https://github.com/eigr/spawn/tree/main/spawn_sdk/spawn_sdk):

### Consider a GenServer that does the following:

```ELIXIR
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

```Elixir
iex(1)> {:ok, pid} = GenServer.start_link(Incrementor, [])
iex(2)> GenServer.call(pid, {:add, 1})
{:ok, %{total: 1}}

iex(3)> GenServer.call(pid, {:add, 1})
{:ok, %{total: 2}}
```

### With Spawn, the same definition would look like:

Our process defined by the `GenServer`, we call it an _Actor_.

```ELIXIR
defmodule IncrementorActor do
  use SpawnSdk.Actor,
    name: "incrementor",
    kind: :unamed,
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

```ELIXIR
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

```ELIXIR
[
  {:spawn_sdk, "~> 1.0.0"},
  # if using stateful actors
  # {:spawn_statestores_mysql, "~> 1.0.0"}
  # {:spawn_statestores_postgres, "~> 1.0.0"}
  # ... others
]
```

When using a statestore, you need to define a statestore key in `config.exs` or using `SPAWN_STATESTORE_KEY` environment variable to make sure your actor state is properly encrypted.
> **NOTE:** Its **recommended** to use a very safe key in handled in the environment for this key.

```ELIXIR
config :spawn_statestores, statestore_key: "secure_database_key"
```

Having that defined, the same for `Calling` or `Casting` a process in a GenServer, we do it with `invoke`.

Passing any message we want in the payload attribute, it needs to be a struct or map that can be encoded to JSON or a protobuf struct.

```Elixir
iex(1)> SpawnSdk.invoke("incrementor", system: "spawn-system", action: "add", payload: %{value: 1})
{:ok, %{total: 1}}
```

> **_NOTE_**: We **recommend** to use protobufs as payload and also the state definition, with: `state_type: Protos.YourStateType`, however for this example for the sake of simplicity we are using JSON.

Reading this code example, you probably had some questions:

1. What exactly `"spawn-system"` means?
2. Why is it a `Sdk`?
3. How do I run it?
4. How do we handle the state persistence?
5. Why not just use a GenServer?

Let's answer those in the following sections:

## Actor System

Spawn is a platform that also handles infrastructure for you, we run on top of kubernetes and have defined some [**Kubernetes CRDs**](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) that helps you configure the clustering and lifecycle of your actors.

A system is an entity that encapsulates multiple Actors in a context that makes sense for you.

We can configure one using the pre-defined Spawn CRDs, and we will also be configuring here which persistent database we are going to use to hold our Actors state.

## SDKs

We can have multiple actors in the same system, with different SDKs registering those actors.
We call each deployment that uses an SDK an "ActorHost."

In our example, we could have two SDKs, Elixir and NodeJS, running the same actor or different ones.
Spawn will then forward any invocations for one of those registered SDKs, with the specified implementation for each action.
You can even invoke an actor registered in a different system or in the same system from another SDK.

For instance, if we wanted to invoke the same actor we wrote but in a [NodeJS ActorHost](https://github.com/eigr/spawn-node-sdk), it would look like this:

```TS
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

## That sounds magical, how do I run it?

In development mode for Elixir, you can take advantage of using Spawn as a lib, you'll be able to use all the features you wan't in a single runtime.

However for production we **recommend** using our CRDs set up for you.

First of all you need to install our k8s CRD with the following manifest (using kubectl):

```BASH
kubectl create ns eigr-functions && curl -L https://github.com/eigr/spawn/releases/download/v1.0.0/manifest.yaml | kubectl apply -f -
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
the instances starting that should handle the clustering and all the heavy insfrastructure work for you.

## How do we handle the state persistence?

For each actor, you can set up a snapshot_timeout and a deactivate_timeout

- **deactivate_timeout** is how much time in ms you want your actor to be hot in memory
- **snapshot_timeout** is how often you want to save snapshots of your state in your storage

After the actor is deactivated, either by the timeout or a k8s rollout we are correctly handling the lifecycle of each process
and saving the state in the configured persistent storage.

We tuned our CRDs and signal handling in a way that you won't be losing data in rollouts or net-splits.

## Why not just use a GenServer and handle clustering by myself?

If you choose to go down that path, you would need to address the following challenges:

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

Alternatively, you could let Spawn do that stuff for you.
While it may initially seem like overkill for a simple problem, it can save you from falling down the rabbit hole as your requirements grow more complex. By utilizing Spawn, you can offload the burden of managing these intricacies and focus on solving your problem at hand.

## Conclusion

This is supposed to be a very practical, hands on usage of Spawn, for more information about the foundation and concepts of the platform, see:

- [Spawn Full Documentation](https://github.com/eigr/spawn)
- [Beyond Monoliths and Microservices](https://eigr.io/blog/beyond-monoliths-and-microservices/)
