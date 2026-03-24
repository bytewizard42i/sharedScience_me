# SharedScience.me × Starstream Integration

**Date**: March 24, 2026
**Authors**: Cassie + John
**Reference**: Sebastien Guillemot (CTO, Midnight Foundation) — Starstream zkVM

---

## What Is Starstream?

Starstream is Midnight's next-generation **WASM-based zkVM** announced by Sebastien Guillemot. It introduces four capabilities that directly impact SharedScience's architecture:

| Feature | What It Does |
|---------|-------------|
| **Proof Folding** | Combines multiple ZK proofs into a single verifiable chain — less on-chain bloat, faster validation |
| **Coroutines** | Smart contracts can pause and resume mid-execution — enables multi-step workflows natively |
| **Browser-Generated Proofs** | ~16 KB proofs generated directly in the browser — no backend servers needed |
| **Auditability** | Every interaction independently verifiable via ZK proofs — transparency without exposure |

---

## Impact on SharedScience Architecture

### 1. Disclosure Protocol → Native Coroutine

SharedScience's 5-stage progressive disclosure is currently modeled as discrete state transitions:

```
Anonymous → DomainRevealed → CredentialsShared → IdentityRevealed → FullDisclosure
```

With Starstream coroutines, the `disclosure-protocol.compact` contract becomes a **single coroutine** that pauses at each stage, waits for mutual consent, and resumes — with the entire proof chain folded into one compact verification at the end.

**Before (current)**: 5 separate circuit calls, 5 separate proofs on-chain
**After (Starstream)**: 1 coroutine, 1 folded proof — same privacy guarantees, ~80% less on-chain footprint

### 2. Cross-Repo Proof Folding for "One Health" Research

The HIPAA-compliant cross-repo flow currently requires independent ZK proofs from each layer:

```
Current: 6 independent proofs
├── Researcher capability proof (SharedScience)
├── Data availability proof (safeHealthData)
├── Consent aggregation proof (safeHealthData + petProData + equineProData)
├── IRB verification proof (SharedScience)
├── Collaboration agreement proof (SharedScience)
└── Funding disbursement proof (CareToCoin)

Starstream: 1 folded proof
└── Single verifiable chain covering all 6 steps
```

This is massive for scalability. Instead of 6 on-chain verifications, auditors verify one folded proof that covers the entire research collaboration lifecycle.

### 3. Browser-Generated Proofs → DemoLand Goes Live

SharedScience's `frontend-demoland/` currently simulates ZK interactions. With Starstream's browser proofs (~16 KB each), the **same UI generates real proofs** without backend infrastructure. The demoLand → realDeal transition becomes a configuration toggle, not an architecture change.

### 4. Inquiry Channel → Pausable Anonymous Conversations

The `inquiry-channel.compact` contract manages back-and-forth anonymous messaging. With coroutines, this becomes a natural conversation flow:

```
Coroutine: InquiryConversation
├── PAUSE: Wait for initial inquiry
├── RESUME: Capability holder responds
├── PAUSE: Wait for mutual interest signal
├── RESUME: Trigger disclosure protocol coroutine
└── FOLD: Single proof covers entire conversation history
```

### 5. Collaboration Agreement → Milestone Coroutines

`collaboration-agreement.compact` tracks milestones. With coroutines + CareToCoin integration:

```
Coroutine: ResearchCollaboration
├── PAUSE: Define agreement terms
├── RESUME: Both parties sign
├── LOOP for each milestone:
│   ├── PAUSE: Wait for milestone completion proof
│   ├── RESUME: Verify milestone, trigger CareToCoin disbursement
│   └── FOLD: Accumulate milestone proofs
└── FINAL: Single folded proof covers entire collaboration
```

---

## Revised Contract Architecture (Starstream-Aware)

```
SharedScience Contracts (Starstream)
├── capability-registry.compact         — Unchanged (stateless lookups)
├── domain-taxonomy.compact             — Unchanged (admin-managed taxonomy)
├── disclosure-protocol.compact         — REFACTOR → single coroutine
├── inquiry-channel.compact             — REFACTOR → pausable conversation coroutine
├── collaboration-agreement.compact     — REFACTOR → milestone loop coroutine
├── reputation-tracker.compact          — ENHANCE → folded reputation proofs
└── NEW: research-lifecycle.compact     — Master coroutine orchestrating the full flow
```

The `research-lifecycle.compact` contract would be a top-level coroutine that orchestrates discovery → inquiry → disclosure → collaboration → funding → completion as one pausable, foldable workflow.

---

## Timeline Dependency

Starstream is in active development by Sebastien's team. Current Compact v0.29.0 contracts will continue to work. Starstream-aware refactoring should begin once the zkVM API stabilizes. For now:

- **Now**: Document the coroutine patterns we want to use
- **When Starstream lands**: Refactor disclosure, inquiry, and collaboration contracts
- **Future**: Build the master `research-lifecycle.compact` orchestrator

---

## Related Documents

- [SelectConnect × Starstream Coroutines](../../selectConnect/docs/STARSTREAM_COROUTINES.md)
- [CareToCoin × Starstream Donation Flow](../../CareToCoin/docs/STARSTREAM_DONATION_FLOW.md)
- [safeHealthData × Starstream HIPAA Proofs](../../safeHealthData/docs/STARSTREAM_HIPAA_PROOFS.md)
- [Unbound Science Integration](./UNBOUND_SCIENCE_INTEGRATION.md)
- [CareToCoin Funding Integration](./CARETOCOIN_FUNDING_INTEGRATION.md)

---

*Cassie + John, March 24, 2026*
