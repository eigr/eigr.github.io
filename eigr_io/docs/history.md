---
sidebar_position: 999
---

# History

## The Legacy of Cloudstate

The eigr/massa project got started after parts of the contributors-community around the open-source
project [Cloudstate](https://cloudstate.io) decided to implement a service proxy beside
the [reference implementation](https://github.com/cloudstateio/cloudstate/tree/v0.6.0/proxy) by Cloudstate based on
different technical ground.

The gRPC based "Cloudstate Protocol" and the sidecar-based proxy model, has followed over to the eigr/massa service
proxy implementation. The protocol, on one side, enables a polyglot programming model for eigr – on the other side, it's
the main driver for eigr.

The decision to fork the Cloudstate project and go on with an implementation that differs technology wise is based on a
shift in focus of the initiating organization [Lightbend Inc.](https://lightbend.com/) to pursue
a [Serverless offering](https://www.lightbend.com/akka-serverless)
of the Cloudstate technology. The members of the eigr.io Open-source project have been very supportive and engaged in
many ways in contributions to the platform, as well as the so-called Language Support Libraries that makes the project
attractive to a Cloud Native setting.

## Massa, a Cloudstate Compatible Proxy Implementation

eigr/massa is a Cloudstate compatible proxy implementation in [Elixir](https://elixir-lang.org) on
the [BEAM](https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)).