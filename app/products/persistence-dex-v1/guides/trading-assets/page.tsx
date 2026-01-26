'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Trading Assets

Follow the steps below to perform a swap between assets on Persistence DEX:

* **Step 1** - Head over to the Persistence DEX App ([https://app.persistence.one/assets](https://app.persistence.one/assets)). The home page is the Swap page.

<figure><img src="..//images/Swap - 0.png" alt=""><figcaption></figcaption></figure>

* **Step 2** - To change an asset click on the arrow beside the token name on each block and a popup would appear.

<figure><img src="..//images/2.png" alt=""><figcaption></figcaption></figure>

You may now either select the token of your choice and repeat the process for the remainder of the pair.

<figure><img src="..//images/image (1).webp" alt=""><figcaption></figcaption></figure>

* **Step 3** - Enter the desired amount you wish to swap.

<figure><img src="..//images/3.avif" alt=""><figcaption></figcaption></figure>

The expected amount would be displayed on the app.

* **Step 4**- Confirm swap by clicking on the "Swap" button.

<figure><img src="..//images/4.avif" alt=""><figcaption></figcaption></figure>

* **Step 5** - Approve the Transaction on your wallet.

<figure><img src="..//images/5.avif" alt=""><figcaption></figcaption></figure>

A snack bar will be displayed once the transaction is confirmed.

<figure><img src="..//images/51.avif" alt=""><figcaption></figcaption></figure>

Congratulations! You've made a swap on Persistence DEX.

## Setting Slippage <a href="#setting-slippage" id="setting-slippage"></a>

> ℹ️ **Info:** Slippage tolerance is the acceptable change in price during the execution of the trade.

Click on the "gear" icon on the right side of the screen, a popup would show up with a text box.

<figure><img src="..//images/6.avif" alt=""><figcaption></figcaption></figure>

Either select the predetermined slippage tolerance by clicking on the button or enter your desired input and click on "Save Settings".

<figure><img src="..//images/7.avif" alt=""><figcaption></figcaption></figure>
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Trading Assets
            </ChakraHeading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
