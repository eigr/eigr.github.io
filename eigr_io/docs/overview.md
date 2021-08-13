---
sidebar_position: 10
---

# Overview

> WIP. The eigr.io documentation is a work-in-progress right now.

## Abstract

Serverless runtimes are often hidden in a cloud providers offering and exposed solely by their programming API and
deployment procedures. eigr.io is an open-source serverless runtime built for the cloud and on-premises, running on the
BEAM with a polyglot programming model to build general purpose applications.

## Key Points

- The eigr/functions project is no fork of Cloudstate but based on a new implementation of the Cloudstate protocol.
- The technical basis for project eigr is Erlang/OTP and the BEAM-VM.
- Developer Libraries are intended to be compatible with Cloudstate and Akka Serverless.

## Function as a Service (FaaS)

```plain title="FaaS"
╔═══════════════╗    ╔═══════════════════╗    ╔═══════════════╗
║               ║    ║                   ║    ║               ║
║  Message In   ║───▶║      Service      ║───▶║  Message Out  ║
║               ║    ║                   ║    ║               ║
╚═══════════════╝    ╚═══════════════════╝    ╚═══════════════╝
```

> "message in, message out" – Bonér, 2020, "CloudState—Towards Stateful Serverless"

## Stateful Services

State is brought to the incoming message right at the time the message passed to the service and even before the service
handles that message. This is possible by state-models that are abstracted in a way so that state can be lifted to a
context available to a service that has chosen the very state-model.

```plain title="Stateful FaaS"
╔═══════════════╗                             ╔═══════════════╗
║               ║─┐                        ┌─▶║               ║
║  Message In   ║ │  ╔═══════════════════╗ │  ║  Message Out  ║
║               ║ └─▶║                   ║─┘  ║               ║
╚═══════════════╝    ║      Service      ║    ╚═══════════════╝
╔═══════════════╗ ┌─▶║                   ║─┐  ╔═══════════════╗
║               ║ │  ╚═══════════════════╝ │  ║               ║
║   State In    ║─┘                        └─▶║   State Out   ║
║               ║                             ║               ║
╚═══════════════╝                             ╚═══════════════╝
```
