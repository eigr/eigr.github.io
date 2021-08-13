---
sidebar_position: 20
---

# Cloudstate legacy TCK

```
╔═══════════════════════════════════════╗
║                                       ║
║             user function             ║
║                                       ║
║      gcr.io/eigr-io/eigr-go-tck       ║
║                                       ║
╚═══════════════════════════╦─────────╦═╝
                            │PORT 8080│  
                            └─────────┘  
                                 ▲       
                                 │       
╔════════════════════════════════╩══════╗
║                                       ║
║                  tck                  ║
║                                       ║
║     gcr.io/eigr-io/cloudstate-tck     ║
║                                       ║
╚═══════╦═══════════════════╦─────────╦═╝
        │                   │PORT 8090│  
        ▼                   └─────────┘  
   ┌─────────┐                   ▲       
   │PORT 9000│                   │       
╔══╩─────────╩═══════════════════╩══════╗
║                                       ║
║                 proxy                 ║
║                                       ║
║ gcr.io/eigr-io/cloudstate-proxy-core  ║
║                                       ║
╚═══════════════════════════════════════╝
```

# Cloudstate Images

Cloudstate container images have been preserved to set a baseline to run the latest state of Cloudstate.

## cloudstate-tck

- cloudstateio/cloudstate-tck:lastest
- gcr.io/eigr-io/cloudstate-tck:latest
- cloudstateio/cloudstate-tck:0.6.0
- gcr.io/eigr-io/cloudstate-tck:0.6.0

## cloudstate-proxy-core

- cloudstateio/cloudstate-proxy-core:latest
- gcr.io/eigr-io/cloudstate-proxy-core:latest
- cloudstateio/cloudstate-proxy-core:0.6.0
- gcr.io/eigr-io/cloudstate-proxy-core:0.6.0