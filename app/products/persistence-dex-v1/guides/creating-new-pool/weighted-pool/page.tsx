import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Weighted Pool - Persistence Docs',
  description: 'Suits all assets',
}

export default function Page() {
  const content = `
# Weighted Pool

A custom weighted pool AMM mechanism inspired by Balancer, which allows users to create a custom pool of assets and choose their weightage for each asset, such as pools with 60/40 or 60/20/20 weightage, in contrast to the constant product AMM mechanism, which only offers 50/50 weightage. This pool type supports up to 8 assets in a single pool.

For an in-depth explanation of Weighted Pools by Persistence DEX, [click here.](https://app.gitbook.com/o/hVvJKSHKLqEyI1jNR7p9/s/msiEudvUiaeJSMheQiRX/~/changes/189/persistence-dex/pools)

**How to create Weighted Pool on Persistence DEX.**

* **Step 1:** Go to Pools page. [https://app.persistence.one/pools](https://app.persistence.one/pools)

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FzCES32sKx14bZe9sA9tm%252Fimage.png%3Falt%3Dmedia%26token%3Dad457d59-43a9-47f9-8371-1252ea30f002&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=fe1129a3132c3b30ebcfbb1e665a0fae53d5a5db10f59c25fc742b567ba5d34a" alt=""><figcaption></figcaption></figure>

* **Step 2:** Click "Create New Pool" button.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FaJ7v1MoWoavlQpWGehog%252Fimage.png%3Falt%3Dmedia%26token%3D5ad91685-5ed7-4957-8ea1-88290af5d0e0&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=19a45d782e4db3f20d5e8aef1cb13dadd5d486887158c77faa7400bab1d49c17" alt=""><figcaption></figcaption></figure>

* **Step 3:** Choose Pool Type - in this case, Weighted Pool is selected as the preferred pool type.

> ℹ️ **Info:** You will need 250 XPRT to create the pool and 3500 XPRT as a proposal deposit for the governance proposal.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FxaeRhwDk8J13jOp2yAjk%252Fimage.png%3Falt%3Dmedia%26token%3D09fa8a5b-8bd9-47ce-bc0f-844dea56c355&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=5d85f81c110070727343d9fbc2cc1c24822df7fa56c5bbf72749df2b2f30fea3" alt=""><figcaption></figcaption></figure>

* **Step 4:** Select Token Pair for Weighted Pool

> ℹ️ **Info:** Minimum of 2 tokens will need to be selected in order to Create a New Pool.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252F3CyireHdzEXeZF0Tefiq%252FScreenshot%25202023-12-20%2520at%252012.45.41%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Daa9417c2-7ce0-400c-b0e6-8390ef8477d6&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=1d6df1c720d28c664a2a453b325ecf6949738289bf7452e13a5e2af15e58f790" alt=""><figcaption></figcaption></figure>

* **Step 5:** Assign token weight and repeat until all tokens have been added; ensure weights add to 100%.

> ℹ️ **Info:** The default settings for Swap Fee follows protocol recommendations but can be modified to align with your preferences.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FX8BuIsohPYZ03Q6Xhrz9%252FScreenshot%25202023-12-20%2520at%252012.49.38%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D33248432-9c53-4f62-880e-5eea36b428db&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=369df58d4d6761705b3a3b1a71d510497498afe769bb2b22e703a7e19f2ea6d0" alt=""><figcaption></figcaption></figure>

* _**\\[Optional]**_**&#x20;Step 6:** Add Liquidity by entering a >0 amount of each token to add liquidity to the pool upon creation.

> ℹ️ **Info:** If there's an insufficient balance for any assets, users can deposit those assets first and then proceed to add liquidity to the pool during its creation. Persistence DEX recommends bootstrapping the liquidity with a minimum of $1,000 in the ratio selected.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Fyybjl4aieHiq5vCFwyl8%252FScreenshot%25202023-12-20%2520at%252012.52.01%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dd8b02959-c31c-4f51-85c7-0c07a7771d09&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=f8c7c96f5d4e244b22aab171ecf51c1b14ecb0b8beb24250c71c14499a7abc9c" alt=""><figcaption></figcaption></figure>

* _**\\[Optional]**_**&#x20;Step 7:** Set Pool Rewards Schedule by selecting reward token and amount, and rewards time period.

> ℹ️ **Info:** Setting up the rewards schedule is optional and can be done post-pool creation. To set a rewards schedule for pool, click this link.

If there's an insufficient balance for any assets, users can deposit those assets first and then proceed to add liquidity to the pool during its creation.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FsWuocdRxKK6DHKPBCeDJ%252FScreenshot%25202023-12-20%2520at%252012.53.55%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D10051c4b-d8d7-4c20-9099-2ec6e47c2c56&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=8c4c0e10be588c68797661579f5f7a37e81f733b0b3aabf767b1ef949abf81da" alt=""><figcaption></figcaption></figure>

* **Step 8:** Confirm Pool and Fee Summary Details

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FsISQJGBxN8UAz8T9lgGw%252FScreenshot%25202023-12-20%2520at%252012.54.45%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Df11ddcc4-3945-4e6a-a52b-afe02ffe13b1&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=1fa9d7ce5aabbaebdd0848acf8e19d4bdbe64e08832f008a28961c337b69e7cf" alt=""><figcaption></figcaption></figure>

* **Step 9:** Create Proposal for setting up the Weighted Pool. Title and Description for the proposal are pre defined as per the pool details. Additional information, if necessary, can be included within the additional message text box.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Fu76n9dKYSrYb4Zz2Fyfo%252FScreenshot%25202023-12-20%2520at%252012.56.04%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D24e0d134-fd6a-4db0-b5b1-425610134816&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=9341e121af30bb2f403a97fd22a17c9e6143686af6898b88711588a96615c408" alt=""><figcaption></figcaption></figure>

* **Step 10:** Continue to approve the transaction with the connected wallet.

🥳 Congratulations! You have created a Weighted Pool with your preferred tokens, a confirmation message would be displayed in the bottom right.

Proposal is created and upon approval from the Persistence Governance, the pool will be created and accessible on the UI.

> ℹ️ **Info:** If you need any additional support, please raise a ticket on [our Discord server,](https://discord.persistence.one) and the Persistence DEX Team will be available to help.
`
  const hideFirstHeading = true

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Weighted Pool
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Suits all assets
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
