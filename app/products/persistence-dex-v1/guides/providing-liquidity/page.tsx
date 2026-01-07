import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Providing Liquidity - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Providing Liquidity

* **Step 1** - Head over to the Pools page on Persistence DEX ([https://app.persistence.one/pools](https://app.persistence.one/pools)).

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Fee70DdeoxaSh6OA2mlB6%252FPools.png%3Falt%3Dmedia%26token%3Da8eb4109-5789-452a-81c9-507a617d41aa&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=414d92c474dc0b502757d95ad3bca7788283383690c62caf6d534fd5e9854ce0" alt=""><figcaption></figcaption></figure>

* **Step 2** - Select a pool of your choice to provide liquidity.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Fr4w9XJyA25yeARSyNLC7%252FAll%2520Pools.png%3Falt%3Dmedia%26token%3D4c09eb81-8f7a-4b20-9918-b23b9ba0953c&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=592f52cb17c5d6da86495070df7b17f9db44892aaaab1b5db3dbd07af57ab078" alt=""><figcaption></figcaption></figure>

* **Step 3** - Click on "Add Liquidity" button on the Pool page.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FFDNsJSzo5XPnMMmkdf7V%252FAdd%2520Liquidity.png%3Falt%3Dmedia%26token%3D5b6015b2-cb8f-4d7d-976d-e99c7facc2e8&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=3bc5274fb7a1c5e59e25f86536f970713ee670453b54e44717611ec84259e6aa" alt=""><figcaption></figcaption></figure>

* **Step 4** - Enter the desired number of tokens in the input box.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252F2TZCNsV1UnCOEKb7hJhA%252FScreenshot%25202023-03-24%2520at%25209.57.40%2520PM.png%3Falt%3Dmedia%26token%3D4275c797-7bd2-492a-ae32-f8430785660e&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=fa81510f736123d85a4cb037fac31a0fd17c968271f3642cf4ffa3c15aa867bd" alt=""><figcaption></figcaption></figure>

Enter the amount of either of the tokens you wish to supply liquidity for and click on the "Add Liquidity" button.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FAV4FVgLwWd6J9xtmtlkL%252FScreenshot%25202023-03-24%2520at%252010.51.06%2520PM.png%3Falt%3Dmedia%26token%3D9c8aac9c-85cf-42a6-8bd5-5f6a37722898&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=cd88d5d6b8845f3390214560e309f9f5cf823562210764423d11038c649ed2ef" alt=""><figcaption></figcaption></figure>

* **Step 5** - Approve the Transaction on your wallet.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FcFqm5m1i88Wjzc9KYfTe%252FBroadcasting.png%3Falt%3Dmedia%26token%3Dab24b5cf-8d57-4b38-9e0b-ab60b039e078&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=21fe23b6791c0a65961ea833e994048284677579e330be4e371443477b6eef3c" alt=""><figcaption></figcaption></figure>

Congratulations! You have added liquidity to the desired pool, a confirmation message would be displayed in the bottom right.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FZglc27HbZaN2Gk4rQumN%252FSuccess.png%3Falt%3Dmedia%26token%3Da84c1fc6-8308-4bf1-a282-d77cdd84c377&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=4792c548ec7276b8e9abf476593b054e12d94fce21c86423475dc8424c6aed5c" alt=""><figcaption></figcaption></figure>

## Withdrawing Liquidity <a href="#withdrawing-liquidity" id="withdrawing-liquidity"></a>

* **Step 1** - Select the pool from the "My Pools" section on the pools page ([https://app.persistence.one/pools](https://app.persistence.one/pools))

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FRPpuIzQvozaDMBTGFsrx%252FScreenshot%25202023-03-26%2520at%25202.58.15%2520PM.png%3Falt%3Dmedia%26token%3D1daa4b71-fcf5-4aa6-a6db-0023abc0472d&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=d20966a1c739e41d316031a9ddefc23b2c74bcff8918a0f36c0d3931eeab3eb9" alt=""><figcaption></figcaption></figure>

* **Step 2** - Enter the number of LP shares to withdraw and click "Remove Liquidity"

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FgvWZ3PL29xJb3EEsKJiT%252FScreenshot%25202023-03-26%2520at%25203.02.11%2520PM.png%3Falt%3Dmedia%26token%3Db48d568a-dffc-4c49-ab2d-b021390c23b1&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=64055724ea71b436e3693c5d9b418f142214f516526b9e38cea2cfb078a34c0f" alt=""><figcaption></figcaption></figure>

* **Step 3** - Approve the IBC transaction to remove liquidity.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FP1Zc5ag5cJpFQPOA7HpX%252FTRansaction.png%3Falt%3Dmedia%26token%3Dfd3d59e0-ea3a-4f67-a8a6-b690588dac19&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=f90da8bd0ca40f0aba90e54f26d08bdf111fb612a2c4eed8ea505e6342940b80" alt=""><figcaption></figcaption></figure>

You will receive a confirmation once the transaction is confirmed.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FhxC3fhMDSnI2oMTlPDig%252FSuccess.png%3Falt%3Dmedia%26token%3Df2453f95-2a5c-4e24-8390-8a27ff545ba5&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=28b4bec387a25b32c8648deb2bb1cdbc1299091c73bbbefdbbbc75ee43e1e666" alt=""><figcaption></figcaption></figure>
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
              Providing Liquidity
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
