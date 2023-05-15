---
slug: "beyond-monoliths-and-microservices"
title: "Beyond Monoliths and Microservices"
authors: [sleipnir, marcellanz]
tags: [spawn, serverless, eigr-functions, design, architect]
draft: "false"
---

Recently a [article](https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90)
launched by the Amazon Prime team reactivated the Monoliths versus Microservices discussion. It is remarkable, and often reproachable, 
how many fervent feelings there are around this already old discussion.
I've always wondered what the point really was between these two conflicting worldviews. And I could never understand why
so much energy is expended on this type of discussion.

In this article we intend to introduce you to why it's time to move forward and how our Spawn technology can help developers 
let go of these age-old issues, and that do not add much value to the business.

## Monoliths

![Monoliths](/img/monoliths.jpg "Monoliths")

Monolithic architecture is given by a single, undivided system that runs in a single process, a software application in which different components are linked to a single program within a single platform.
As the entire system is in a single block, its initial development can be more agile, making it possible to develop an application in less time and with less initial complexity, notice the initial word.

As a monolithic application evolves, several classes, modules, methods or functions are added to this same code and process.
Another point is that monolithic applications tend not to scale horizontally well, since all the general functionality of a system is tied to a single process it is expected that this type of application scales better vertically than horizontally. This particular characteristic also makes it difficult to implement this type of system in environments such as Kubernetes or other types of Cloud environments, notice that I said difficult and not unfeasible.

And this is where the problems with this type of architecture usually start to appear. In other words, the issue with monoliths seems to be directly related to the scale of the system in question. The more complexity you add, the harder it gets to maintain, which requires more complexity to mitigate the problem, which makes it harder to maintain.... well, you get the point.
To get around these effects, there are many software engineering patterns that help to mitigate such failures (facades, ports, adapters, interface programming and so on), all this additional complexity turns out to be a good price to pay for its defenders, to a certain extent.

## Microservices

![Microservices](/img/microservices.jpg "Microservices")

What differentiates the microservices architecture from more traditional monolithic approaches is how it decomposes the application into smaller units. Each unit in turn is called a service and can be created and deployed independently. In other words, each individual service can work or fail without compromising the others. This helps you embrace the technology side of DevOps and make constant iteration and constant delivery (CI/CD) more streamlined and feasible (at least in theory).
In terms of scaling microservices tend to scale better horizontally than vertically and this in turn is better for infrastructures powered by Kubernetes, Serververless, or even other types of Cloud environments.

But not everything is flowers with microservices. Microservices, generally, increase the complexity in managing failures and in the control of expenses with infrastructure. Developers had to become experts in distributed and large-scale systems.
To deal with it all, over the years several techniques have emerged to avoid various problems of distributed systems, as well as the advent of Observability and FinOps techniques that helped to control infrastructure costs, allowed the architecture of microservices to become extremely popular.

## Spawn and Beyond

I could write dozens of pros and cons of each of these architectures and, at least for us, I would never come up with an outright winner. The undeniable fact is that both have great strengths and equally great flaws. We are without a winner and therefore we need to let go and go further.

In simple terms, what we here in the Eigr community believe is that developers, in general, need a platform that is, among other things, be simpler, dynamic, vendor lock free, focused on the business domain and not on precious technicalities, and that adapts well to the granularity your business requirements demand.

Now let's introduce our Spawn technology and try to explore a little bit of how it can help us go further.

