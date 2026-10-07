# WaSanDo 100

New WaSanDo commercial site built around one question:

> **どうすれば「次の100年も」稼ぎ続けられるか**

This repository is intentionally separate from the previous WaSanDo Hub.

## Three starting routes

1. **会社を経営している** — 今ある会社から、もっと継続的に利益を生み出す
2. **新しい収入源をつくりたい** — 小さく始め、継続して稼ぐ仕組みに育てる
3. **会社・事業を引き継ぎたい** — ゼロから始めず、すでに稼いでいる事業を引き継ぎ、さらに育てる

## Product architecture

WaSanDo 100 is an orchestrator, not a monolith.

Small tools should:
- perform one commercially useful job
- work independently and together
- be white-label from day one
- be multilingual from day one (initially ja / en / pl)
- separate core logic from branding, locale and customer configuration
- support reusable integrations and portable data
- support hosted, customer-branded and, where required, self-hosted/on-premise deployment
- avoid permanent dependency on a single AI provider
- support pay-per-use, ticket/credit, monthly, licence and DFY commercial models

The website routes a customer to the smallest credible combination of tools needed to increase or create durable income.
