# Unbound Science — Deep Dive

**Date**: May 31, 2026
**Author**: Penny + John
**Primary sources**:
- Website: https://unboundscience.com/ (Mission, Team pages)
- App: https://alpha.unboundscience.io
- Secret Network grant application: https://github.com/scrtlabs/Grants/issues/173
- Org repos: https://github.com/unboundscience
- Twitter/X: https://twitter.com/UnboundScience

> **Companion doc**: This is the research deep dive. For the integration strategy with SharedScience and the health-data repos, see [`UNBOUND_SCIENCE_INTEGRATION.md`](./UNBOUND_SCIENCE_INTEGRATION.md) (Cassie + John, March 2026).

---

## TL;DR

Unbound Science is a **decentralized science (DeSci) creator economy** for scientists and inventors. It bills itself as "The Next Technology Upgrade to Science Itself" and functions as a "seed bank for tech": an all-in-one platform for **fundraising, collaboration, preservation, and distribution** of new technologies. It is built on **Secret Network** (privacy-first, encrypted Rust smart contracts), using **Molecule IP-NFTs** for ownership, **Irys** for storage, and **Internet Computer canisters** for web services.

**Why this matters to us**: It is the closest public analog to SharedScience.me, solving the same problem (scientific collaboration without exposing IP) but on a different privacy chain (Secret Network instead of Midnight). **Roberto Cerrud** — John's contact — is listed on their core team as the technical architecture / blockchain innovation lead.

---

## What Is Unbound Science?

A platform that lets scientists and inventors store their blueprints and instruction manuals, then fund, collaborate on, and distribute that work, without going through corporations or governments that "take all the credit."

Core value propositions:

- **Seed bank for tech** — immutable, censorship-resistant storage of blueprints and manuals on decentralized blockchains.
- **Disintermediated funding** — donations go to problem-specific pools, not a donor's agenda.
- **Scientist identity protection** — shields researchers from sabotage or threats by governments or incumbent corporations whose market share is challenged.
- **Public, tax-incentivized funding** — scientists appeal directly to the public instead of institutional gatekeepers.
- **Rapid global distribution** — partnering with distribution platforms so progress spreads "in weeks instead of generations."
- **Recurring revenue** — scientists earn through licensing, royalties, consulting, and leasing rights via a marketplace, instead of having to run mass production themselves.

### The Six Key Challenges They Claim To Solve

1. Research captured by donor agendas.
2. Scientist identities exposed to retaliation.
3. Research lost or censored.
4. Credit captured by corporations/governments.
5. Technology hoarded by one society over others.
6. Scientists forced into manufacturing instead of inventing.

---

## Team & Partners

### Core Team (per website Team page)

