---
slug: "distributed-elixir-made-easy"
title: "Distributed Elixir made easy"
authors: [eliasdarruda]
tags: [spawn, serverless, eigr-functions, elixir, distributed]
draft: "false"
---

When using Elixir, have you ever had that one brilliant idea that you would use a GenServer to store some state and it would be very cool because you can have consistency and all that Erlang offers but end up being way more complex than you imagined in the first place?

A lot of production environments using Elixir also uses Kubernetes, and using it sometimes makes our lives so much harder, that it becomes less and less atractive to implement that cool idea you had using _GenServer_ or _gen_statem_ and all that due to some complex infrastructure work that you now have to do.

## I'm talking about [**Spawn**](https://github.com/eigr/spawn)

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

  defact add(%{value: value}, %Context{} = ctx) do
    new_total = ctx.state.total + value

    Value.of()
    |> Value.state(%State{total: new_total})
    |> Value.response(%{total: new_total})
  end
end
```

And our application would look like:

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

Having that defined, the same for `Calling` or `Casting` a process in a GenServer, we do it with `invoke`.
As we defined that our Actor, we can use maps as payload or protobufs.

However we **recommend**, to use protobufs as payload and also the state definition.

```Elixir
iex(1)> SpawnSdk.invoke(
  "incrementor",
  system: "my-system",
  command: "add",
  payload: %{value: 1}
)
{:ok, %{total: 1}}
iex(2)> SpawnSdk.invoke(
  "incrementor",
  system: "my-system",
  command: "add",
  payload: %Protos.AddPayload{value: 1} # if we were to use a protobuf to define our payloads
)
{:ok, %{total: 2}}
```

Reading this code example, you probably had some questions:

1. Where does `"my-system"` comes from?
2. Why is it a `Sdk`?
3. How does it keep the state behind the scenes?
4. Why not just use a GenServer?
5. What does this have to do with a distributed system?
