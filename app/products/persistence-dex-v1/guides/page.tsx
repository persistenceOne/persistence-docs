import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Guides - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Guides

## Get Started by connecting to Persistence DEX.

### Setting Up a Wallet <a href="#setting-up-a-wallet" id="setting-up-a-wallet"></a>

Users need a Keplr wallet to connect to Persistence DEX.

* Download the Keplr wallet [here](https://www.keplr.app/download).
* Check out this [guide](https://help.keplr.app/articles/installation-guide-for-keplr-extension-for-beginners) on how to set up a Keplr wallet.

### Connecting a Wallet <a href="#connecting-a-wallet" id="connecting-a-wallet"></a>

* Head over to the Persistence DEX App - [app.persistence.one](https://app.persistence.one)
* Click on "Connect Wallet" at the top right corner.
* Users can choose among **Keplr, Leap, and Cosmostation** wallets from the popup.
* Approve the connection request for the "Core-1" chain on the wallet.

### Disconnecting a Wallet

* Click on the dropdown icon on the top right corner along with the wallet name and click on "Disconnect".

Follow the next pages for managing assets, trading, providing liquidity & more on Persistence DEX.
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
              Guides
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
