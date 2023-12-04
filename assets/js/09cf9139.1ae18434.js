"use strict";(self.webpackChunkeigr_io=self.webpackChunkeigr_io||[]).push([[3287],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(3117),i=(n(7294),n(3905));const o={slug:"distributed-elixir-made-easy-with-spawn",title:"Distributed Elixir made easy with Spawn",authors:["eliasdarruda","sleipnir"],tags:["spawn","serverless","elixir","distributed","durable computing"],draft:"false"},r=void 0,s={permalink:"/blog/distributed-elixir-made-easy-with-spawn",editUrl:"https://github.com/eigr/eigr.github.io/edit/main/website/blog/blog/2023-12-03-distributed-elixir-made-easy.md",source:"@site/blog/2023-12-03-distributed-elixir-made-easy.md",title:"Distributed Elixir made easy with Spawn",description:"Hello Elixir enthusiasts! \ud83d\ude80 As the tech landscape evolves, so should our tools and approaches to development. Today, I'm excited to introduce you to a significant advancement in Elixir development that can reshape how we build distributed systems \u2013 I present to you Spawn.",date:"2023-12-03T00:00:00.000Z",formattedDate:"December 3, 2023",tags:[{label:"spawn",permalink:"/blog/tags/spawn"},{label:"serverless",permalink:"/blog/tags/serverless"},{label:"elixir",permalink:"/blog/tags/elixir"},{label:"distributed",permalink:"/blog/tags/distributed"},{label:"durable computing",permalink:"/blog/tags/durable-computing"}],readingTime:9.695,hasTruncateMarker:!1,authors:[{name:"Elias Dal Ben Arruda",title:"eigr.io \u2013 Core Team",url:"https://github.com/eliasdarruda",imageURL:"https://avatars.githubusercontent.com/u/19327513?v=4",key:"eliasdarruda"},{name:"Adriano Santos",title:"eigr.io \u2013 Core Team",url:"https://github.com/sleipnir",imageURL:"https://avatars.githubusercontent.com/u/342502?v=4",key:"sleipnir"}],frontMatter:{slug:"distributed-elixir-made-easy-with-spawn",title:"Distributed Elixir made easy with Spawn",authors:["eliasdarruda","sleipnir"],tags:["spawn","serverless","elixir","distributed","durable computing"],draft:!1},nextItem:{title:"Beyond Monoliths and Microservices",permalink:"/blog/beyond-monoliths-and-microservices"}},l={authorsImageUrls:[void 0,void 0]},u=[{value:"The Elixir Actors Dilemma",id:"the-elixir-actors-dilemma",level:2},{value:"Enter Spawn: A New Approach to Actors",id:"enter-spawn-a-new-approach-to-actors",level:2},{value:"Consider a GenServer that does the following:",id:"consider-a-genserver-that-does-the-following",level:3},{value:"With Spawn, the same definition would look like:",id:"with-spawn-the-same-definition-would-look-like",level:3},{value:"Unpacking the Magic: Answers to Your Questions",id:"unpacking-the-magic-answers-to-your-questions",level:2},{value:"Actor System",id:"actor-system",level:3},{value:"SDKs",id:"sdks",level:3},{value:"That sounds magical, how do I run it?",id:"that-sounds-magical-how-do-i-run-it",level:3},{value:"Managing State Resilience with Spawn",id:"managing-state-resilience-with-spawn",level:2},{value:"Unleashing Gains in Agility and Innovation with Spawn",id:"unleashing-gains-in-agility-and-innovation-with-spawn",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hello Elixir enthusiasts! \ud83d\ude80 As the tech landscape evolves, so should our tools and approaches to development. Today, I'm excited to introduce you to a significant advancement in Elixir development that can reshape how we build distributed systems \u2013 I present to you Spawn."),(0,i.kt)("h2",{id:"the-elixir-actors-dilemma"},"The Elixir Actors Dilemma"),(0,i.kt)("p",null,"We've all been there \u2013 struck by that stroke of genius while working with Elixir. The allure of in-memory state storage, backed by the reliability of Erlang/OTP, seems like a dream come true. But reality hits hard, especially in the realm of production environments where Kubernetes often plays a pivotal role. Managing multiple servers autonomously, especially in distributed systems, can quickly turn our dream into a complex nightmare."),(0,i.kt)("h2",{id:"enter-spawn-a-new-approach-to-actors"},"Enter Spawn: A New Approach to Actors"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn"},(0,i.kt)("strong",{parentName:"a"},"Spawn"))," is not just another framework; it's a paradigm shift in how we implement code. Imagine a world where you can care less about the underlying infrastructure and instead focus on crafting the domain-specific logic that truly matters. That's precisely what Spawn brings to the table."),(0,i.kt)("p",null,"Let's delve into a quick comparison between a traditional GenServer approach and the innovative Spawn Actor using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn/tree/main/spawn_sdk/spawn_sdk"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("em",{parentName:"strong"},"Spawn Elixir SDK"))),"."),(0,i.kt)("h3",{id:"consider-a-genserver-that-does-the-following"},"Consider a GenServer that does the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ELIXIR"},"defmodule Incrementor do\n  use GenServer\n\n  defmodule State do\n    defstruct [total: 0]\n  end\n\n  def init(_), do: {:ok, %State{total: 0}}\n\n  def handle_call({:add, value}, _from, state) do\n    new_total = state.total + value\n\n    {:reply, {:ok, %{total: new_total}}, %State{state | total: new_total}}\n  end\nend\n")),(0,i.kt)("p",null,"If we execute it, as you probably now already, we can add a specified value to the total stored in memory, and calling add will always return the total amount stored in memory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Elixir"},"iex(1)> {:ok, pid} = GenServer.start_link(Incrementor, [])\niex(2)> GenServer.call(pid, {:add, 1})\n{:ok, %{total: 1}}\n\niex(3)> GenServer.call(pid, {:add, 1})\n{:ok, %{total: 2}}\n")),(0,i.kt)("h3",{id:"with-spawn-the-same-definition-would-look-like"},"With Spawn, the same definition would look like:"),(0,i.kt)("p",null,"Our process defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"GenServer"),", we call it an ",(0,i.kt)("em",{parentName:"p"},"Actor"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ELIXIR"},'defmodule IncrementorActor do\n  use SpawnSdk.Actor,\n    name: "incrementor",\n    kind: :unamed,\n    state_type: :json,\n    deactivate_timeout: 30_000,\n    snapshot_timeout: 10_000\n\n  defmodule State do\n    @derive {Jason.Encoder, only: [:total]}\n    defstruct [total: 0]\n  end\n\n  defact init(%Context{} = ctx), do: Value.noreply_state!(ctx.state || %State{})\n\n  defact add(%{value: value}, %Context{} = ctx) do\n    new_total = ctx.state.total + value\n\n    Value.of()\n    |> Value.state(%State{total: new_total})\n    |> Value.response(%{total: new_total})\n  end\nend\n')),(0,i.kt)("p",null,"Our application would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ELIXIR"},'defmodule Example.Application do\n  @moduledoc false\n  use Application\n\n  @impl true\n  def start(_type, _args) do\n    children = [\n      {\n        SpawnSdk.System.Supervisor,\n        system: "spawn-system",\n        actors: [\n          IncrementorActor\n        ]\n      }\n    ]\n\n    opts = [strategy: :one_for_one, name: Example.Supervisor]\n    Supervisor.start_link(children, opts)\n  end\nend\n')),(0,i.kt)("p",null,"And the SDK can be installed in your Elixir project with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ELIXIR"},'[\n  {:spawn_sdk, "~> 1.0.0"},\n  # if using stateful actors\n  # {:spawn_statestores_mysql, "~> 1.0.0"}\n  # {:spawn_statestores_postgres, "~> 1.0.0"}\n  # ... others\n]\n')),(0,i.kt)("p",null,"When using a statestore, you need to define a statestore key in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.exs")," or using ",(0,i.kt)("inlineCode",{parentName:"p"},"SPAWN_STATESTORE_KEY")," environment variable to make sure your actor state is properly encrypted."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Its ",(0,i.kt)("strong",{parentName:"p"},"recommended")," to use a very safe key in handled in the environment for this key.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ELIXIR"},'config :spawn_statestores, statestore_key: "secure_database_key"\n')),(0,i.kt)("p",null,"Having that defined, the same for ",(0,i.kt)("inlineCode",{parentName:"p"},"Calling")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Casting")," a process in a GenServer, we do it with ",(0,i.kt)("inlineCode",{parentName:"p"},"invoke"),"."),(0,i.kt)("p",null,"Passing any message we want in the payload attribute, it needs to be a struct or map that can be encoded to JSON or a protobuf struct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Elixir"},'iex(1)> SpawnSdk.invoke("incrementor", system: "spawn-system", action: "add", payload: %{value: 1})\n{:ok, %{total: 1}}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE")),": We ",(0,i.kt)("strong",{parentName:"p"},"recommend")," to use protobufs as payload and also the state definition, with: ",(0,i.kt)("inlineCode",{parentName:"p"},"state_type: Protos.YourStateType"),", however for this example for the sake of simplicity we are using JSON.")),(0,i.kt)("h2",{id:"unpacking-the-magic-answers-to-your-questions"},"Unpacking the Magic: Answers to Your Questions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'What exactly is "spawn-system"?')),(0,i.kt)("p",null,'Spawn operates as a platform that manages infrastructure for you. "spawn-system" is a configuration entity encapsulating multiple actors within a meaningful context.'),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Why is it an SDK?")),(0,i.kt)("p",null,"Spawn embraces a multi-language approach. SDKs allow different actors, even in different languages, to register with Spawn. For instance, you could have Elixir and NodeJS actors running the same logic seamlessly."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"How do I run it?")),(0,i.kt)("p",null,"In development, you can use Spawn as a lib. For production, use Kubernetes CRDs provided by Spawn for easy and scalable deployment."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"How do we handle state persistence?")),(0,i.kt)("p",null,"Spawn intelligently handles state persistence through well-defined timeouts and snapshot mechanisms, ensuring reliability even during rollouts."),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Why not just use a GenServer?")),(0,i.kt)("p",null,"Managing a distributed system with GenServer requires tackling numerous challenges. Spawn abstracts away these complexities, allowing you to focus on your domain logic without getting lost in infrastructure intricacies."),(0,i.kt)("p",null,"Two items above deserve a little more comment:"),(0,i.kt)("h3",{id:"actor-system"},"Actor System"),(0,i.kt)("p",null,"Spawn is a platform that also handles infrastructure for you, we run on top of kubernetes and have defined some ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},(0,i.kt)("strong",{parentName:"a"},"Kubernetes CRDs"))," that helps you configure the clustering and lifecycle of your actors."),(0,i.kt)("p",null,"A system is an entity that encapsulates multiple Actors in a context that makes sense for you."),(0,i.kt)("p",null,"We can configure one using the pre-defined Spawn CRDs, and we will also be configuring here which persistent database we are going to use to hold our Actors state."),(0,i.kt)("h3",{id:"sdks"},"SDKs"),(0,i.kt)("p",null,'We can have multiple actors in the same system, with different SDKs registering those actors.\nWe call each deployment that uses an SDK an "ActorHost."'),(0,i.kt)("p",null,"In our example, we could have two SDKs, Elixir and NodeJS, running the same actor or different ones.\nSpawn will then forward any invocations for one of those registered SDKs, with the specified implementation for each action.\nYou can even invoke an actor registered in a different system or in the same system from another SDK."),(0,i.kt)("p",null,"For instance, if we wanted to invoke the same actor we wrote but in a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn-node-sdk"},"NodeJS ActorHost"),", it would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-TS"},"import spawn from '@eigr/spawn-sdk'\n\nconst response = await spawn.invoke('incrementor', {\n  action: 'add',\n  system: 'spawn-system',\n  payload: {value: 5}\n})\n\nconsole.log(response)\n// { total: 6 }\n")),(0,i.kt)("p",null,"This way, we can interact with each actor globally, across different Systems and ActorHosts, while still maintaining the same state handling mechanism. And the best part? We can achieve all of this without the need for transactions, locks, or any additional infrastructure to support sequential state write changes of that nature."),(0,i.kt)("h3",{id:"that-sounds-magical-how-do-i-run-it"},"That sounds magical, how do I run it?"),(0,i.kt)("p",null,"In development mode for Elixir, you can take advantage of using Spawn as a lib, you'll be able to use all the features you wan't in a single runtime."),(0,i.kt)("p",null,"However for production we ",(0,i.kt)("strong",{parentName:"p"},"recommend")," using our CRDs set up for you."),(0,i.kt)("p",null,"First of all you need to install our k8s CRD with the following manifest (using kubectl):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-BASH"},"kubectl create ns eigr-functions && curl -L https://github.com/eigr/spawn/releases/download/v1.0.0/manifest.yaml | kubectl apply -f -\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," You need to inform the desired release version. Check our github to see the latest one released.")),(0,i.kt)("p",null,"After installing it successfully, you need now to configure your System:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: spawn-eigr.io/v1\nkind: ActorSystem\nmetadata:\n  name: spawn-system # Mandatory. Name of the ActorSystem\n  namespace: default # Optional. Default namespace is "default"\nspec:\n  statestore:\n    type: MySql # Valid are [Postgres, MySql, MariaDB, Sqlite, MSSQL, CockroachDB]\n    credentialsSecretRef: mysql-connection-secret # The secret containing connection params created in the previous step.\n    pool: # Optional\n      size: "10"\n')),(0,i.kt)("p",null,"You can generate the credentialsSecret or use whatever secret you are using to store your database credentials.\nAn example would be, note that the secret needs to be created at the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"eigr-functions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic mysql-connection-secret -n eigr-functions \\\n  --from-literal=database=eigr-functions-db \\\n  --from-literal=host='mysql' \\\n  --from-literal=port='3306' \\\n  --from-literal=username='admin' \\\n  --from-literal=password='admin' \\\n  --from-literal=encryptionKey=$(openssl rand -base64 32)\n")),(0,i.kt)("p",null,"After installing the system, you will need to register your ActorHost, that can look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: spawn-eigr.io/v1\nkind: ActorHost\nmetadata:\n  name: elixir-example\n  namespace: default\n  annotations:\n    spawn-eigr.io/actor-system: spawn-system\nspec:\n  host:\n    image: org/your-host-image:0.0.1\n    embedded: true # this is only for Elixir Sdks, you can ignore this if you will use another language\n    ports:\n      - name: "http"\n        containerPort: 8800\n  autoscaler:\n    min: 1\n    max: 2\n')),(0,i.kt)("p",null,"Just by applying this configuration, and having a container that has the application with the example we wrote in the start of the article, we should see\nthe instances starting that should handle the clustering and all the heavy insfrastructure work for you."),(0,i.kt)("h2",{id:"managing-state-resilience-with-spawn"},"Managing State Resilience with Spawn"),(0,i.kt)("p",null,"In the realm of Spawn, we prioritize the resilience of your application's state. Each actor in Spawn comes with configurable parameters, namely the snapshot_timeout and deactivate_timeout. Let's delve into these settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"deactivate_timeout")," determines the duration (in milliseconds) your actor remains actively in memory, even when not in use.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"snapshot_timeout")," how frequently snapshots of your actor's state are saved in your persistent storage."))),(0,i.kt)("p",null,"The magic unfolds after an actor is deactivated, triggered either by the specified timeout or during a Kubernetes rollout. In this scenario, Spawn meticulously manages the lifecycle of each process, ensuring that the state is gracefully saved in the configured persistent storage."),(0,i.kt)("p",null,"Here's the key assurance: even in the face of failures, crashes, or net-splits, Spawn guarantees that the state of your application will always revert to the last valid state. This means if an instance fails, another node seamlessly takes over from where it left off, ensuring the continuity and integrity of your application's data. Our meticulous tuning of Custom Resource Definitions (CRDs) and signal handling ensures that you won't lose data during rollouts or network partitions."),(0,i.kt)("p",null,"With Spawn, you can confidently embrace a resilient state management model, where the reliability and consistency of your application's data are at the forefront of our design philosophy. "),(0,i.kt)("h2",{id:"unleashing-gains-in-agility-and-innovation-with-spawn"},"Unleashing Gains in Agility and Innovation with Spawn"),(0,i.kt)("p",null,"Beyond the facade of extensive configurations lies a treasure trove of advantages awaiting exploration. Spawn not only simplifies but significantly enriches your development experience. Imagine bidding farewell to the complexities of defining Kubernetes resources, the intricacies of rollouts, the considerations of HPA, and the worries of scalability, network configurations, and system integrity assessments."),(0,i.kt)("p",null,"Spawn emerges as the driving force behind a newfound sense of agility and innovation. It liberates you from the burdensome aspects of infrastructure management, allowing you to redirect your focus towards what truly matters \u2013 crafting innovative solutions. Step into a future where complexities dissolve, and your journey into agile and innovative Elixir development begins with a resounding hello! "),(0,i.kt)("p",null,"If you choose to go down that path, you will need to face at least the following challenges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensuring proper handling of connections between multiple nodes in your Erlang cluster."),(0,i.kt)("li",{parentName:"ul"},"Ensuring reliable and synchronized data rollouts to avoid message or state loss during instances rolling out."),(0,i.kt)("li",{parentName:"ul"},"Implementing effective persistence mechanisms to recover data in the event of netsplit scenarios, preventing data loss."),(0,i.kt)("li",{parentName:"ul"},"Managing the process lifecycle to ensure predictable recovery and maintain a consistent state in case of errors."),(0,i.kt)("li",{parentName:"ul"},"Designing a well-defined API that integrates your processes seamlessly with other systems, ensuring message synchronization."),(0,i.kt)("li",{parentName:"ul"},"Establishing a reliable distribution mechanism for sending messages to actors within your own edge, with the ability to synchronize them later."),(0,i.kt)("li",{parentName:"ul"},"Mitigating process queue bottlenecks to optimize performance and prevent delays."),(0,i.kt)("li",{parentName:"ul"},"Ensuring atomicity in a distributed system, maintaining data consistency and integrity."),(0,i.kt)("li",{parentName:"ul"},"Ensuring that you can concentrate on your domain-specific code without being burdened by unnecessary complexities and boilerplate."),(0,i.kt)("li",{parentName:"ul"},"Implementing seamless integration patterns, including process pipelines, customized activators, workflows, and effective management of side effects, among others."),(0,i.kt)("li",{parentName:"ul"},"Developing and managing infrastructure code related to brokers, caching, and other components.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This is more than just a practical example; it's an invitation to explore the full potential of Spawn. For a deeper dive into the concepts and foundations, refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eigr/spawn"},"Spawn Full Documentation")," and our insightful article ",(0,i.kt)("a",{parentName:"p",href:"https://eigr.io/blog/beyond-monoliths-and-microservices/"},"Beyond Monoliths and Microservices"),"."),(0,i.kt)("p",null,"Ready to elevate your Elixir development experience? Embrace the future with Spawn. Happy coding! \ud83d\ude80\u2728"))}c.isMDXComponent=!0}}]);