---
sidebar_position: 999
---

# History

The _eigr/functions_ project of eigr.io is based on ideas and concepts that where brought to life with
the [Cloudstate](https://cloudstate.io)
open-source project. In the following section we describe why project eigr looks similar to Cloudstate and why it was
started at all.

## The Legacy of Cloudstate

Cloudstate is an open-source project that was started by [Lightbend Inc.](https://lightbend.com/) in 2019 and took the
challenge to solve one of the harder problems of the classical FaaS model (Function-as-a-Service) in serverless
computing. _Serverless 1.0_, as the project stated, lacks the concept to manage state in the world of stateless
functions and therefore burdens the user to integrate some form of state-management into an inherently stateless
architecture.

Cloudstate started with two promises to "pave the way for Serverless 2.0" to solve that problem:

1. **A standards effort**—defining a specification, protocol between the user functions and the backend, and a TCK.
2. **A reference implementation**–implementing the backend and a set of client API libraries in different languages.

The decision to fork the Cloudstate project was based on a shift in focus since about mid 2020 of its initiating
organization [Lightbend Inc.](https://lightbend.com/) to pursue
a [Serverless offering](https://www.lightbend.com/akka-serverless) of the Cloudstate technology. This focus left the
open source project and its community in limbo with no clear roadmap and kept its further development locked where nothing but a fork was an
option to further work on the vision Cloudstate promised to solve.

Members of the eigr.io open-source project have been very supportive and engaged early on in the Cloudstate project.
Also, many of the Cloudstate "User Language Support
Libraries" [have been initiated and implemented by that community](https://github.com/cloudstateio?q=support). The
eigr/functions project will build on that work, enhance it, be an open and welcoming community and going forward
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

## Why on the BEAM?

The decision to switch technical grounds was mainly guided by the fact that Cloudstate went into hibernation mode, and
it made no sense to re-implement the Cloudstate proxy in Scala and Akka Cluster itself again. Going with Go or Rust
would have been an option. But we realized early on, that competing in a way with the excellent work of the Akka team we
would not come soon with a replacement of all what Akka and Akka Cluster provides in the context of this project.

With a modern functional language like Elixir and the Erlang Ecosystem in general in its similar excellent shape these
days, it came to us, why not to use the BEAM, Elixir and Erlang/OTP as the technical ground for our new project. Even if
Erlang or Elixir had been exotic languages to be used, the technology and especially the language in which the service
proxy is written is irrelevant in the context that enables a cloud-native and therefore polyglot environment.

With eigr/functions being based on Erlang/OTP and running on the BEAM its an excellent fit for a serverless runtime to
be built on. The "message in, message out" pattern for a FaaS implementation, as well as the requirements to run
actually virtual actors in a distributed system is right spot on what OTP, the BEAM and Erlang are all about.
