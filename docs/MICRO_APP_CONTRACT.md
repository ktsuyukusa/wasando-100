# Micro-App Product Contract

Every WaSanDo module is a small commercial building block.

## Required
- One useful job with a clear buyer and outcome.
- Standalone use and composability.
- White-label branding by configuration, never hard-coded WaSanDo identity.
- Customer-facing strings outside functional logic.
- Initial locale architecture: Japanese, English, Polish.
- Locale-aware currency, dates, numbers, terminology and market copy.
- No customer-specific business logic in the reusable core.
- Stable integration boundary: API, webhook, import/export or embeddable UI where appropriate.
- Portable customer data.
- Replaceable AI/model providers where practical.
- Hosted, customer-branded, self-hosted/on-premise deployment where the use case requires it.
- Commercial boundary supporting appropriate combinations of pay-per-use, credits/tickets, monthly, licence and DFY.

## Reuse rule
Before building a module, check whether an existing module already performs the job.

## Repository rule
Do not create one repository per trivial function. Split a module when it has an independent buyer, deployment lifecycle, security/data boundary, or genuine reuse across products.

## Clipping is a module family, not a monolith
Potential independent modules:
- Campaign Brief Builder
- Content/Video Intake
- Clip Generator
- Content Localizer
- Creator Assignment
- Publication URL Collector
- Performance Checker
- Reward Calculator

Japan and Poland are launch configurations, not hard-coded boundaries.
