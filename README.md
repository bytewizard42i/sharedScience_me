# SharedScience.me

**Privacy-Preserving Scientific Discovery & Collaboration Platform**

*Prove what you know without revealing how you know it.*

[![Built on Midnight](https://img.shields.io/badge/Built%20on-Midnight%20Network-purple)]()
[![Powered by DIDz](https://img.shields.io/badge/Powered%20by-DIDz.io-blue)]()
[![Status](https://img.shields.io/badge/Status-Design%20%26%20Skeleton-yellow)]()

---

## The Problem

Scientific progress depends on collaboration, but collaboration requires revealing what you know — and that creates risk.

- **Proprietary methods are trade secrets.** A pharmaceutical company with a novel drug delivery method can't broadcast it while seeking partners who have complementary breakthroughs.
- **Research institutions compete for grants and publications.** Sharing preliminary findings before publication risks being scooped.
- **Governments and defense labs have classified capabilities.** They need to find collaborators in the private sector without exposing sensitive programs.
- **Supercomputing facilities have unique capabilities.** They want to find problems worth solving without revealing their computational advantages.

Today, the options are:
1. **Publish openly** — lose competitive advantage
2. **Stay silent** — miss collaboration opportunities
3. **Use intermediaries** — expensive, slow, and still requires trust

There is no way to say *"We have a breakthrough in cryogenic preservation"* without implying *"...and here's roughly how we did it."*

**Until now.**

---

## The Solution

SharedScience.me is a **privacy-preserving scientific discovery and collaboration marketplace** built on the **Midnight Network**.

Organizations can publish **zero-knowledge proofs** attesting to capabilities, breakthroughs, or research domains — without revealing underlying methods, data, or proprietary details. Other organizations can **search these proofs** to discover potential collaborators, then **reach out through privacy-preserving pub/sub channels** to explore partnerships.

### How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    SharedScience.me                          │
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  ZK Capability│    │  Discovery   │    │  Pub/Sub     │  │
│  │  Registry     │    │  Search      │    │  Messaging   │  │
│  │              │    │              │    │              │  │
│  │ "We have     │    │ Search for   │    │ Privacy-     │  │
│  │  advances in │───▶│ capabilities │───▶│ preserving   │  │
│  │  freezing    │    │ matching     │    │ outreach     │  │
│  │  technology" │    │ your needs   │    │ & negotiation│  │
│  │              │    │              │    │              │  │
│  │ (ZK proof -  │    │ (No methods  │    │ (Anonymous   │  │
│  │  no methods  │    │  revealed)   │    │  until both  │  │
│  │  revealed)   │    │              │    │  consent)    │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  DIDz         │    │  Credential  │    │  Collaboration│  │
│  │  Identity     │    │  Verification│    │  Agreements   │  │
│  │              │    │              │    │              │  │
│  │ Verified org │    │ Prove domain │    │ On-chain     │  │
│  │ identity     │    │ expertise    │    │ terms &      │  │
│  │ without      │    │ without full │    │ IP           │  │
│  │ doxxing      │    │ CV           │    │ protections  │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Example Scenario

> **Org A** operates a supercomputing facility with novel simulation capabilities. They need the latest breakthroughs in cryogenic preservation technology to solve a materials science problem.
>
> **Org B** is a biotech lab that has achieved a breakthrough in flash-freezing biological tissue but lacks the computational power to model large-scale applications.
>
> **Without SharedScience.me:**
> Neither knows the other exists. Org A can't search for "cryogenic breakthroughs" without revealing their computational capabilities. Org B can't advertise their breakthrough without risking their competitive edge.
>
> **With SharedScience.me:**
> - Org B publishes a ZK proof: *"We have verified advances in cryogenic preservation of biological tissue at scales > 1cm³"* — no methods, no data, just a verified claim.
> - Org A searches for capabilities matching "cryogenic preservation" and finds Org B's proof.
> - Org A sends an anonymous inquiry through the pub/sub channel: *"We have computational modeling capabilities relevant to scaling cryogenic processes. Interested in exploring collaboration?"*
> - Org B reviews the inquiry (Org A's identity is still shielded) and responds.
> - Both parties progressively disclose identity and capabilities through staged, consent-based revelation.
> - If collaboration proceeds, on-chain agreements protect IP and define terms.

---

## Core Concepts

### ZK Capability Proofs

Organizations create zero-knowledge proofs that attest to scientific capabilities or breakthroughs within a **taxonomy of scientific domains**. These proofs can include:

- **Domain classification** (e.g., materials science > cryogenics > biological tissue preservation)
- **Capability level** (e.g., theoretical, experimental, production-ready)
- **Scale indicators** (e.g., nano, micro, macro, industrial)
- **Verification status** (self-attested, peer-reviewed, third-party verified)
- **Temporal claims** (e.g., "breakthrough achieved within last 12 months")

None of these proofs reveal the actual methods, data, or proprietary details.

### Scientific Domain Taxonomy

A hierarchical, extensible taxonomy of scientific and engineering domains allows precise capability matching without ambiguity:

```
Science
├── Physics
│   ├── Quantum Mechanics
│   ├── Thermodynamics
│   │   ├── Cryogenics
│   │   ├── Heat Transfer
│   │   └── Phase Transitions
│   └── Materials Science
├── Biology
│   ├── Molecular Biology
│   ├── Genetics
│   └── Tissue Engineering
├── Chemistry
│   ├── Organic Chemistry
│   ├── Polymer Science
│   └── Catalysis
├── Computer Science
│   ├── Machine Learning
│   ├── High-Performance Computing
│   └── Quantum Computing
└── Engineering
    ├── Biomedical Engineering
    ├── Aerospace Engineering
    └── Manufacturing
```

### Privacy-Preserving Pub/Sub Messaging

When a searcher finds a matching capability proof, they can initiate contact through a **privacy-preserving publish/subscribe messaging system**:

1. **Anonymous Inquiry** — Searcher sends a message describing their interest without revealing identity
2. **Capability Response** — Publisher responds with additional (still privacy-preserved) details
3. **Mutual Interest Signal** — Both parties signal willingness to proceed
4. **Staged Disclosure** — Progressive, consent-based identity and capability revelation
5. **Collaboration Agreement** — On-chain terms, IP protections, and collaboration framework

### DIDz Integration

- Organizations verify their identity through **DIDz.io** without exposing details to the public
- **KYCz** provides identityless verification of organizational legitimacy
- Credentials (publications, patents, institutional affiliations) can be proven via ZK without full disclosure
- Reputation builds over successful collaborations without linking to real-world identity until consent

---

## Architecture

### Compact Smart Contracts

| Contract | Purpose |
|----------|---------|
| `capability-registry` | Stores ZK proofs of scientific capabilities in a searchable on-chain registry |
| `domain-taxonomy` | Manages the hierarchical scientific domain classification system |
| `inquiry-channel` | Privacy-preserving pub/sub messaging between anonymous parties |
| `disclosure-protocol` | Manages staged, consent-based progressive revelation of identity and details |
| `collaboration-agreement` | On-chain collaboration terms, IP protections, and milestone tracking |
| `reputation-tracker` | Anonymous reputation scores based on successful collaborations |

### Technology Stack

- **Blockchain**: Midnight Network (Preprod)
- **Smart Contracts**: Compact language (v0.29.0, language v0.21.0)
- **ZK Proofs**: Midnight Proof Server
- **Identity**: DIDz.io + KYCz
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Node.js + TypeScript
- **Messaging**: Privacy-preserving pub/sub (Midnight state channels)

### Project Structure

```
sharedScience_me/
├── README.md
├── contract/                      # Compact smart contracts
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.build.json
│   ├── vitest.config.ts
│   └── src/
│       ├── contracts/             # Compact source files
│       │   ├── capability-registry.compact
│       │   ├── domain-taxonomy.compact
│       │   ├── inquiry-channel.compact
│       │   ├── disclosure-protocol.compact
│       │   ├── collaboration-agreement.compact
│       │   └── reputation-tracker.compact
│       ├── managed/               # Compiled contract outputs
│       ├── witnesses/             # Witness functions
│       ├── types/                 # TypeScript type definitions
│       ├── test/                  # Contract tests
│       └── index.ts               # Contract exports
├── frontend-demoland/             # Demo mode frontend
│   ├── package.json
│   ├── server.js
│   └── public/
│       ├── index.html             # Dashboard
│       ├── login.html             # Auth (8 methods)
│       ├── signup.html            # Registration
│       ├── auth.js                # Auth module
│       ├── search.html            # Capability search
│       ├── publish.html           # Publish capabilities
│       └── messages.html          # Inquiry messaging
├── frontend-realdeal/             # Real Midnight integration (Phase 2)
├── docs/                          # Documentation
│   ├── ARCHITECTURE.md
│   ├── TAXONOMY.md
│   ├── PRIVACY_MODEL.md
│   └── USE_CASES.md
└── .env.example
```

---

## Use Cases

### Academic Research
- Universities publish ZK proofs of research capabilities without risking being scooped before publication
- Cross-institutional collaboration discovered through capability matching
- Research grant applications strengthened by verified (but private) preliminary results

### Pharmaceutical & Biotech
- Drug discovery teams prove they have compounds with specific properties without revealing structures
- Contract research organizations prove analytical capabilities without exposing methods
- Clinical trial matching based on verified therapeutic area expertise

### Defense & Government
- Classified programs find private-sector collaborators without exposing program details
- Dual-use technology matching between defense labs and commercial entities
- ITAR-compliant capability advertising (prove you CAN do something without revealing HOW)

### Industrial R&D
- Materials science breakthroughs matched with manufacturing capabilities
- Energy companies prove efficiency gains without revealing processes
- Cross-industry pollination (aerospace ↔ automotive ↔ medical devices)

### Supercomputing & AI
- Facilities prove computational capabilities (FLOPS, specialized hardware) without revealing configurations
- AI labs prove model capabilities without exposing architectures or training data
- Quantum computing facilities match with problems that need quantum advantage

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Midnight Compact Compiler v0.29.0
- Docker (for proof server)

### Development

```bash
# Install contract dependencies
cd contract && npm install

# Compile Compact contracts
npm run compact:all

# Start demo frontend
cd ../frontend-demoland && npm install && npm start

# Run tests
cd ../contract && npm test
```

### Demo Mode

SharedScience.me follows the **demoLand/realDeal** architecture pattern used across the DIDz ecosystem:

- **demoLand**: Fully functional demo with simulated ZK proofs and mock organizations
- **realDeal**: Real Midnight Network integration with actual ZK proofs and on-chain state

---

## Roadmap

### Phase 1: Foundation (Current)
- [ ] Compact contract skeletons
- [ ] Scientific domain taxonomy (initial set)
- [ ] DemoLand frontend with simulated search and messaging
- [ ] DIDz auth integration (8-method standard)

### Phase 2: Core Contracts
- [ ] Capability registry contract (publish/search ZK proofs)
- [ ] Domain taxonomy contract (on-chain classification)
- [ ] Inquiry channel contract (anonymous messaging)

### Phase 3: Collaboration
- [ ] Disclosure protocol (staged revelation)
- [ ] Collaboration agreement contract (on-chain terms)
- [ ] Reputation tracking (anonymous scores)

### Phase 4: Production
- [ ] Preprod deployment
- [ ] Real Midnight proof server integration
- [ ] Peer review verification integration
- [ ] API for institutional systems

---

## Part of the DIDz Ecosystem

SharedScience.me is part of the **EnterpriseZK** ecosystem — "The Foundation For Re-imagining the World's Digital Systems."

- **DIDz.io** — Decentralized identity (foundation for all products)
- **KYCz** — Identityless ZK verification
- **safeHealthData.me** — Privacy-preserving healthcare data
- **AutoDiscovery.legal** — Privacy-preserving legal discovery
- **SilentLedger** — Privacy-preserving financial orderbook
- **SharedScience.me** — Privacy-preserving scientific collaboration ← *you are here*

---

## License

See [LICENSE](LICENSE) for details.

---

*"The greatest breakthroughs happen at the intersection of disciplines. SharedScience.me removes the fear of sharing what you know — so those intersections can finally be discovered."*
