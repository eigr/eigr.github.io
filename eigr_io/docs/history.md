---
sidebar_position: 999
---

# History

The _eigr/functions_ project of eigr.io is based on ideas and concepts that where brought to life with the Cloudstate
open-source project. In the following section we describe why project eigr looks similar to Cloudstate and why it was
started at all.

## The Legacy of Cloudstate

[Cloudstate](https://cloudstate.io) is an open-source project initiated by [Lightbend Inc.](https://lightbend.com/) in
2019 that took the challenge to solve one of the harder problems of the classical FaaS model (Function-as-a-Service) in
serverless computing. _Serverless 1.0_, as the project stated, lacks the concept to manage state in the world of
stateless functions and therefore burdens the user to integrate some form of state-management into an inherently
stateless architecture.

Cloudstate started with two promises to "pave the way for Serverless 2.0" to solve that problem:

1. **A standards effort**—defining a specification, protocol between the user functions and the backend, and a TCK.
2. **A reference implementation**–implementing the backend and a set of client API libraries in different languages.

The decision to fork the Cloudstate project was based on a shift in focus since about mid 2020 of its initiating
organization [Lightbend Inc.](https://lightbend.com/) to pursue
a [Serverless offering](https://www.lightbend.com/akka-serverless) of the Cloudstate technology. This focus left the
open source community with no clear roadmap and kept its further development locked where nothing but a fork was an
option to further work on the vision Cloudstate promised to solve.

Members of the eigr.io open-source project have been very supportive and engaged early on in the Cloudstate project.
Also, many of the Cloudstate "User Language Support Libraries" have been initiated and implemented by that community.
The eigr/functions project will build on that work, enhance it, be an open and welcoming community and going forward
implementing the original vision of Cloudstate.

## Protocol Compatibility and its future

As long as possible, project eigr will try to be compatible with the Cloudstate protocol. Project eigr has forked the
"User Language Support Libraries" of Cloudstate to further work on their implementations. Similarly the original TCK, as
envisioned, will be used to verify compatibility with the protocol and new polyglot language SDKs of eigr.

A prerequisite to keep the compatibility intact is, that the currently stale Cloudstate project is willing to adopt
change in the future if needed. Its use in Akka Serverless, while being developed as a commercial product, has long
broken with the Cloudstate protocol. It is unknown if the Akka Serverless SDKs, that are open-sourced, will ever be
compatible with Cloudstate again. Nevertheless project eigr
would [welcome](https://github.com/cloudstateio/cloudstate/issues/541)
future compatibility.