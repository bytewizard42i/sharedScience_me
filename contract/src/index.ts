// SharedScience.me — Contract Exports
// Central export point for all compiled contract artifacts

// Contract artifacts will be available after running `npm run compact:all`
// Each contract compiles to a managed/ directory with:
//   - .zkir (zero-knowledge intermediate representation)
//   - .cir (circuit definition)
//   - contract ABI and deployment artifacts

export const CONTRACTS = {
  CAPABILITY_REGISTRY: 'capability-registry',
  DOMAIN_TAXONOMY: 'domain-taxonomy',
  INQUIRY_CHANNEL: 'inquiry-channel',
  DISCLOSURE_PROTOCOL: 'disclosure-protocol',
  COLLABORATION_AGREEMENT: 'collaboration-agreement',
  REPUTATION_TRACKER: 'reputation-tracker',
} as const;

export type ContractName = typeof CONTRACTS[keyof typeof CONTRACTS];
