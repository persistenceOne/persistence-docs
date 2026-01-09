'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Validate on Mainnet

> **Warning**
> Before creating a mainnet validator, ensure you have first followed the instructions on [how to join the mainnet](/docs/build/nodes-and-endpoints/join-mainnet). Also, unless you have previous experience running Cosmos Validators, we highly recommend starting with learning [how to validate on testnet](https://docs.persistence.one/build/validators/testnet-validator-setup).

### Create Validator
1. Ensure the **node is synced** *(response must be \`false\`)*: 
	\`\`\`bash
	curl http://localhost:26657/status | jq -r ".result.sync_info.catching_up"
	\`\`\`
2. Ensure you've got at least **~2+ XPRT** available in the wallet *(XPRT address created in [how to join the mainnet](/docs/build/nodes-and-endpoints/join-mainnet))*. You can acquire **XPRT** by following [this guide](https://www.binance.com/en/how-to-buy/persistence).
3.  **Create Validator**.

	Before copying and pasting the command below, ensure you keep, replace, or delete certain options as highlighted in the command snippet below. We recommend copying the command in a notepad *(or other text editor)* and edit the parameters accordingly. 

	\`\`\`bash
	persistenceCore tx staking create-validator \\
	--from="[KEY_NAME]" \\ # REPLACE
	--amount="1000000uxprt" \\
	--pubkey="$(persistenceCore tendermint show-validator)" \\
	--chain-id="core-1" \\
	--moniker="[VALIDATOR_NAME]" \\ # REPLACE
	--commission-max-change-rate=0.05 \\ # KEEP OR REPLACE
	--commission-max-rate=0.20 \\ # KEEP OR REPLACE
	--commission-rate=0.10 \\ # KEEP OR REPLACE
	--min-self-delegation="1" \\ # KEEP OR REPLACE
	--website="[OPTIONAL]" \\ # DELETE OR REPLACE
	--identity="[OPTIONAL]" \\ # DELETE OR REPLACE
	--details="[OPTIONAL]" \\ # DELETE OR REPLACE
	--security-contact="[OPTIONAL]" \\ # DELETE OR REPLACE
	--gas="auto" \\
	--gas-adjustment="1.5" \\
	--gas-prices="0.025uxprt"
	\`\`\`
	**Here's an example of how this command should look like when all the parameters are filled in correctly.**
	\`\`\`bash
		persistenceCore tx staking create-validator \\
		--from="PersistenceOneValidatorKey" \\
		--amount="1000000uxprt" \\
		--pubkey="$(persistenceCore tendermint show-validator)" \\
		--chain-id="core-1" \\
		--moniker="PersistenceOneValidator" \\
		--commission-max-change-rate=0.05 \\
		--commission-max-rate=0.20 \\
		--commission-rate=0.10 \\
		--min-self-delegation="1" \\
		--website="https://persistence.one/" \\
		--identity="5C1159DB8957B5AA" \\
		--details="This is an explanation on why delegators should consider delegating with your validator. Keep it a short and sweet." \\
		--security-contact="hello@persistence.one" \\
		--gas="auto" \\
		--gas-adjustment="1.5" \\
		--gas-prices="0.025uxprt"
	\`\`\`
	**If you need further explanation for each of these command flags:**

	-   the  \`from\`  flag is the KEY_NAME you created when initializing the key on your keyring
	-   the  \`amount\`  flag is the amount you will place in your own validator in uxprt (in the example, 1000000uxprt is 1xprt)
	-   the  \`pubkey\`  is the validator public key \`(persistenceCore tendermint show-validator)\`
	-   the  \`moniker\`  is a human readable name you choose for your validator
	-   the  \`security-contact\`  is an email your delegates are able to contact you at
	-   the  \`chain-id\`  is whatever chain-id you are working with (in the persistence mainnet case it is core-1)
	-   the  \`commission-rate\`  is the rate you will charge your delegates (in the example above, 10 percent)
	-   the  \`commission-max-rate\`  is the most you are allowed to charge your delegates (in the example above, 20 percent)
	-   the  \`commission-max-change-rate\`  is how much you can increase your commission rate in a 24 hour period (in the example above, 5 percent per day until reaching the max rate)
	-   the  \`min-self-delegation\`  is the lowest amount of personal funds the validator is required to have in their own validator to stay bonded (in the example above, 1xprt)
	-   the  \`gas-prices\`  is the amount of gas used to send this create-validator transaction

6. **Confirm your validator is running.** Your validator is active if the following command returns anything:

	\`\`\`bash
	persistenceCore query tendermint-validator-set | grep "$(persistenceCore tendermint show-address)"
	\`\`\`

	You should now see your validator in [one of the Persistence explorers](https://www.mintscan.io/persistence/validators).
7. **Congratulations!** You've just created a Persistence Mainnet Validator.

### View Validator Description

View the validator's information with this command:

\`\`\`bash
persistenceCore query staking validator $(persistenceCore keys show <key_name> --bech=val -a)
\`\`\`

Here's an example of how the above command should be used:
\`\`\`bash
persistenceCore query staking validator persistencevaloper1rzauu3undh97yvdnj7wu2wwstm9wj8heeq2vcz
\`\`\`

### Edit Validator Description

You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below. If a flag is not included in the command the field will default to empty (\`--moniker\` defaults to the machine name) if the field has never been set or remain the same if it has been set in the past.

The \\<key\\_name> specifies which validator you are editing. If you choose to not include some of the flags below, remember that the --from flag **must** be included to identify the validator to update.

The \`--identity\` can be used as to verify identity with systems like Keybase or UPort. When using Keybase, \`--identity\` should be populated with a 16-digit string that is generated with a [keybase.io](https://keybase.io) account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows us to retrieve your Keybase avatar. This is how you can add a logo to your validator profile.

\`\`\`bash
persistenceCore tx staking edit-validator
  --moniker="choose a moniker" \\
  --website="https://your-website.com" \\
  --identity=6A0D65E29A4CBC8E \\
  --details="To infinity and beyond!" \\
  --chain-id=core-1 \\
  --gas="auto" \\
  --gas-prices="0.0025uxprt" \\
  --from=<key_name> \\
  --commission-rate="0.10"
\`\`\`

> **Warning**
> Please note that some parameters such as \`commission-max-rate\` and \`commission-max-change-rate\` cannot be changed once your validator is up and running.

**Note**: The \`commission-rate\` value must adhere to the following rules:

* Must be between 0 and the validator's \`commission-max-rate\`
* Must not exceed the validator's \`commission-max-change-rate\` which is maximum % point change rate **per day**. In other words, a validator can only change its commission once per day and within \`commission-max-change-rate\` bounds.


### Track Validator Signing Information

In order to keep track of a validator's signatures in the past you can do so by using the \`signing-info\` command:

\`\`\`bash
persistenceCore query slashing signing-info $(persistenceCore tendermint show-validator) --chain-id core-1
\`\`\`

### Halt Validator

When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have your validator systematically and gracefully halt. You can achieve this by either setting the \`halt-height\` to the height at which you want your node to shutdown *(available in \`~/.persistenceCore/config/app.toml)\`* or by passing the \`--halt-height\` flag to \`persistenceCore\`. The node will shutdown with a zero exit code at that given height after committing the block.

### Unjail Validator

When a validator is "jailed" for downtime, you must submit an \`Unjail\` transaction from the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution).

\`\`\`bash
persistenceCore tx slashing unjail \\
	--from=<key_name> \\
	--chain-id core-1
\`\`\`

Here's an example of how the above command should be used:
\`\`\`bash
persistenceCore tx slashing unjail \\
	--from="PersistenceOneValidator" \\
	--chain-id core-1
\`\`\`

### Advanced configuration

You can find more advanced information about running a node or a validator on the [Tendermint Core documentation](https://docs.tendermint.com/v0.34/tendermint-core/validators.html).

## Version

This chain is currently running on persistenceCore [v5.0.0](https://github.com/persistenceOne/persistenceCore/releases/tag/v5.0.0) *(Commit Hash: \`de671f5927b4d0b87e8db5940a99e03c7e512b58\`)*

> **Warning**
> If your node is running on an older version of the application, please update it to this version at the earliest to avoid being exposed to security vulnerabilities or defects.

## Explorer

The explorer for this chain is accessible [here](https://www.mintscan.io/persistence).
`
  const hideFirstHeading = true
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box display="flex" flex="1" overflow="hidden">
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Validate on Mainnet
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
        </Box>
          <TableOfContents headings={headings} />
        </Box>
      </Box>
    </Box>
  )
}
