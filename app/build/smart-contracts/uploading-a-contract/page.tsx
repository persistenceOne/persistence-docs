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
  const content = `# Uploading a Contract

These are the steps to upload and instantiate a contract

* Submit the upload proposal
* Wait for it to pass
* Submit proposal for instantiating the contract
* Wait for the proposal to pass
* The contract is now instantiated and ready to be interacted with.

See the list of codes that was uploaded previously.

\`\`\`
persistenceCore query wasm list-code
\`\`\`

To upload the contract via proposal

\`\`\`
persistenceCore tx gov submit-proposal wasm-store "<path/to/the/compiled/wasm>" \\
  --title "title" \\
  --description "description" \\
  --deposit 10000uxprt \\
  --run-as $KEY \\
  --instantiate-nobody "true" \\
  --keyring-backend test \\
  --from $KEY --gas auto --fees 10000uxprt -y \\
  --chain-id core-1 \\
  -b block -o json --gas-adjustment 1.1
  
echo $RESP 
\`\`\`

The \`$KEY\` can be any valid persistenceAddress. Make sure it has some tokens.

If the contract is uploaded successfully, i.e., the above proposal is passed, then the contract will be instantiated via another gov-proposal

Get the $CODE\\_ID from \`wasm list-code\` after the proposal passes and proceed towards instantiation

\`\`\`
persistenceCore tx gov submit-proposal instantiate-contract $CODE_ID "$INIT" \\
  --admin="$KEY" \\
  --from $KEY \\
  --deposit 10000uxprt \\
  --label "label" \\
  --title "title" \\
  --description "description" \\
  --gas-adjustment 1.1 \\
  --fees "10000uxprt" \\
  --gas "auto" \\
  --run-as $KEY \\
  -y --chain-id core-1 -b block -o json
\`\`\`

The \`$KEY\` can be any valid persistenceAddress. Make sure it has some tokens.

The \`$INIT\` variable has to be in a json structure with all the variables needed for the contract example (init variable for the cw20 contract) :

\`\`\`
INIT=$(cat <<EOF
{
  "name": "My first token",
  "symbol": "FRST",
  "decimals": 6,
  "initial_balances": [{
    "address": "$KEY",
    "amount": "123456789000"
  }]
}
EOF
)
\`\`\`

After the proposal passes, the contract will be instantiated and can be interacted with!!

For more info check out the following link :

* [Smart Contracts Over Governance](https://docs.cosmwasm.com/tutorials/governance)
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
              Uploading a Contract
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
