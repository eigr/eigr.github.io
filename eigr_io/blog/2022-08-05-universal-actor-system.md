---
slug: "universal-actor-system"
title: "Universal Actor System"
authors: [sleipnir]
tags: [serverless, actors, spawn]
draft: "true"
---

#  Actor Model

The actors model is a mathematical model for concurrent computing and was [originally described](http://www.eighty-twenty.org/files/Hewitt,%20Bishop,%20Steiger%20-%201973%20-%20A%20universal%20modular%20ACTOR%20formalism%20for%20artificial%20intelligence.pdf) by Professor  [Carl Hewitt](https://en.wikipedia.org/wiki/Carl_Hewitt) back in the 70's ([let's say the golden age of programming](https://www.youtube.com/watch?v=-I_jE0l7sYQ)). This model in turn was inspired by physics and obtained its influences from programming languages such as [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk), [Simula](https://en.wikipedia.org/wiki/Simula) and also from other areas such as networks and microprocessors.
An Actor is basically a fundamental unit for computation and relies on [message passing](https://en.wikipedia.org/wiki/Message_passing) to interact with other actors. In response to a message Actors can do one of three things:

1. Create a finite number of new Actors.
2. Send a finite number of messages to other Actors.
3. Determine how to respond to the next message received.

## Overview:

Our ecosystem is called Eigr and we focuses mainly on the following projects:

* [Eigr Functions Controller](https://github.com/eigr/eigr-functions-controller): it's our deployment brain in Kubernetes, it controls the entire lifecycle of our sidecar along with user functions.

* [Massa](https://github.com/eigr/massa): is a Sidecar proxy part of the Eigr Functions offering that aims to provide a high-level abstraction for Stateful Serveless application development.

The Massa proxy is responsible for managing the entire data access infrastructure for user functions, as well as other technical tasks, such as providing the implementation of the user contract via [gRPC](https://grpc.io/) to the outside world, [transcoding HTTP requests to gRPC](https://cloud.google.com/endpoints/docs/grpc/transcoding), caching, making requests to external sources when requested and other tasks that would once have to be performed by the developer directly in his application.

With Massa, the developer only has to worry about their domain objects and their user interface via the contract-first declarative approach.

These two components together form what we call "Eigr Functions". Which is our Serveless offer proposal for general purpose applications a.k.a applications that need to manage state.

In addition to these projects we also work on several other R&D projects that allow us to understand certain parts of the problem we are trying to solve and thus apply the acquired knowledge to the main projects. Research projects worth noting are the following:

* [Falco](https://github.com/eigr/falco): A fork of the elixir-grpc project where we try to improve performance and provide a replacement for the original project that is not being updated by the community that created it. Its development continues in research status.

* [Steinadler](https://github.com/eigr-labs/steinadler): A high-level alternative to Erlang Distribution. While we are aware of the incredible capabilities of the Erlang Distribution, we also know that there are numerous deficiencies in this protocol that we are trying to address. Its development is currently at a standstill.

* [Spawn](https://github.com/eigr-labs/spawn): The **Actor Mesh Framework** is based on the [sidecar proxy pattern](https://dzone.com/articles/sidecar-design-pattern-in-your-microservices-ecosy-1) to provide the multi-language Actor Model framework. Spawn's technology stack on top of BEAM VM (Erlang's virtual machine) provides support for different languages ​​from its native Actor model. Spawn is made up of the following components:

    1. A semantic protocol based on Protocol Buffers.

    2. A Sidecar Proxy written in Elixir that implements this protocol and persistent storage adapters.

    3. Support libraries in different programming languages.

  Currently in full development where its main parts will likely be incorporated into the core of Massa. However, the repository is still private (soon we will open it).

* Astreu (https://github.com/eigr/Astreu): High-performance Messaging System based on gRPC protocol written in Elixir. Your development is on hold (usable for testing)

:::info

In addition to these projects we have the Eigr Functions SDKs which are written in some programming languages ​​like Elixir, Go, Java and etc... each of these projects is in different phases of development but none are yet readily functional.

:::

## Returning to the Eigr Function.

Currently, the Massa project, where our greatest effort is concentrated, is capable of communicating with user functions that implement the Cloudstate protocol in version 0.5 and is capable of dealing only with Action-type entities (Stateless entities).

In the next versions of our proxy, we will probably no longer support the Cloudstate protocol because, once Cloudstate has been discontinued, we will adopt our own Protocol and entities.

We intend to support all of the original project entity types, namely Action **a.k.a** Stateless support, Event Sourcing, Value Entity **a.k.a** CRUD, and CRDTs **a.k.a** [Conflict Free Replicated Data Types](https://crdt.tech/). We will just not bring the semantics of the previous protocol, and creating our own protocol to support these entities.

So we are in the process of completely redesigning our protocol and therefore our proxy as well, we are doing this with proofs of concepts in parallel projects and in project-specific branchs Massa.

I think this is a small summary of what we have done and where we intend to go. I hope to be able to count on your collaboration in any way, with code, with good discussions, answering doubts, or just making small talk around [here](https://discord.gg/Y55eZpyvNs).

I'm curious to know a little more about you and what you expect from us.

Ah, I was forgetting, for those who want to know the reasons for the name Massa I suggest reading [here](https://github.com/eigr/massa/blob/main/FAQ.md).

Thanks for reading!