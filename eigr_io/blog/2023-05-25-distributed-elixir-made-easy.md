---
slug: "distributed-elixir-made-easy"
title: "Distributed Elixir made easy"
authors: [eliasdarruda]
tags: [spawn, serverless, eigr-functions, elixir, distributed]
draft: "false"
---

Have you ever had that brilliant idea while using Elixir? You know, the one where you thought using a GenServer to store some state would be super cool because it offers consistency and all the goodness that Erlang brings. But then, reality hit you hard, and it turned out to be way more complex than you initially imagined.

In many production environments that use Elixir, Kubernetes often comes into play. But here's the thing, using Kubernetes with Erlang can sometimes be quite challenging. The complex infrastructure work that comes along with it can make your cool idea of using GenServer or gen_statem less and less appealing.

Wouldn't it be awesome if you could care less about dealing with all that infrastructure stuff and instead focus more on implementing the domain-specific logic you need? Imagine having to worry only about your domain code while still having the flexibility to control and make important tweaks to your infrastructure.

## Here comes [**Spawn**](https://github.com/eigr/spawn)

A framework that can solve this issue and do some other cool stuff too.

---

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
    kind: :singleton,
    state_type: :json

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
        system: "my-system",
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
[{:spawn_sdk, "~> 0.6.3"}]
```

Having that defined, the same for `Calling` or `Casting` a process in a GenServer, we do it with `invoke`.

Passing any message we want in the payload attribute, it needs to be a map (that can be encoded to JSON) or a protobuf.

```Elixir
iex(1)> SpawnSdk.invoke("incrementor", system: "my-system", command: "add", payload: %{value: 1})
{:ok, %{total: 1}}

iex(2)> SpawnSdk.invoke(
  "incrementor",
  system: "my-system",
  command: "add",
  payload: %Protos.AddPayload{value: 1} # if we were to use a protobuf to define our payloads
)
{:ok, %{total: 2}}
```

> **_NOTE_**: We **recommend**, to use protobufs as payload and also the state definition, with: `state_type: Protos.YourStateType`, however for this example for the sake of simplicity we are using JSON.

Reading this code example, you probably had some questions:

1. Where does `"my-system"` comes from?
2. Why is it a `Sdk`?
3. How do I run it?
4. Why not just use a GenServer?
5. How does it keep the state behind the scenes?
6. How is this related with distributed systems?

Let's answer those in the following sections:

## Actor System

Spawn is a platform that also handles infrastructure for you, we have defined [**Kubernetes CRDs**](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) that helps you configure the clustering and lifecycle of your actors.

A system is an entity that encapsulates multiple Actors in a context that makes sense for you.

We can configure one using the pre-defined Spawn CRDs, and we will also be configuring here which persistent database we are going to use for the Statestore.

## SDKs

We can have multiple actors in the same system, with different SDKs registering those actors.
We call each deployment that uses an SDK an "ActorHost."

In our example, we could have two SDKs, Elixir and NodeJS, running the actor.
Spawn will then forward any invocations for one of those registered SDKs, with the specified implementation for each command.
You can even invoke an actor registered in a different system or in the same system from another SDK.

For instance, if we wanted to invoke the same actor in a NodeJS ActorHost, it would look like this:

```TS
import spawn from '@eigr/spawn-sdk'

const response = await spawn.invoke('incrementor', {
  command: 'add',
  system: 'my-system',
  payload: {value: 5}
})
console.log(response)
// { total: 6 }
```

This way, we can interact with each actor globally, across systems and ActorHosts, while still maintaining the same state handling mechanism. And the best part? We can achieve all of this without the need for transactions, locks, or any additional infrastructure to support state write changes of that nature.

## That sounds magical, how do I run it?

First of all you need to install our k8s CRD with the following manifest (using kubectl):

```BASH
kubectl create ns eigr-functions && curl -L https://github.com/eigr/spawn/releases/download/v0.6.3/manifest.yaml | kubectl apply -f -
```

> **_NOTE:_** You need to inform the desired release version. Check our github to see the latest one released.

After installing it successfully, you need now to configure your System:

```yaml
apiVersion: spawn-eigr.io/v1
kind: ActorSystem
metadata:
  name: my-system # Mandatory. Name of the ActorSystem
  namespace: default # Optional. Default namespace is "default"
spec:
  statestore:
    type: MySql # Valid are [MySql, Postgres, Sqlite, MSSQL, CockroachDB]
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
    spawn-eigr.io/actor-system: my-system
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

## How do we handle the state changes?

(WIP)

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

## How is this related with distributed systems?

(WIP)

## Conclusion

This is supposed to be a very practical, hands on usage of Spawn, for more information about the foundation and concepts of the platform, see:

- [Spawn Full Documentation](https://github.com/eigr/spawn)
- [Beyond Monoliths and Microservices](https://eigr.io/blog/beyond-monoliths-and-microservices/)