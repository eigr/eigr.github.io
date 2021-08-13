---
sidebar_position: 10
---

# Getting started with Go

## Prerequisites

### Go version

Cloudstate Go support requires at least Go 1.14

### Build tool

Cloudstate does not require any particular build tool, you can select your own.

### protoc

Since Cloudstate is based on gRPC services, you need a protoc compiler to compile gRPC protobuf descriptors. This can be
done manually through the [https://grpc.io/docs/languages/go/quickstart/#prerequisites](gRPC Project) where it's
described how to install the protocol compiler as well as the go-protobuf and grpc compiler plugins for Go.

### docker

Cloudstate runs in Kubernetes with [Docker](https://www.docker.com), hence you will need Docker to build a container
that you can deploy to Kubernetes.

In addition to the above, you will need to install the Cloudstate Go language support library by
issuing `go get -u github.com/eigr/permastate-go/cloudstate` or with Go module support let the dependency be downloaded
by `go [build|run|test]`.

By using the Go module support your `go.mod` file will reference the latest version of the support library or you can
define which version you like to use.

```bash title="go get"
go get -u github.com/eigr/functions-go-sdk/functions
```

```go title="go import"
import "github.com/eigr/functions-go-sdk/functions"
```

```go title="go.mod"
module example.com/yourpackage

go 1.14

require (
    github.com/eigr/functions-go-sdk 0.1.0
)
```

## Protobuf files

The Cloudstate Go Support Library provides no dedicated tool beside the protoc compiler to build your protobuf files.
The Cloudstate protocol protobuf files as well as the shopping cart example application protobuf files are provided by
the Cloudstate Repository.

In addition to the `protoc` compiler, the gRPC Go plugin is needed to compile the protobuf file to `*.pb.go` files.
Please follow the instructions at the [https://github.com/golang/protobuf](Go support for Protocol Buffers) project page
to install the protoc compiler as well as the `protoc-gen-go` plugin which also includes the Google standard protobuf
types.

To build the example shopping cart application shown earlier in xref:concepts:grpc.adoc[gRPC descriptors], you could
simply paste that protobuf into a file named `shoppingcart.proto`. You may wish to also define the Go package using
the `go_package` proto option, to ensure the package name used conforms to Go package naming conventions.

```protopbuf
option go_package = "example.com/shoppingcart;shoppingcart";
```

Now if you place your protobuf files under `protobuf/` and
run `protoc --go_out=. --proto_path=protobuf ./protobuf/*.proto`, you'll find your generated protobuf files
under `shoppingcart`.

## Creating a main package

Your main package will be responsible for creating the Cloudstate gRPC server, registering the entities for it to serve,
and starting it. To do this, you can use the CloudState server type, for example:

`include::example$tck/cmd/tck_eventsourced/tck_eventsourced.go[tag=shopping-cart-main])`

```go
func main() {
	server, err := cloudstate.New(protocol.Config{
		ServiceName:    "cloudstate.tck.model.EventSourcedTckModel", // the servicename the proxy gets to know about
		ServiceVersion: "0.2.0",
	})
	if err != nil {
		log.Fatalf("cloudstate.New failed: %s", err)
	}
	err = server.RegisterEventSourced(
		&eventsourced.Entity{
			ServiceName:   "cloudstate.tck.model.EventSourcedTckModel",
			PersistenceID: "event-sourced-tck-model",
			SnapshotEvery: 5,
			EntityFunc:    tck.NewTestModel,
		}, protocol.DescriptorConfig{
			Service: "eventsourced.proto",
		},
	)
	if err != nil {
		log.Fatalf("Cloudstate failed to register entity: %s", err)
	}
	err = server.Run()
	if err != nil {
		log.Fatalf("Cloudstate failed to run: %v", err)
	}
}
```

We will see more details on registering entities in the coming pages.

## Interfaces to be implemented

Cloudstate entities in Go work by implementing interfaces and registering those entities with a Cloudstate instance.
During the registration of the entity an entity factory function,
`/cloudstate/eventsourced#Entity.EntityFunc`, has to be provided so that Cloudstate gets to know how to create and
initialize an event sourced entity.

include::example$example/shoppingcart/entity.go[tag=entity-func]

```go
func NewShoppingCart(eventsourced.EntityID) eventsourced.EntityHandler {
	return &ShoppingCart{
		cart: make([]*domain.LineItem, 0),
	}
}
```

This entity factory function returns a type that implements the
`/cloudstate/eventsourced#EntityHandler` interface. An entity can implement the
optional `/cloudstate/eventsourced#Snapshooter` interface if it likes to enable snapshot functionality. We will see
later how to handle snapshots on the following pages.