---
sidebar_position: 20
---

# Service Proxy – eigr/massa

## Clone the repository

To get started with the massa proxy, first clone the project from Github

```
git clone https://github.com/eigr/massa.git
```

## Build

```bash 
> cd massa
> mix local.rebar --force
> mix local.hex --force
> mix deps.get 
```

## Run the Action TCK

As an explanatory example, we will run the Action TCK with the eigr/massa proxy and the Go implementation.

```
                               ┌─────────┐                 ┌─────────┐                    
                         ┌────▶│PORT 9001│            ┌───▶│PORT 8080│                    
╔════════════════════╗   │    ╔╩─────────╩═════════╗  │   ╔╩─────────╩═══════════════════╗
║                    ║   │    ║                    ║  │   ║      TCK function image      ║
║      grpcurl       ╠───┘    ║  eigr/massa proxy  ╠──┘   ║                              ║
║                    ║        ║                    ║      ║  gcr.io/eigr-io/eigr-go-tck  ║
╚════════════════════╝        ╚════════════════════╝      ╚══════════════════════════════╝
```

```
> cd apps/massa_proxy
> mix deps.get && mix format && mix compile
> iex --name massa-001@127.0.0.1 -S mix
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[debug]:Loading config user_function_host with value 0.0.0.0
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[debug]:Loading config user_function_port with value 8080
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[debug]:Loading config user_function_sock_addr with value /var/run/cloudstate.sock
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[debug]:Loading config user_function_uds_enable with value false
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[info]: HTTP Server started on port 9001
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[info]: Cluster Strategy 
2021-08-10 16:41:47.723 [massa-001@127.0.0.1]:[pid=<0.591.0> ]:[debug]:Cluster topology [proxy: [strategy: Cluster.Strategy.Gossip]]
2021-08-10 16:41:47.726 [massa-001@127.0.0.1]:[pid=<0.709.0> ]:[debug]:Registry Node :"massa-001@127.0.0.1" joining with Node :"massa-001@127.0.0.1"
2021-08-10 16:41:47.726 [massa-001@127.0.0.1]:[pid=<0.712.0> ]:[info]: Starting Horde.RegistryImpl with name MassaProxy.GlobalRegistry
2021-08-10 16:41:47.726 [massa-001@127.0.0.1]:[pid=<0.713.0> ]:[debug]:Supervisor Node :"massa-001@127.0.0.1" joining with Node :"massa-001@127.0.0.1"
2021-08-10 16:41:47.726 [massa-001@127.0.0.1]:[pid=<0.716.0> ]:[info]: Starting Horde.DynamicSupervisorImpl with name MassaProxy.GlobalSupervisor
2021-08-10 16:41:47.728 [massa-001@127.0.0.1]:[pid=<0.729.0> ]:[debug]:Initializing Entity Registry with state []
2021-08-10 16:41:47.728 [massa-001@127.0.0.1]:[pid=<0.730.0> ]:[debug]:Cache State: [cache_name: :cached_servers]
2021-08-10 16:41:47.728 [massa-001@127.0.0.1]:[pid=<0.731.0> ]:[debug]:Cache State: [cache_name: :reflection_cache]
Interactive Elixir (1.12.2) - press Ctrl+C to exit (type h() ENTER for help)
iex(massa-001@127.0.0.1)1> 2021-08-10 16:41:47.778 [massa-001@127.0.0.1]:[pid=<0.732.0> ]:[info]: Starting Elixir.MassaProxy.Protocol.Discovery.Manager on target function address tcp://127.0.0.1:8080
```

## Run the Action TCK Image

To get started with development one can start one of the TCK images.

```
> docker run -it --rm -p 8080:8080 gcr.io/eigr-io/eigr-go-tck-action 
2021/08/10 14:54:37 Received discovery call from sidecar [massa-proxy 0.1.0] supporting Cloudstate 1.1
2021/08/10 14:54:37 Responding with: service_name:"cloudstate.tck.model.EventSourcedTckModel" service_version:"0.2.0" service_runtime:"go1.14.4 linux/amd64" support_library_name:"cloudstate-go-support" support_library_version:"0.2.0" protocol_minor_version:2
```

Right after the starting the TCK image has been started, the massa proxy will discover the new entity:

```
2021-08-10 16:54:38.918 [massa-001@127.0.0.1]:[pid=<0.732.0> ]:[debug]:Service compilation finish!
2021-08-10 16:54:38.919 [massa-001@127.0.0.1]:[pid=<0.732.0> ]:[debug]:Endpoint Definition:
defmodule Massa.Server.Grpc.ProxyEndpoint do
  @moduledoc false
  use GRPC.Endpoint

  intercept(GRPC.Logger.Server)
  intercept(GRPCPrometheus.ServerInterceptor)

  services = [
    MassProxy.Reflection.Service,
    Cloudstate.Tck.Model.Action.ActionTckModel.Service.ProxyService,
    Cloudstate.Tck.Model.Action.ActionTwo.Service.ProxyService,
  ]
  run(services)
end
2021-08-10 16:54:38.932 [massa-001@127.0.0.1]:[pid=<0.732.0> ]:[debug]:Endpoint compilation finish!
2021-08-10 16:54:38.932 [massa-001@127.0.0.1]:[pid=<0.732.0> ]:[info]: Starting gRPC Server...
2021-08-10 16:54:38.933 [massa-001@127.0.0.1]:[pid=<0.2710.0> ]:[info]: Running Massa.Server.Grpc.ProxyEndpoint with Cowboy using http://0.0.0.0:9000
2021-08-10 16:54:38.933 [massa-001@127.0.0.1]:[pid=<0.732.0> ]:[info]: Started gRPC Server in 1.558888ms
```

It will detect registered services and compile the gRPC stubs needed to serve services. Now, a tool like grpcurl can be
used to issue a service request against the proxied service:

```
> grpcurl -d '{"groups": {"steps": [{"reply":{"message":"The north face was first climbed on July 24, 1938"}}]}}' --plaintext localhost:9000 cloudstate.tck.model.action.ActionTckModel.ProcessUnary
{
  "message": "\n8type.googleapis.com/cloudstate.tck.model.action.Response\u00123\n1The north face was first climbed on July 24, 1938"
}

```

