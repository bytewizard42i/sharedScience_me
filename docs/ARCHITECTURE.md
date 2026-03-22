# SharedScience.me — Architecture

## Overview

SharedScience.me is a privacy-preserving scientific discovery and collaboration platform built on the Midnight Network. It enables organizations to prove scientific capabilities without revealing methods, discover potential collaborators through searchable ZK proofs, and progressively disclose identity and details through consent-based protocols.

## Contract Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  SharedScience.me                        │
│                                                         │
│  ┌─────────────────┐     ┌─────────────────┐           │
│  │ domain-taxonomy  │◄────│ capability-     │           │
│  │                 │     │ registry         │           │
│  │ Scientific      │     │                 │           │
│  │ domain tree     │     │ ZK proofs of    │           │
│  └─────────────────┘     │ capabilities    │           │
│                          └────────┬────────┘           │
│                                   │                     │
│                          ┌────────▼────────┐           │
│                          │ inquiry-channel  │           │
│                          │                 │           │
│                          │ Anonymous       │           │
│                          │ pub/sub msgs    │           │
│                          └────────┬────────┘           │
│                                   │                     │
│                          ┌────────▼────────┐           │
│                          │ disclosure-      │           │
│                          │ protocol         │           │
│                          │                 │           │
│                          │ Staged reveal   │           │
│                          └────────┬────────┘           │
│                                   │                     │
│                    ┌──────────────┼──────────────┐     │
│                    │              │              │     │
│           ┌────────▼───┐  ┌──────▼───────┐     │     │
│           │collaboration│  │ reputation-  │     │     │
│           │-agreement   │  │ tracker      │     │     │
│           │             │  │              │     │     │
│           │ On-chain    │  │ Anonymous    │     │     │
│           │ terms & IP  │  │ scores       │     │     │
│           └─────────────┘  └──────────────┘     │     │
│                                                  │     │
│  ┌─────────────────────────────────────────────┐│     │
│  │              DIDz.io + KYCz                  ││     │
│  │     Identity & Verification Foundation       ││     │
│  └─────────────────────────────────────────────┘│     │
└─────────────────────────────────────────────────────────┘
```

## Data Flow

### Publishing a Capability

1. Organization authenticates via DIDz (identity remains private)
2. Organization selects domain from taxonomy
3. Organization creates ZK proof attesting to capability level, scale, and verification status
4. Proof is stored on-chain in capability-registry — methods/data stay off-chain
5. Domain index is updated for searchability

### Discovering and Connecting

1. Searcher queries capability-registry by domain, level, or scale
2. Matching proofs returned — publisher identity is shielded
3. Searcher sends anonymous inquiry through inquiry-channel
4. Publisher receives inquiry in their inbox (searcher identity shielded)
5. Publisher responds — still anonymous
6. Both signal mutual interest → disclosure-protocol initiated

### Progressive Disclosure

1. **Stage 0 — Anonymous**: Both parties communicate through hashed channels
2. **Stage 1 — Domain Revealed**: Scientific domain expertise shared
3. **Stage 2 — Credentials Shared**: Institutional credentials proven via ZK
4. **Stage 3 — Identity Revealed**: Real organizational identity disclosed
5. **Stage 4 — Full Disclosure**: Complete details shared under agreement

Each stage requires **both parties to consent** before advancing. Either party can halt at any stage.

## Privacy Model

- **On-chain**: ZK proofs, DID hashes, domain classifications, agreement hashes, reputation scores
- **Off-chain**: Actual methods, raw data, inquiry messages, agreement terms, organizational details
- **Never exposed**: Proprietary methods, trade secrets, classified information, raw research data

## DemoLand / RealDeal Pattern

Following the DIDz ecosystem standard:
- **demoLand**: Simulated proofs, mock organizations, local state
- **realDeal**: Real Midnight proofs, on-chain state, DIDz authentication