| Person | Role | Link |
|---|---|---|
| **Aaron Malone** | Founder / "visionary leader with deep crypto expertise" (7th web3 startup, in web3 since 2017) | [LinkedIn](https://www.linkedin.com/in/crypto101aaron/) |
| **Nelson Hernandez** | Strategic partnerships & growth (30+ yrs managing multi-billion-dollar govt funds) | [LinkedIn](https://www.linkedin.com/in/nelson-hernandez-8b3749208/) |
| **Sommer Bentley** | Operations & process optimization (20+ yrs startups) | — |
| **Roberto Cerrud** | **Technical architecture & blockchain innovation** | [LinkedIn](https://www.linkedin.com/in/robertojcerrud/) |

> **Note on Roberto**: He appears as core technical lead on the current website, but the (older) Secret Network grant application team list does **not** name him. He most likely joined as the technical architect after the grant was filed. He is Panama-based, 10+ years in blockchain, affiliated with **EMURGO Academy** (Cardano ecosystem) — which is interesting given Unbound chose Secret Network over Cardano.

Additional contributors named in the grant: Yoyo Yuan (Minerva University, AI + cryptography), Howard Sherman (Jr full-stack), Abraham Becker (Sr front-end), and **DFK Development / Felipe Alarcón** (smart contracts since 2016).

### Partners

- **Collective.town** — investment / venture capital
- **VoidSpaceTech.org** — advanced technology & space innovation
- **Azure Light International** — "ascension technology"
- **Merito.network** — network & community building

### Advisors

- **Lisa Loud** (Secret Network)
- **Tor Bair** (Secret Network founder)
- **Kadan Stadelmann** (Komodo CTO)
- **Logan Sullivan** (Causative Labs)
- **John Brewer** (quantum tech consultant)
- **Mark Shays** (innovation / product) — [LinkedIn](https://www.linkedin.com/in/markshays/)
- A contact tied to the **United Nations Economic Development Program**

---

## Technical Architecture

This is the most strategically relevant section, because it is a direct contrast to our Midnight-based stack.

| Layer | Unbound Science choice | Notes |
|---|---|---|
| **Settlement / privacy chain** | **Secret Network** | Encrypted smart contracts, written in **Rust** (not Solidity). Chosen explicitly because "Ethereum smart contracts are woefully insecure in large part due to being human readable." |
| **Why not Cardano** | Rejected | Their words: "Cardano is secure but lacks the necessary interoperability for our application." |
| **IP / ownership** | **Molecule IP-NFTs** | Importing Molecule's IP-NFT tech onto Secret Network; NFTs carry hashes of contained files + provable creation time. |
| **File storage** | **Irys.xyz** | Encrypted data chain for the actual blueprint/manual bytes. |
| **Web services / interfaces** | **Internet Computer (ICP) canisters** | Secret contracts running inside canisters. |
| **Confidential compute** | **Secret Network Confidential Compute** | Offered as a service to scientists (e.g., peer review or data analysis without exposing underlying data). |
| **Funding pools & treasury** | Secret privacy tech | Anonymous donor contributions. |

### Token & Funding Mechanics

- A **native voting token** issued to users via **epochs** (explicitly modeled on **dYdX**).
- Every action on the platform has both a **cost and a reward** paid in this token.
- **Subject-specific donation pools**: Clean Energy, Air/Water/Soil Technology, Pollution/Waste Management, and Quantum.
- Funding requests handled via a **"game show"** format rather than a traditional grant application.
- Revenue streams for scientists: licensing, royalties, emergency engineering contracts, consulting.

---

## Go-To-Market (6 Phases)

1. **Live Events** — web3/DeSci showcases, scientific meetups, philanthropic mixers.
2. **Educational Media** — podcast, inventor interviews, the "game show."
3. **Partnerships** — tap partner networks, merge mission-aligned NGOs.
4. **Hackathons** — continuous feature/module development, ongoing security audits.
5. **Sponsored Bounties** — corporations/governments fund local challenges.
6. **Global Ambassadors** — boutique onboarding of scientists, universities, manufacturers.

## Development Roadmap (Secret Network grant)

Estimated 3–6 months for Secret Network integration, 2 full-time + 1 part-time dev.

- **Milestone 1 (Weeks 0–4)**: Smart contracts for user roles (Enthusiasts, Scientists, Investors), confidential compute, encrypted file storage.
- **Milestone 2 (Weeks 4–8)**: Confidential funding pools (anonymous donors), cross-chain interoperability, milestone-based disbursement.
- **Milestone 3 (Weeks 8–12)**: Molecule IP-NFTs on Secret, confidential compute in production, mainnet deployment.

Disbursement gated partly on traction: **100 onboarded active high-quality users** and **$50,000 TVL** locked in donation pools.

## Market Framing (their numbers)

- US Federal R&D funding: **$180B** (2021).
- US philanthropic science spend: **~$30B/yr**.
- **241 billionaires** in The Giving Pledge.
- Cites Coinbase and Binance founders announcing DeSci projects as validation.
- Focus on ending "artificial scarcity" across Energy, Food, Waste Management, and Medicine.

---

## Unbound Science vs SharedScience.me

Both are privacy-preserving DeSci platforms attacking the same core problem: **how do scientists collaborate and get funded without exposing their IP or identity?** The differences are instructive.

| Dimension | Unbound Science | SharedScience.me |
|---|---|---|
| **Privacy chain** | Secret Network (encrypted Rust contracts) | **Midnight** (ZK proofs, Compact) |
| **Core mechanism** | Encrypted storage + IP-NFTs + funding pools | **5-stage progressive disclosure protocol** (announce hash → match → negotiate → reveal under NDA → collaborate) |
| **Primary metaphor** | "Seed bank for tech" (preservation-first) | "Discovery marketplace" (matching-first) |
| **Funding** | Native voting token, dYdX-style epochs, donation pools | Designed to lean on **CareToCoin** for privacy-preserving, tax-compliant, milestone-linked disbursement |
| **IP ownership** | Molecule IP-NFTs | Capability hashes + collaboration agreements |
| **Storage** | Irys encrypted data chain | Off-chain + on-chain existence proofs (proposed `research-vault.compact`) |
| **Stage** | Alpha live, Secret grant roadmap | Contracts + docs, pre-demo |
| **Scope** | Full lifecycle: preserve → fund → license → distribute | Discovery + collaboration layer (preservation/funding via sibling repos) |

### Read: Competitor, or Collaborator?

Both. They overlap heavily on vision, but the architectures are complementary rather than identical:

- Unbound is **preservation- and funding-first**; SharedScience is **discovery- and matching-first**.
- They picked Secret Network; we picked Midnight. This is the crux of any conversation with Roberto.

---

## Strategic Implications For Our Stack

1. **The Midnight pitch writes itself.** Unbound rejected Cardano for "lacking interoperability" and Ethereum for insecurity, then chose Secret Network for encrypted contracts. **Midnight is precisely the missing option**: ZK-based privacy, Compact (not human-readable-in-the-naive-sense logic exposure), Cardano-grade security, and a growing interoperability story. For a Midnight ambassador, this is a clean, concrete talking point with someone who has already done the chain-selection analysis.

2. **Roberto is the warm door.** He owns technical architecture at Unbound and has Cardano-ecosystem roots (EMURGO Academy). A conversation comparing Secret Network vs Midnight confidential compute and ZK disclosure would be substantive, not salesy.

3. **Possible collaboration surfaces**:
   - SharedScience's **progressive disclosure protocol** could be a discovery front-end to Unbound's **preservation + funding** back-end.
   - **CareToCoin** funding pools vs Unbound's token-epoch pools — compare tax-compliance and milestone-disbursement design.
   - **Molecule IP-NFTs** are chain-agnostic enough to be worth evaluating for our `collaboration-agreement.compact` licensing extension.

4. **Watch items**: their token mechanics (dYdX-style epochs), the "game show" funding UX (genuinely novel), and whether confidential compute ships on their Milestone 3.

---

## Open Questions / Next Steps

- Confirm Roberto's exact current role and scope at Unbound (website says technical architecture; grant predates him).
- Does Unbound's confidential compute actually rely on Secret's TEE-based model? If so, contrast with Midnight's ZK approach in any outreach.
- Is there appetite for a Midnight-based pilot, or is Secret Network a locked-in decision?
- Decide internally: position SharedScience as a **complement** (discovery layer) or a **direct alternative** on Midnight.

---

*Deep dive compiled from public sources. Pinned for strategy and potential Roberto Cerrud outreach. — Penny + John, May 31, 2026*
