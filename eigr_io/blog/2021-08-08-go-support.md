---
slug: "serverless-go-sdk"
title: "Eigr Functions Go SDK"
author: "Marcel Lanz"
author_title: "eigr.io – Core Team"
author_url: https://github.com/marcellanz
author_image_url: https://avatars.githubusercontent.com/u/12616445?v=4
tags: [serverless, golang]
---

```
┌──────────────────────┐                                       
│                      │                                       
│                      │                                       
│      eigr/massa      │                                       
│                      │┌─────────────────────────────────────┐
│                      ││      eigr/serverless protocol       │
└──────────────────────┘└─────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                       eigr/serverless                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│                      │      │                      │      │                      │
│                      │      │                      │      │                      │
│      message IN      │──────┼──▶   eigr/massa      ├──────┼──▶  message OUT      │
│                      │      │                      │      │                      │
│                      │      │                      │      │                      │
└──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```