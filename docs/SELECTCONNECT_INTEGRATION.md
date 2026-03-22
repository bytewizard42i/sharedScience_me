# SharedScience × SelectConnect — Shared Disclosure Protocol

*SharedScience's 5-stage disclosure protocol and SelectConnect's progressive reveal are the same pattern. This document formalizes SelectConnect as the underlying protocol layer.*

---

## The Pattern Match

SharedScience already implements a disclosure protocol nearly identical to SelectConnect:

| SharedScience Stage | SelectConnect Equivalent | What Changes |
|-------------------|------------------------|-------------|
| Anonymous | Level 1 (Free) | No change — both start pseudonymous |
| Domain | Level 2 (Low bond) | SharedScience adds domain taxonomy |
| Credentials | Level 3 (Medium bond) | DIDz-verified credentials in both |
| Identity | Level 4 (High bond) | Full organizational identity reveal |
| Full | Level 5 (Mutual) | Complete collaboration terms |

**Proposal**: SharedScience's `disclosure-protocol` contract should be **replaced by** or **built on top of** SelectConnect's protocol. This eliminates duplicate code and gives SharedScience all of SelectConnect's abuse bond economics for free.

---

## What SharedScience Gains from SelectConnect

- **Abuse bonds**: Research inquiries backed by economic stake — prevents IP fishing
- **Pseudonymous reputation**: Track which organizations are good-faith collaborators vs. predatory
- **Privacy routing**: 5-digit codes for conference-specific capability advertising
- **Revocable access**: Cut off a collaboration partner's access to your capabilities if trust breaks down
- **Time-limited links**: Conference-specific capability shares that auto-expire

## What SelectConnect Gains from SharedScience

- **Domain taxonomy**: Structured classification system for what's being shared
- **Collaboration agreements**: On-chain terms, IP protections, milestones — extends SelectConnect beyond simple contact sharing into structured partnerships
- **Capability registry pattern**: ZK proofs of capabilities (not just identity) — proves "We can do X" without revealing how

---

## Proposed Unification

```
SelectConnect Protocol (base layer)
├── Progressive reveal
├── Abuse bonds
├── Privacy routing
├── Pseudonymous reputation
│
└── SharedScience Extension (domain-specific layer)
    ├── Domain taxonomy (structured classification)
    ├── Capability proofs (ZK attestations of what you can do)
    ├── Collaboration agreements (on-chain terms)
    └── Research reputation (anonymous scores from past collaborations)
```

SharedScience's `inquiry-channel` and `disclosure-protocol` contracts become thin wrappers around SelectConnect's core circuits.

---

*Last updated: March 22, 2026 — Penny 🎀*