[Spawn](https://github.com/eigr/spawn) is primarily based on three very powerful abstractions, the [Sidecar Pattern](https://thenewstack.io/operators-and-sidecars-are-the-new-model-for-software-delivery/), the [Actor Model](https://www.brianstorti.com/the-actor-model/) and the [Serverless](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf). The former allows you to plant an application's components in a separate process or container providing isolation and encapsulation. This pattern enables applications to be composed of heterogeneous technologies and components, while allowing this separate process to handle the infrastructure layers without affecting the evolution of your business code. In turn, the second is a fascinating and relatively simple alternative for the development of distributed and concurrent systems. This model allows you to decompose your system into small units, called actors, that communicate only by passing messages. Actors encapsulate state and behavior in a single unit, and are lock-free, that is, when programming with actors you are free of semaphore, mutex and any type of synchronizing code. And finally Serverless lets developers focus on their code without worrying about the infrastructure. Using Kubernetes as an orchestrator for our serverless workloads we can provide a self managed platform without forcing the developer to be tied to any existing public cloud offerings. Free from blockages! 

However, it goes beyond the basics of the Actor Model by exposing several software patterns in a simplified way for the developer. Spawn is also domain oriented to your business, allowing you to focus directly on the business problem, while the Spawn runtime handles things like state management and persistence, caching, inter-process calls, scalability, cluster management, scaling up and down, integration with external middleware, among many other non-functional requirements that software usually needs to achieve its final goals. 

Spawn is also a polyglot platform, allowing you to write Actors in different languages and allowing them to communicate with each other in a totally transparent way without the need to define REST or RPC interfaces between your components. Being based on the powerful [Erlang technology](https://www.wired.com/2015/09/whatsapp-serves-900-million-users-50-engineers/) you get the best of what the, [battle tested]((https://elixir-lang.org/blog/2020/10/08/real-time-communication-at-scale-with-elixir-at-discord/)), [Erlang Virtual Machine is capable of providing](https://serokell.io/blog/introduction-to-erlang) without giving up your natural domain language, be it  [Java, Typescript, Elixir](https://github.com/eigr/spawn#sdks), or another.

Now that we have a basic idea about Spawn we can move on to how it can help us move beyond the discussion of Monoliths and Microservices.

## Services, Applications, and Granularity

To understand how Spawn can help us move the discussion forward, we first need to understand how Spawn organizes its deployable components.
The most basic unit of Spawn is the Actor, it is through Actors that developers can express their domain problems and as we said before the Actor is responsible for encapsulating the state and its associated behavior in itself.

![Actors](/img/actors.jpg "Actors")    

That said, a Spawn application in a simplified way is nothing more than a series of Actors organized in an deployment unit that we can call service or application, but which in our terminology we call ActorHost. An ActorHost is the deployable unit which is made up of the host container (where the developer works) plus the proxy container which is where the actors actually perform their tasks.

![ActorHost](/img/actor-host.jpg "Actor Host")

You can have hundreds or even thousands of actors running on a single ActorHost and that in turn can have multiple replicas running on a cluster. As Spawn Actors are activated only when there is work to be done and are deactivated after a period of inactivity, the workloads are distributed among different replicas of the same ActorHost. From the developer's point of view, it doesn't matter because the only thing he needs to be able to send a message to an actor is his name. No complicated APIs with additional worries like service discovery, circuit breakers or anything else.

![Replicas](/img/actor-host-replicas.jpg "Actor Host Distribution")

And finally your ActorHost are grouped within a more general system that we call ActorSystem. All ActorHost applications within the same actor system actively communicate with each other forming a real cluster of nodes. Think of an ActorSystem as a distributed container. An actor within an actor system can still communicate with another actor within another actor system in a transparent way for the developer, but the difference is that this communication is done across different networks. That is, ActorSystem provides the network isolation of a set of ActorHost, allowing even very large systems to maintain a high level of isolation and allowing better resource management and avoiding non-essential communication overhead.

![ActorSystem](/img/actor-systems.jpg "Actor Systems")

As seen above through Spawn you can talk to different grain sizes to achieve your goals without having to think too hard about how to connect the parts. You can group all your actors within a single application or break it into smaller parts, but the way you interact between these components will not change, this type of architecture has become an [industry trend](https://www.infoq.com/news/2023/03/google-weaver-framework/) and we proud to say that Spawn thought of all this a long time ago and has leveraged this initiative with our Spawn technology.

## Conclusion

This whole discussion around Microservices vs Monoliths is a lot of fun and a excellent mental exercise, but we as software engineers must remember
that at the end of the day, it is our deliveries of value to the business that will make the difference. Spawn with its polyglot serverless experience, using the full potential of Cloud's open standards can help you take big steps in that direction. Without you having to waste precious hours around such warm discussions and far from the big goal. Solve your business problems!

In this post we demonstrate that our Spawn technology based on important industry standards and focused on bringing agility to developers' day-to-day is a valuable tool for you to achieve your business goals without having to give up the scalability and resiliency that the today's world demands. We could talk a lot more about Spawn (Activators, Workflows, exposing APIs in a declarative way and much more) but that will be for other posts, today we focus on how Spawn will help you get out of this discussion about Monolithics and Microservices. See you again soon!