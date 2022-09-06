---
slug: "current-status-of-the-project"
title: "May 2022 – Status of the Project"
authors: [sleipnir]
tags: [serverless, cloudstate, eigr-functions, project, status]
draft: "false"
---

#  Hello Community

My name is Adriano, I'm a software engineer, I'm 40 years old, I'm Brazilian, and I've been in the technology area for over 20 years on different fronts and having worked in a long list of companies, I'm also the co-founder of the Eigr project together with [@marcellanz](https://github.com/marcellanz) and [@guyso](https://github.com/ralphlaude), previously the three of us were core members of the [Cloudstate](https://cloudstate.io/) project and mainly worked on the supporting SDKs, but we also participated in the central development of Cloudstate technology and collaborated a lot on the development mainly of its protocol.

I see that many of you have just arrived here and that's why I think it's important to give an overview of what we do and talk a little about the current status of the project.

Well, let's go!

## Overview:

Our ecosystem is called Eigr, and we focus mainly on the following projects:

* [Eigr Functions Controller](https://github.com/eigr/eigr-functions-controller): it's our deployment brain in Kubernetes, it controls the entire lifecycle of our sidecar along with user functions.

* [Massa](https://github.com/eigr/massa): is a Sidecar Proxy and part of the _Eigr Functions_ offering that aims to 
  provide a high-level abstraction for General Purpose Stateful Serverless application development.

Massa is responsible for managing the entire data access infrastructure for user functions, as well as other technical tasks such as providing the implementation of the user contract via [gRPC](https://grpc.io/) to the outside world, [transcoding HTTP requests to gRPC](https://cloud.google.com/endpoints/docs/grpc/transcoding), caching, making requests to external sources when requested and other tasks that would once have to be performed by the developer directly in his application.

With Massa the developer only has to worry about their domain objects and their user service interface via a 
contract-first declarative approach. These two components together form Eigr Functions.

In addition to these projects, we also work on several other R&D projects that allow us to understand certain parts 
of the problem we are trying to solve and thus apply the acquired knowledge to the main projects. Research projects worth noting are the following:

* [Falco](https://github.com/eigr/falco): A fork of the elixir-grpc project where we try to improve performance and provide a replacement for the original project that is not being updated by the community that created it. Its development continues in research status.

* [Steinadler](https://github.com/eigr-labs/steinadler): A high-level alternative to Erlang Distribution. While we are aware of the incredible capabilities of the Erlang Distribution, we also know that there are numerous deficiencies in this protocol that we are trying to address. Its development is currently at a standstill.

* [Spawn](https://github.com/eigr-labs/spawn): The **Actor Mesh Framework** is based on the [sidecar proxy pattern]
  (https://dzone.com/articles/sidecar-design-pattern-in-your-microservices-ecosy-1) to provide the multi-language 
  Actor Model framework. Spawns' technology-stack on top of the BEAM VM (the Erlang virtual machine) provides support 
  for different languages from its native Actor model. Spawn is made up of the following components:

    1. A semantic protocol based on Protocol Buffers.

    2. A Sidecar Proxy written in Elixir that implements this protocol as well as persistent storage adapters.

    3. SDKs to support different programming languages.

  Spawn is currently in full development where its main parts will likely be incorporated into the core of Massa.

* Astreu (https://github.com/eigr/Astreu): High-performance Messaging System based on a gRPC protocol written in 
  Elixir. Your development is on hold (usable for testing).

:::info

In addition to these projects we have the Eigr Functions SDKs which are written in some programming languages ​​like 
Elixir, Go, Java and others. Each of these projects is in different phases of development but none are yet readily 
functional.

:::

## Eigr Functions!

Currently, the Massa project, where our greatest effort is concentrated, is capable of communicating with user 
functions that implement the Cloudstate protocol in version 0.5 and is capable of dealing only with Action-type 
entities, which are stateless entities.

In the next version of our proxy, we will probably no longer support the Cloudstate protocol because, once Cloudstate has been discontinued, we will adopt our own Protocol and entities.

We intend to support all the original project entity types, namely Action **a.k.a.** Stateless support, Event 
Sourcing, Value Entity (CRUD), and CRDTs ([Conflict Free Replicated Data Types](https://crdt.tech/)). We 
will just not bring the semantics of the previous protocol, and creating our own protocol to support these entities.

So we are in the process of a complete redesign of our protocol and therefore our proxy as well. We are doing this 
with proof of concepts in parallel projects and in project-specific branches within Massa.

This is a summary of what we have done and where we intend to go. I hope to be able to count on your 
collaboration in any way, with code, with good discussions, answering doubts, or just making small talk around [here](https://discord.gg/Y55eZpyvNs).

I'm curious to know a little more about you and what you expect from us.

Ah, I was forgetting, for those who want to know the reasons for the name Massa I suggest reading [here](https://github.com/eigr/massa/blob/main/FAQ.md).

Thanks for reading!
