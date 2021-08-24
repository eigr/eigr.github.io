---
slug: "the-cloudstate-protocol"
title: "The Cloudstate Protocol"
author: "Marcel Lanz"
author_title: "eigr.io – Core Team"
author_url: "https://github.com/marcellanz"
author_image_url: "https://avatars.githubusercontent.com/u/12616445?v=4"
tags: [serverless, cloudstate, eigr-functions]
draft: "true"
---

# The Cloudstate Protocol

:::info

Based on the last released version of Cloudstate.io – v0.6.0

:::

## Introduction

One of the most interesting properties of the [Cloudstate](https://cloudstate.io/) project was, that it introduced a
protocol that connects a service proxy to any language or system that can speak that protocol. This protocol forms a
non-binary ABI between the system that implements the heavy lifting of scaling, managing distributed state and message
routing system, and the user functions implemented. Together with an TCK, a Technology Compatibility Kit, components
that implements the protocol can be verified for their compatibility with the protocol. Cloudstate has chosen a modern
and language independent transport layer based on [gRPC](https://www.grpc.io) to define the protocol as well as generate
languages implementation stubs to be used between the service proxy and language function libraries, called user support
libraries in Cloudstate.

As Cloudstate strove to support different programming languages that can be used to implement _user functions_, it
brought an interesting and also challenging aspect to the project to be implemented itself. The possibility to have
support for a wide variety of languages, ranging from PHP, C++, JavaScript, Go, Rust, Dart and Python as well as
languages from the systems own technical base, the JVM, with Java, Scala and Kotlin made the project interesting for all
of these communities at once. Also, it brought the challenge to get support for these languages implemented. As it was
shown early on, different language support libraries for different programming languages where incubated by the forming
open-source community. What followed where [multiple](https://github.com/cloudstateio?q=support) languages get support
by a open-source contributors initiated.

## The Protocol

The Cloudstate Protocol is defined as a collection
of [protobuf](https://developers.google.com/protocol-buffers/docs/proto3) files defining messages and services.
Cloudstate formed a specification of this protocol together with the protobuf files, gRPC services and a TCK that
verifies their implementation.

To choose gRPC as a way to specify system boundaries and their API/SPI is a trend that can be found in many cloud native
project these days. Its even used to defined systems and their interfaces internally between software components. It
enables a safe and pragmatic way to define these components connecting points. (TODO: references. dapr, hashicorp
waypoint, …)

### entity.proto

A central component of the protocols types used is the `cloudstate.Entity`.

```file title="entity.proto"
message Entity {
    // The type of entity. By convention, this should be a fully qualified entity protocol grpc
    // service name, for example, cloudstate.eventsourced.EventSourced.
    string entity_type = 1;

    // The name of the service to load from the protobuf file.
    string service_name = 2;

    // The ID to namespace state by. How this is used depends on the type of entity, for example,
    // event sourced entities will prefix this to the persistence id.
    string persistence_id = 3;

    // The passivation strategy for the entity.
    EntityPassivationStrategy passivation_strategy = 4;
}
```

Entities

Input from older sources:
https://www.infoq.com/articles/serverless-stalled/

Those reasons are stated as:

Limited Programming Languages
Vendor lock-in
Performance
Can’t run entire applications (i.e. not general purpose-built for this)

https://soundcloud.com/lightbend/serverless-is-back-again
Binary Compatibility vs. Protocol Compatibility

State-Models to decide to encode the business model.

## Service Discovery

```sdl title="Entity Discovery"
╔═══════════════════╗   ╔═══════════════════╗   ╔═══════════════════╗
║   Service Proxy   ║   ║ Language Support  ║   ║     Function      ║
╚═════════╦═════════╝   ╚═════════╦═════════╝   ╚═════════╦═════════╝
          ║                       ║                       ║          
          ║                       ║◀──register(Entity)────║          
          ║                       ║                       ║          
┌─────────╩───────────────────────╩───────────────────────╩─────────┐
│                           <Registered>                            │
└─────────╦───────────────────────╦───────────────────────╦─────────┘
          ║                       ║                       ║          
          ║──────[Discover]──────▶║                       ║          
          ║                       ║                       ║          
          ║◀────[EntitySpec]──────║                       ║          
          ║                       ║                       ║          
┌─────────╩───────────────────────╩───────────────────────╩─────────┐
│                           <Discovered>                            │
└─────────╦───────────────────────╦───────────────────────╦─────────┘
          ║                       ║                       ║          
     ███████████             ███████████             ███████████                                           
```

## Entities

## gRPC

## State-Models