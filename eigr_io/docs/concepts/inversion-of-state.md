---
sidebar_position: 10
---

# Inversion of State

Serverless runtimes are often hidden in a cloud providers offering and exposed solely by their programming API and
deployment procedures. In this talk, we'll explore an open-source Serverless runtime built for the cloud and
on-premises, running on the BEAM with a polyglot programming model to build general purpose applications.

```plain title="inversion of state"
                                                 ┌ ─ ─ ─ ─ ─ ─ ─ ─                                      
                   ╔═════════════════════════╗       message-in   │                                     
                   ║                         ║   │                                                      
╔════════════╗     ║                         ║     ╔════════════╗ │                                     
║  request1  ║─────╬──(1)────────────────────╬──▶│ ║  request1  ║─────(3.2)────────────┐                
╚════════════╝     ║                         ║     ╠════════════╣ │                    │                
                   ║             ┌─────(2)───╬──▶│ ║   state1   ║─────(3.1)──────┐     │                
                   ║             │           ║     ╚════════════╝ │              │     │                
                   ║             │           ║   └ ─ ─ ─ ─ ─ ─ ─ ─   ╔═══════════╬═════╬═══════════════╗
                   ║             │           ║                       ║           │     │               ║
                   ║             │           ║                       ║           ▼     ▼               ║
                   ║             │           ║                       ║ function(ctx, message) response ║
                   ║             │           ║                       ║                                 ║
                   ║             │           ║                       ║           │               │     ║
                   ║             │           ║   ┌ ─ ─ ─ ─ ─ ─ ─ ─   ╚═══════════╬═══════════════╬═════╝
╔════════════╗     ║             │           ║     ╔════════════╗ │              │               │      
║ response1  ║◀────╬──(6)────────┼───────────╬───┼─║ response1  ║  ◀──(4.2)──────┼───────────────┘      
╚════════════╝     ║             │           ║     ╠════════════╣ │              │                      
                   ║             │    ┌──────╬───┼─║   state2   ║  ◀──(4.1)──────┘                      
                   ║             │    │      ║     ╚════════════╝ │                                     
                   ║Proxy        │    │      ║   │                                                      
                   ╚═════════════╬════╬══════╝      message-out   │                                     
                                 │    │          └ ─ ─ ─ ─ ─ ─ ─ ─                                      
                                 │    │                                                                 
                                 │    │                                                                 
                   ╔═════════════╬════╬══════╗                                                          
                   ║             │    │      ║                                                          
                   ║             │    │      ║     ╔════════════╗                                       
                   ║             └────┼──────╬─────║   state1   ║                                       
                   ║                  │      ║     ╠════════════╣                                       
                   ║                  └─(5)──╬────▶║   state2   ║                                       
                   ║                         ║     ╚════════════╝                                       
                   ║State-Management         ║                                                          
                   ╚═════════════════════════╝                                                                                                                    
```