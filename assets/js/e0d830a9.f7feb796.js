"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[5142],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),A=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=A(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=A(a),p=n,u=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return a?o.createElement(u,r(r({ref:t},h),{},{components:a})):o.createElement(u,r({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var A=2;A<i;A++)r[A]=a[A];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3001:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return A}});var o=a(3117),n=(a(7294),a(3905));const i={slug:"beyond-monoliths-and-microservices",title:"Beyond Monoliths and Microservices",authors:["sleipnir","marcellanz"],tags:["spawn","serverless","eigr-functions","design","architect"],draft:"false"},r=void 0,s={permalink:"/blog/beyond-monoliths-and-microservices",editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/blog/blog/2023-05-10-beyond-monoliths-and-microservices.md",source:"@site/blog/2023-05-10-beyond-monoliths-and-microservices.md",title:"Beyond Monoliths and Microservices",description:"Recently a article",date:"2023-05-10T00:00:00.000Z",formattedDate:"May 10, 2023",tags:[{label:"spawn",permalink:"/blog/tags/spawn"},{label:"serverless",permalink:"/blog/tags/serverless"},{label:"eigr-functions",permalink:"/blog/tags/eigr-functions"},{label:"design",permalink:"/blog/tags/design"},{label:"architect",permalink:"/blog/tags/architect"}],readingTime:8.4,hasTruncateMarker:!1,authors:[{name:"Adriano Santos",title:"eigr.io \u2013 Core Team",url:"https://github.com/sleipnir",imageURL:"https://avatars.githubusercontent.com/u/342502?v=4",key:"sleipnir"},{name:"Marcel Lanz",title:"eigr.io \u2013 Core Team",url:"https://github.com/marcellanz",imageURL:"https://avatars.githubusercontent.com/u/12616445?v=4",key:"marcellanz"}],frontMatter:{slug:"beyond-monoliths-and-microservices",title:"Beyond Monoliths and Microservices",authors:["sleipnir","marcellanz"],tags:["spawn","serverless","eigr-functions","design","architect"],draft:!1},nextItem:{title:"Hello Spawn! \u2013 The Actor Mesh",permalink:"/blog/spawn-the-actor-mesh"}},l={authorsImageUrls:[void 0,void 0]},A=[{value:"Monoliths",id:"monoliths",level:2},{value:"Microservices",id:"microservices",level:2},{value:"Spawn and Beyond",id:"spawn-and-beyond",level:2},{value:"Services, Applications, and Granularity",id:"services-applications-and-granularity",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:A};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Recently a ",(0,n.kt)("a",{parentName:"p",href:"https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90"},"article"),"\nlaunched by the Amazon Prime team reactivated the Monoliths versus Microservices discussion. It is remarkable, and often reproachable,\nhow many fervent feelings there are around this already old discussion.\nI've always wondered what the point really was between these two conflicting worldviews. And I could never understand why\nso much energy is expended on this type of discussion."),(0,n.kt)("p",null,"In this article we intend to introduce you to why it's time to move forward and how our Spawn technology can help developers\nlet go of these age-old issues, and that do not add much value to the business."),(0,n.kt)("h2",{id:"monoliths"},"Monoliths"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Monoliths",src:a(7326).Z,title:"Monoliths",width:"438",height:"189"})),(0,n.kt)("p",null,"Monolithic architecture is given by a single, undivided system that runs in a single process, a software application in which different components are linked to a single program within a single platform.\nAs the entire system is in a single block, its initial development can be more agile, making it possible to develop an application in less time and with less initial complexity, notice the initial word."),(0,n.kt)("p",null,"As a monolithic application evolves, several classes, modules, methods or functions are added to this same code and process.\nAnother point is that monolithic applications tend not to scale horizontally well, since all the general functionality of a system is tied to a single process it is expected that this type of application scales better vertically than horizontally. This particular characteristic also makes it difficult to implement this type of system in environments such as Kubernetes or other types of Cloud environments, notice that I said difficult and not unfeasible."),(0,n.kt)("p",null,"And this is where the problems with this type of architecture usually start to appear. In other words, the issue with monoliths seems to be directly related to the scale of the system in question. The more complexity you add, the harder it gets to maintain, which requires more complexity to mitigate the problem, which makes it harder to maintain.... well, you get the point.\nTo get around these effects, there are many software engineering patterns that help to mitigate such failures (facades, ports, adapters, interface programming and so on), all this additional complexity turns out to be a good price to pay for its defenders, to a certain extent."),(0,n.kt)("h2",{id:"microservices"},"Microservices"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Microservices",src:a(7757).Z,title:"Microservices",width:"453",height:"205"})),(0,n.kt)("p",null,"What differentiates the microservices architecture from more traditional monolithic approaches is how it decomposes the application into smaller units. Each unit in turn is called a service and can be created and deployed independently. In other words, each individual service can work or fail without compromising the others. This helps you embrace the technology side of DevOps and make constant iteration and constant delivery (CI/CD) more streamlined and feasible (at least in theory).\nIn terms of scaling microservices tend to scale better horizontally than vertically and this in turn is better for infrastructures powered by Kubernetes, Serververless, or even other types of Cloud environments."),(0,n.kt)("p",null,"But not everything is flowers with microservices. Microservices, generally, increase the complexity in managing failures and in the control of expenses with infrastructure. Developers had to become experts in distributed and large-scale systems.\nTo deal with it all, over the years several techniques have emerged to avoid various problems of distributed systems, as well as the advent of Observability and FinOps techniques that helped to control infrastructure costs, allowed the architecture of microservices to become extremely popular."),(0,n.kt)("h2",{id:"spawn-and-beyond"},"Spawn and Beyond"),(0,n.kt)("p",null,"I could write dozens of pros and cons of each of these architectures and, at least for us, I would never come up with an outright winner. The undeniable fact is that both have great strengths and equally great flaws. We are without a winner and therefore we need to let go and go further."),(0,n.kt)("p",null,"In simple terms, what we here in the Eigr community believe is that developers, in general, need a platform that is, among other things, be simpler, dynamic, vendor lock free, focused on the business domain and not on precious technicalities, and that adapts well to the granularity your business requirements demand."),(0,n.kt)("p",null,"Now let's introduce our Spawn technology and try to explore a little bit of how it can help us go further."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn"},"Spawn")," is primarily based on three very powerful abstractions, the ",(0,n.kt)("a",{parentName:"p",href:"https://thenewstack.io/operators-and-sidecars-are-the-new-model-for-software-delivery/"},"Sidecar Pattern"),", the ",(0,n.kt)("a",{parentName:"p",href:"https://www.brianstorti.com/the-actor-model/"},"Actor Model")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf"},"Serverless"),". The former allows you to deploy an application's components in a separate process or container providing isolation and encapsulation. This pattern enables applications to be composed of heterogeneous technologies and components, while allowing this separate process to handle the infrastructure layers without affecting the evolution of your business code. In turn, the second is a fascinating and relatively simple alternative for the development of distributed and concurrent systems. This model allows you to decompose your system into small units, called actors, that communicate only by passing messages. Actors encapsulate state and behavior in a single unit, and are lock-free, that is, when programming with actors you are free of semaphore, mutex and any type of synchronizing code. And finally Serverless lets developers focus on their code without worrying about the infrastructure. Using Kubernetes as an orchestrator for our serverless workloads we can provide a self managed platform without forcing the developer to be tied to any existing public cloud offerings. Free from blockages! "),(0,n.kt)("p",null,"However, it goes beyond the basics of the Actor Model by exposing several software patterns in a simplified way for the developer. Spawn is also domain oriented to your business, allowing you to focus directly on the business problem, while the Spawn runtime handles things like state management and persistence, caching, inter-process calls, scalability, cluster management, scaling up and down, integration with external middleware, among many other non-functional requirements that software usually needs to achieve its final goals. "),(0,n.kt)("p",null,"Spawn is also a polyglot platform, allowing you to write Actors in different languages and allowing them to communicate with each other in a totally transparent way without the need to define REST or RPC interfaces between your components. Being based on the powerful ",(0,n.kt)("a",{parentName:"p",href:"https://www.wired.com/2015/09/whatsapp-serves-900-million-users-50-engineers"},"Erlang technology")," you get the best of what the, ",(0,n.kt)("a",{parentName:"p",href:"https://elixir-lang.org/blog/2020/10/08/real-time-communication-at-scale-with-elixir-at-discord/"},"battle tested"),", ",(0,n.kt)("a",{parentName:"p",href:"https://serokell.io/blog/introduction-to-erlang"},"Erlang Virtual Machine is capable of providing")," without giving up your natural domain language, be it  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn#sdks"},"Java, Typescript, Elixir"),", or another."),(0,n.kt)("p",null,"Now that we have a basic idea about Spawn we can move on to how it can help us move beyond the discussion of Monoliths and Microservices."),(0,n.kt)("h2",{id:"services-applications-and-granularity"},"Services, Applications, and Granularity"),(0,n.kt)("p",null,"To understand how Spawn can help us move the discussion forward, we first need to understand how Spawn organizes its deployable components.\nThe most basic unit of Spawn is the Actor, it is through Actors that developers can express their domain problems and as we said before the Actor is responsible for encapsulating the state and its associated behavior in itself."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Actors",src:a(4161).Z,title:"Actors",width:"451",height:"221"}),"    "),(0,n.kt)("p",null,"That said, a Spawn application in a simplified way is nothing more than a series of Actors organized in an deployment unit that we can call service or application, but which in our terminology we call ActorHost. An ActorHost is the deployable unit which is made up of the host container (where the developer works) plus the proxy container which is where the actors actually perform their tasks."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ActorHost",src:a(5305).Z,title:"Actor Host",width:"241",height:"101"})),(0,n.kt)("p",null,"You can have hundreds or even thousands of actors running on a single ActorHost and that in turn can have multiple replicas running on a cluster. As Spawn Actors are activated only when there is work to be done and are deactivated after a period of inactivity, the workloads are distributed among different replicas of the same ActorHost. From the developer's point of view, it doesn't matter because the only thing he needs to be able to send a message to an actor is his name. No complicated APIs with additional worries like service discovery, circuit breakers or anything else."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Replicas",src:a(9618).Z,title:"Actor Host Distribution",width:"531",height:"101"})),(0,n.kt)("p",null,"And finally your ActorHost are grouped within a more general system that we call ActorSystem. All ActorHost applications within the same actor system actively communicate with each other forming a real cluster of nodes. Think of an ActorSystem as a distributed container. An actor within an actor system can still communicate with another actor within another actor system in a transparent way for the developer, but the difference is that this communication is done across different networks. That is, ActorSystem provides the network isolation of a set of ActorHost, allowing even very large systems to maintain a high level of isolation and allowing better resource management and avoiding non-essential communication overhead."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ActorSystem",src:a(3324).Z,title:"Actor Systems",width:"861",height:"281"})),(0,n.kt)("p",null,"As seen above through Spawn you can talk to different grain sizes to achieve your goals without having to think too hard about how to connect the parts. You can group all your actors within a single application or break it into smaller parts, but the way you interact between these components will not change, this type of architecture has become an ",(0,n.kt)("a",{parentName:"p",href:"https://www.infoq.com/news/2023/03/google-weaver-framework/"},"industry trend")," and we proud to say that Spawn thought of all this a long time ago and has leveraged this initiative with our Spawn technology."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"This whole discussion around Microservices vs Monoliths is a lot of fun and a excellent mental exercise, but we as software engineers must remember\nthat at the end of the day, it is our deliveries of value to the business that will make the difference. Spawn with its polyglot serverless experience, using the full potential of Cloud's open standards can help you take big steps in that direction. Without you having to waste precious hours around such warm discussions and far from the big goal. Solve your business problems!"),(0,n.kt)("p",null,"In this post we demonstrate that our Spawn technology based on important industry standards and focused on bringing agility to developers' day-to-day is a valuable tool for you to achieve your business goals without having to give up the scalability and resiliency that the today's world demands. We could talk a lot more about Spawn (Activators, Workflows, exposing APIs in a declarative way and much more) but that will be for other posts, today we focus on how Spawn will help you get out of this discussion about Monolithics and Microservices. See you again soon!"))}c.isMDXComponent=!0},9618:function(e,t,a){t.Z=a.p+"assets/images/actor-host-replicas-b12b1623017baa65eeea989a83d8b1c2.jpg"},5305:function(e,t){t.Z="data:image/jpeg;base64,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"},3324:function(e,t,a){t.Z=a.p+"assets/images/actor-systems-da4f710d6427f071de8d4b26b3d356c3.jpg"},4161:function(e,t,a){t.Z=a.p+"assets/images/actors-70f7cd18ddee890cf3f47a2a1666d1aa.jpg"},7757:function(e,t,a){t.Z=a.p+"assets/images/microservices-e9043a473702a4778a4ef3be0fda7694.jpg"},7326:function(e,t,a){t.Z=a.p+"assets/images/monoliths-670d04d3d2ecfe85efa9d0fa820a2cfd.jpg"}}]);