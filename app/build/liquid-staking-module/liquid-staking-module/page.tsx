'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# For Validators

As an additional security feature, validators who want to enable their delegators to migrate their wallet from 750 coin-type to 118 coin-type using LSM, are required to “validator-bond” a certain amount of XPRT.

The validator “validator-bond” means that validators need to have “skin in the game” in order to be entrusted with delegations.

This disincentivizes malicious behavior and empowers the validator to get more delegations.

### Understanding Validator-Bond

The initial validator bond factor would be set at 250 and can be configurable by governance.

With a validator-bond factor of 250, for every one XPRT delegated as validator-bond, that validator is eligible to receive up to two-hundred-and-fifty liquid stake delegated XPRT tokens from a liquid staking provider.

\`\`\`formula:
\`\`\`markup
total_liquid_stake_on_validator.amount / Sum(every_delegation_where[bond=True].amount) < VALIDATOR_BOND_FACTOR
\`\`\`
\`\`\`

### Step-by-step instructions for validators

**Step 1:** Create a new Persistence wallet named as \`'valBondAccount'\`. We recommend you should not use an existing wallet (see FAQ below for details).

**Step 2:** Determine how many XPRT you should validator-bond using our [tool](https://docs.google.com/spreadsheets/d/13XXa3cHDoDsbXg7cjBRk8i0SBUBG3YoNmtKgUXCXNcI/edit#gid=83969709), or based on your own calculations.

**Step 3:** Send the number of XPRT you would like to validator-bond to \`valBondAccount\`

**Step 4:** From \`valBondAccount\`, delegate these XPRT to your validator.

**Step 5:** From \`valBondAccount\`, Validator-Bond the delegation you made to your validator (see detailed instructions below).

> ℹ️ **Info:** The Validator-Bond transaction will mark your existing delegation as a validator bond and users will now be able to migrate their wallet addresses using your validator.

***

### How to Validator Bond? (Technical Instructions)



> ✅ **Success:** Note: This [validator bond tool](https://www.kitkat.zone/validator-bond) by Kitkat can also be used to validator-bond.

A delegator (or validator operator) can convert a delegation into Validator Bond by signing a ValidatorBond message. The ValidatorBond message is exposed by the staking module and can be executed as follows:

\`\`\`
persistenceCore tx staking validator-bond ValidatorAddress --from mykey  
\`\`\`

_Here’s an example of a successful validator bond transaction on core-1 chain:_

* **First**, delegate to a validator from a new account:

\`\`\`
\`\`\`url
https://www.mintscan.io/persistence/transactions/11D746B6C94CA4BBC18B02F08A0024A4730BAE1ADDEFEDAFAE85EC58A7DACAA5
\`\`\`
\`\`\`

* **Then**, validator bond from that account:

\`\`\`
\`\`\`url
https://www.mintscan.io/persistence/transactions/36E58CAAA55BAA9CBC59E7CD0C1F78355AE5268331DB6C23DDC5AB79E001DF0E?height=13165160
\`\`\`
\`\`\`

Here’s the transaction that was submitted on the command line:

\`\`\`
\`\`\`
 persistenceCore tx staking validator-bond ValidatorAddress 
 
  --from MyKey 
  --fees 1000uxprt
  --chain-id core-1
  --node https://rpc.core.persistence.one:443
\`\`\`
\`\`\`

You can confirm your conversion to a validator bond succeeded by querying the delegation:

\`\`\`
persistenceCore q staking delegations DelegatorAddress

delegation_responses:
- balance:
    amount: "N"
    denom: uxprt
  delegation:
    delegator_address: persistence123...ABC
    shares: "1.000000000000000000"
    validator_address: persistencevaloper123...XYZ
    validator_bond: true  <---- You should see this field = true :)
\`\`\`

***

### FAQs

<details>

<summary>How much should I validator bond?</summary>

For every 1 XPRT you validator-bond, you will be eligible to receive up to 250 XPRT tokenized shares from delegators.

For example, if you validator bond 1,000 XPRT, you will be eligible for 250,000 XPRT tokensized shares.

We built a tool that recommends how much you should validator bond.

👉 [Recommended Validator Bond Tool](https://docs.google.com/spreadsheets/d/13XXa3cHDoDsbXg7cjBRk8i0SBUBG3YoNmtKgUXCXNcI/edit#gid=83969709) 👈

</details>

<details>

<summary>When do I need to validator bond?</summary>

We recommend validator bonding immediately as users (Delegators on your validator) will attempt to migrate their wallet address coin-type from 750 to 118.

At that time, if a validator does not have sufficient validator bond, delegators will not be able to migrate. In this condition delegators can also redelegate the tokens first to a validator which has validator-bond in order to continue the migration process.

This acts as an advance for validators to attract more delegation from users in the long run.

</details>

<details>

<summary>Which wallet should I validator bond from?</summary>

We recommend validators create a new wallet to validator bond. This can be a new seed phrase, or a wallet derived using an existing seed phrase and a new account index. New wallets are preferred for separation of delegations marked validator bond and regular delegations. There are no partial Validator Bonds: when a delegator or validator converts delegation to a particular validator into Validator Bond, their entire delegation to that validator is converted to Validator Bond.

By creating a new wallet to validator bond, an existing delegator can mark part of their delegation as validator bond (by transferring those funds to the new address and marking it as validator bond from that address), while leaving their existing delegation unchanged.

</details>

<details>

<summary>What if I don’t validator bond?</summary>

if a validator doesn't have enough delegations marked as bond to match the Bond Factor, they won't have enough room to accept new delegations from Liquid Staking providers

</details>

<details>

<summary>Can I un-delegate my validator bond?</summary>

To convert the validator bond back into standard delegation, simply unbond or redelegate the shares. Unbonding or redelegating a validator bond reduces the amount of validator bond associated with a validator.

The following question outlines a case when delegating your validator bond. If unstaking or delegation marked as validator-bond would cause the number of tokens delegated to that validator to exceed 250 times the validator’s resulting validator bond, then the unbonding or redelegation will fail.

In this case, the delegator will not be able to unbond until the amount of delegated XPRT shares to the validator decreases, or the amount of validator bond to the validator increases.

</details>

<details>

<summary>Are there any risks associated with validator bond?</summary>

In the event of a slash, validator bond delegations are slashed at the same rate as standard delegations.

</details>

<details>

<summary>Is validator bond a centralizing force?</summary>

Hopefully not! Validators with less voting power require lower amounts of validator bond.

The validator bond factor multiplier of 250 also means that the absolute size of the validator bond required isn’t too large, especially relative to the revenue validators can earn from additional delegations they receive from liquid staking providers.

</details>

<details>

<summary>Are validator bond tokens the same thing as validator self-delegated tokens?</summary>

No, they are different.

Self-delegated tokens are delegations made by a validator operator to their own validator node. Validator bonded tokens are delegations made from any delegator to a validator node, that have been marked as Validator Bond with the validator-bond message.

Validator bond delegations have additional unbonding restrictions (see above: “Can I undelegate my validator bond?”) relative to the validator bond.

</details>

<details>

<summary>Do self-delegated tokens turn into validator-bond?</summary>

No, they do not. To designate a delegation as validator bond, the delegator must sign a validator-bond message.

</details>
`
  const hideFirstHeading = true
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              For Validators
            </Heading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
