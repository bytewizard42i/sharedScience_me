# SharedScience.me × CareToCoin — Funding Layer Integration

**Date**: March 23, 2026
**Authors**: Cassie + John

---

## Why CareToCoin Is the Funding Layer

SharedScience.me needs a way to fund research. Rather than building a standalone `funding-pool.compact` contract, we leverage **CareToCoin** — which already handles:

- Privacy-preserving donations (ZK-shielded amounts, donor identity)
- Tax compliance (ZK receipts, jurisdictional verification via GeoZ)
- Charity/org verification (DIDz + KYCz)
- Banned wallet screening (compliance)
- Milestone-linked disbursement (accountability)

This was identified during analysis of [Unbound Science](https://unboundscience.com/), which proposed subject-specific research funding pools but lacks the privacy infrastructure to build them. CareToCoin already has that infrastructure. SharedScience provides the research coordination layer on top.

---

## Integration Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Research Funding Flow                         │
│                                                                  │
│  DONOR                                                           │
│    │                                                             │
│    ▼                                                             │
│  CareToCoin ─────────────────────────────────────────────────┐  │
│  ├── donateToPool(domain)         Privacy-preserving donation │  │
│  ├── generateTaxReceipt()         ZK tax compliance           │  │
│  ├── screenWallet()               Banned wallet check         │  │
│  └── verifyJurisdiction()         GeoZ compliance             │  │
│    │                                                          │  │
│    ▼                                                          │  │
│  SharedScience ──────────────────────────────────────────────┐│  │
│  ├── domain-taxonomy              Which domains are funded    ││  │
│  ├── capability-registry          Who can do the research     ││  │
│  ├── inquiry-channel              Anonymous researcher match  ││  │
│  ├── disclosure-protocol          Progressive reveal          ││  │
│  ├── collaboration-agreement      Milestone definitions       ││  │
│  │     │                                                      ││  │
│  │     ▼ milestone completed                                  ││  │
│  └─────────────────────────────────────────────────────────────┘│  │
│    │                                                          │  │
│    ▼                                                          │  │
│  CareToCoin                                                   │  │
│  ├── disburseFunding()            Release on milestone proof  │  │
│  └── generateImpactProof()        ZK impact report to donor   │  │
│                                                               │  │
│  RESEARCHER receives funds ◄──────────────────────────────────┘  │
│  DONOR receives impact proof                                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Domain-Specific Research Pools

CareToCoin funding pools map to SharedScience's domain taxonomy:

| Funding Pool | SharedScience Domain | Health Data Repos |
|-------------|---------------------|-------------------|
| **Medicine / Health** | Biology > Molecular Biology, Genetics, Tissue Engineering | safeHealthData |
| **Veterinary / One Health** | Biology + Engineering > Biomedical | equineProData, petProData |
| **Energy** | Physics > Thermodynamics, Engineering > Energy | — |
| **Environment** | Chemistry > Catalysis, Engineering > Waste Management | — |
| **Quantum** | Physics > Quantum Mechanics, CS > Quantum Computing | — |
| **AI / ML** | CS > Machine Learning, High-Performance Computing | — |

Donors choose a domain. CareToCoin holds the funds. SharedScience matches researchers to funded domains. Milestones trigger disbursement.

---

## HIPAA-Compliant Health Research Funding

The most powerful integration connects CareToCoin funding to health data across safeHealthData, equineProData, and petProData.

### Flow

1. **Donor** contributes to "One Health" or "Veterinary Research" pool via CareToCoin
2. **SharedScience** matches funded domain to researchers with relevant capabilities
3. **Researcher** discovers available cohort data via `data-availability-registry` (planned)
4. **Consent aggregator** (planned) verifies all data subjects opted in to research
5. **Collaboration agreement** defines milestones; CareToCoin disburses on completion
6. **Data subjects** receive micropayments through their respective health data platforms
7. **Donor** receives ZK impact proof without seeing any proprietary research details

### Privacy Guarantees

- **Donor** never sees: researcher identity, research methods, patient/animal data
- **Researcher** never sees: donor identity, donation amount, other donors
- **Data subjects** never see: who funded the research, who else is in the cohort
- **IRS** sees only: donor contributed $X to 501(c)(3)-equivalent research org in tax year Y
- **Public** sees only: total funded per domain, number of milestones completed

---

## What This Means for SharedScience's Roadmap

The planned `funding-pool.compact` contract from the Unbound Science integration is **no longer needed as a standalone contract**. Instead:

- CareToCoin handles all funding mechanics (donation, compliance, disbursement)
- SharedScience handles all research mechanics (matching, disclosure, collaboration)
- The bridge between them is the **collaboration-agreement milestone** — when SharedScience records a milestone completion, CareToCoin releases the corresponding tranche

This is cleaner architecture: each repo does what it's best at. No duplication.

---

## Related Documents

- [CareToCoin Midnight Migration Roadmap](../../CareToCoin/docs/MIDNIGHT_MIGRATION_ROADMAP.md)
- [CareToCoin × SharedScience Research Funding](../../CareToCoin/docs/SHAREDSCIENCE_RESEARCH_FUNDING.md)
- [Unbound Science Integration](./UNBOUND_SCIENCE_INTEGRATION.md)
- [SelectConnect Integration](./SELECTCONNECT_INTEGRATION.md)

---

*Cross-pollinated from CareToCoin — Cassie + John, March 23, 2026*
