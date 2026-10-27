# WaSanDo Japanese SaaS Sales Page Standard

## Purpose
Default commercial page architecture for WaSanDo micro-apps sold to Japanese SMEs.

Reference pattern: IVRy / formrun / RESERVA conversion structure, combined with the rule that every section must advance one buying decision.

## Core rules
- ONE APP = ONE JOB.
- ONE PAGE = ONE CUSTOMER ACTION.
- ONE SECTION = ONE SALES JOB.
- Show the business result before the technology.
- Show the working product before asking the buyer to believe claims.
- Use the product UI as the main visual.
- No generic AI imagery.
- No invented testimonials, ROI, usage counts, or customer logos.
- Repeat the same primary CTA throughout the page.
- Add-ons appear only after the core offer is understood.
- Default language is natural Japanese for owner-managed SMEs.

## Default page structure
1. Immediate conversion layer
   - Popup, sticky CTA, or fixed action.
   - One action only: try, buy, or request setup.

2. Hero
   - One obvious business result.
   - One short supporting explanation.
   - Primary CTA immediately visible.
   - Actual product UI/demo beside or beneath the promise.

3. Trust / proof
   - Real usage count, customer proof, or live product proof.
   - If customer proof does not yet exist, show a functioning scenario instead.

4. Problem -> result
   - Show the familiar business problem.
   - Show the output the app creates.
   - Prefer before/after or input/output visuals.

5. Use cases
   - 3-5 concrete business situations.
   - Each should be understandable without explanation.

6. How it works
   - Usually 3 steps.
   - Only meaningful stages; never stretch to fit a template.

7. Setup
   - What the buyer must provide.
   - What WaSanDo configures.
   - What happens at launch.

8. Pricing
   - Show price directly whenever possible.
   - Prefer pay-per-use / ticket / hybrid where suitable.
   - Avoid hiding simple products behind consultation-only sales.

9. FAQ
   - Only questions that repeatedly block purchase.
   - Legal, operational, data, compatibility, cancellation, support.

10. Final CTA
   - Same primary action as the hero.
   - No generic footer ending.

## Visual rules
- Strong hierarchy: large outcome, short copy, visible action.
- Product screenshots and live UI are the artwork.
- Generous whitespace, but never empty for its own sake.
- Large Japanese typography suitable for fast scanning.
- Use WaSanDo earthy brand system unless a product has its own established palette.
- Avoid generic AI gradients and decorative dashboard clutter.
- Mobile conversion path must remain obvious.

## Factory gate before coding
Every new product must answer:
1. Who pays?
2. What painful or valuable event already exists?
3. What one job does the app perform?
4. What is the output?
5. How can the customer see proof in under 30 seconds?
6. What single action should the page produce?
7. What is the price?
8. What standard output can another app consume?

If these answers are unclear, do not build the full product yet.

## Standard integration rule
Each app works independently and exposes its result through a stable contract (event / webhook / API / CSV / JSON as appropriate). Integration is a capability, never a reason to merge products.
