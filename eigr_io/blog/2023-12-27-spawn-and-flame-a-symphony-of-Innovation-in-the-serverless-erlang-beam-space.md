---
slug: "spawn-and-flame-a-symphony-of-Innovation-in-the-serverless-beam-space"
title: "Spawn and Flame: A Symphony of Innovation in the Serverless Erlang/BEAM Space"
authors: [sleipnir]
tags: [spawn, flame, serverless, elixir  ]
draft: "false"
---

In recent times, the eigr community had the privilege of exploring a new addition to the Erlang/BEAM landscape, inspired by the Serverless model: [Flame](https://github.com/phoenixframework/flame). The excitement surrounding this release was tangible, especially given Flame's connection to the renowned Phoenix framework. While [Spawn](https://github.com/eigr/spawn), our software in the same Serverless sphere, might appear as a direct competitor, we believe there is more synergy than competition between them.

It may seem peculiar that we express satisfaction with Flame, considering that Spawn also operates in the Serverless space. However, after more than four years of dedicated work and pioneering discussions on topics like Stateful Serverless and durable computing, we recognize that attention is now turning to concepts we championed from the outset. Additionally, Flame is built on the Erlang virtual machine, making it a distant relative and, in a sense, an ally in our journey.

We are genuinely excited about Flame, actively [contributing to its ecosystem](https://github.com/eigr-labs/flame-k8s) and collaboratively engaging with its community of developers and users. Leveraging our expertise in Kubernetes, we are even developing a backend for Flame in this area, inviting everyone to join us in this joint endeavor.

## Spawn vs. Flame: Exploring Differences and Complementarities

Despite some superficial similarities, Spawn and Flame are fundamentally distinct, both inspired by the Serverless model but with complementary approaches. While Flame follows the Function as a Service (FaaS) paradigm, literally sending functions over the wire and adopting a stateless premise, Spawn is more oriented toward applications that require state management.

In Spawn, we not only embrace the Serverless model but also introduce a new layer based on actors and business contracts. This approach offers a fresh perspective on software design, encouraging developers to think in terms of business rather than the algorithms needed to ensure the infrastructure functions concerning state or external services. While Flame moves functions across the network, in Spawn, we shift data to computation, fundamentally altering how applications are built and maintained.

In summary, although they may seem like competitors at first glance, Spawn and Flame coexist harmoniously, addressing different needs and providing valuable approaches in the vast universe of Serverless computing in the Erlang/BEAM space. Our goal is not only to highlight the differences but also to promote collaboration between both communities, collectively building a more innovative and robust future for Serverless software development.