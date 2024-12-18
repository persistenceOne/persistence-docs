# ➡️ Round 2 - Closed

{% hint style="warning" %}
In order to receive foundation delegations for this round, it is required to apply via the [FDP App](https://fdp.persistence.one) before the **7th of April 2023 - 23.59UTC** ([Save to calendar](https://calendar.google.com/calendar/event?action=TEMPLATE\&tmeid=MzF0cDYzNzUxcHN1cXBnYjRjZ3ZxMmNqc2sgbWFkaHVyQHBlcnNpc3RlbmNlLm9uZQ\&tmsrc=madhur%40persistence.one)).
{% endhint %}

## Baseline Delegation

Minimum requirements to be met in order to be eligible for any foundation delegation (including bonus delegations):

#### On-chain:

* [ ] Be in the active set at all times \*
* [ ] Self-Stake: ≥1,000 XPRT
* [ ] Commission: ≥5% \*\*
* [ ] Uptime (30day average blocks signed): ≥98% at all times
* [ ] Governance Participation since 1/1/2023 ≥80%&#x20;
* [ ] Not slashed in the last 3 months \*\*\*

[\* New support program for new validators](round-2.md#new-validator-support-to-get-into-the-active-set)

[\*\* Changes to commission requirements](round-2.md#commission)

[\*\*\* Changes to the impact of slashing events](round-2.md#slashing-events)

#### Off-Chain:

* [ ] Applied through the web-app before the deadline
* [ ] Submitted all details around the Country & ISPs \*\*\*\*
* [ ] Subscribed to all relevant [Communication Channels](https://docs.persistence.one/build/validators/validator-communication)
* [ ] General Responsiveness (Discord + Telegram)

[\*\*\*\* Choice of country & ISP starts to have an impact on the received delegations](round-2.md#isps-and-countries)

All validators will be evaluated continuously against the above criteria. When submitting your application, please ensure that everything is in place to meet the above criteria.&#x20;

{% hint style="warning" %}
If any of the above criteria are no longer met, the foundation delegation will be immediately removed
{% endhint %}

### Important changes compared to Round 1

Based on the feedback that was submitted following Round 1, the following changes have been made:&#x20;

#### New validator support to get into the active set

New validators struggling to get into the active set on their own can get a small initial delegation from the foundation to get started and secure a spot in the active set. All they need to do is to be active on testnet for at least 1 month AND have at least a few meaningful bonus contributions.&#x20;

#### Commission

In order to give back the freedom to validators to decide on their own commission rates, there will no longer be a maximum commission in order to be eligible for a foundation delegation. Furthermore, a 5% minimum commission will be enforced in the FDP (as voted via governance in [proposal 18](https://www.mintscan.io/persistence/proposals/18)), while we await the on-chain implementation which will enforce this for all validators.&#x20;

To keep the FDP fair regardless of the chosen commission, delegations will be pro-rated based on the set commission. If validator A (5% commission) and validator B (10% commission) both meet the baseline criteria, and have accumulated the same amount of bonus contribution points, validator B will only receive half of the delegation compared to validator A, and hence they'll earn the same amount of total commission.&#x20;

{% hint style="warning" %}
**Validators who want to adjust their commission for Round 2, please do so between the 1st of April 2023 and the 7th of April 2023.** \
\
Validators who try to game the system by increasing their commission before the 1st of April, or by increasing their commission shortly after the Round 2 delegations have been made will see their foundation delegations reduced/removed and risk being blacklisted for future Rounds.
{% endhint %}

#### Slashing events

As making mistakes is human, and sometimes getting slashed (for the downtime) is outside of someone's control, the window of slashing history is reduced from 6 months to 3 months.

#### ISPs & Countries

While the network is quite decentralized when it comes to voting power, it could definitely be more decentralized in terms of server-hosting countries & ISPs.&#x20;

As plenty of validators are using Hetzner as an ISP, there is an increased risk on the network since **running anything crypto-related is not compliant with Hetzner's Terms & Conditions.** As a result, they might shut your node down without any notice.&#x20;

{% hint style="danger" %}
Therefore, there will be a **50% deduction on delegations for validators using Hetzner** as their sole provider in Round 2.
{% endhint %}



From Round 3 onwards:&#x20;

* Validators relying on **Hetzner will be completely excluded** from any foundation delegations
* There will be deductions for ISPs with too much concentration (>10% of stake)
* There will be deductions for countries with too much concentration (>10% of stake)

Data for these calculations will be based on [Observatory Zone](https://observatory.zone/persistence), and validators can use the "scenario analysis" tool to see their relative score. Please let us know via the FDP app if any of the data provided there for your validator would be inaccurate.



## Bonus Delegations

The following contributions are deemed valuable to the ecosystem and will earn points towards the calculation of a bonus delegation when submitted in the application form. Note that similar contributions don't necessarily earn similar points. The points will be awarded by the Foundation based on deemed necessity, value, and uniqueness of the contribution.&#x20;

#### Mainnet Contributions

<table><thead><tr><th width="596">Contribution</th></tr></thead><tbody><tr><td>Providing endpoints (RPC, gRPC, REST, WSS, statesync)</td></tr><tr><td>Providing seeds &#x26; peers</td></tr><tr><td>Running an archival node</td></tr><tr><td>Running IBC Relayers</td></tr><tr><td>Having ICA configs set up on your IBC relayer</td></tr><tr><td>Running indexing infrastructure</td></tr><tr><td>Providing snapshots</td></tr><tr><td>Maintain tooling - Explorers, Wallet, Faucet, Analytics etc.</td></tr><tr><td>Mainnet relayer monitoring &#x26; scoring *****</td></tr></tbody></table>

#### Testnet Contributions

<table><thead><tr><th width="599">Contribution</th></tr></thead><tbody><tr><td>Run a Testnet Validator (95% uptime + fast responses)</td></tr><tr><td>Providing endpoints (RPC, gRPC, REST, WSS, statesync)</td></tr><tr><td>Providing seeds &#x26; peers</td></tr><tr><td>Running an archival node</td></tr><tr><td>Running IBC Relayers</td></tr><tr><td>Having ICA configs set up on your IBC relayer</td></tr><tr><td>Running indexing infrastructure</td></tr><tr><td>Providing snapshots</td></tr><tr><td>Maintain tooling - Explorers, Wallet, Faucet, Analytics etc.</td></tr><tr><td>Testnet relayer monitoring &#x26; scoring *****</td></tr></tbody></table>

#### Community Contributions

<table><thead><tr><th width="598">Contribution</th></tr></thead><tbody><tr><td>Educational Content</td></tr><tr><td>Marketing</td></tr><tr><td>Host events</td></tr><tr><td>Create and manage regional Persistence Communities</td></tr><tr><td>Official Community Moderation</td></tr></tbody></table>

#### Other Contributions

<table><thead><tr><th width="597">Contribution</th></tr></thead><tbody><tr><td>Contributions to code repos on Github</td></tr><tr><td>Contributions to Persistence Documentation</td></tr><tr><td>Research Reports</td></tr><tr><td>Provide validator support (articles, videos, onboarding)</td></tr><tr><td>Successful Talent Referrals</td></tr><tr><td>Successful Partnership Referrals (Investors, LPs, Projects)</td></tr><tr><td>pSTAKE support</td></tr><tr><td>Other tools or contributions ******</td></tr></tbody></table>

\*\*\*\*\* Relayers play an important part in the vision of building persistence as a Liquid Staking Hub, and some relayer operators are more specialized than others. To ensure relayer operators receive delegations in line with their performance, we want to introduce a monitoring and scoring system for relayers. If you want to help us build this, please reach out to the team directly to discuss it.

\*\*\*\*\*\* To include contributions that are not listed in this Round, please make your case in the Discord channel ‘validators-discussion’.&#x20;

As the rounds of the Foundation Program progress, the aim is to optimize the program and make the scoring system more community-driven.
