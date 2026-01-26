'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, useDisclosure, Link, HStack, Image} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Persistence JS


          <Box
            as={Link}
            href="https://github.com/persistenceOne/persistenceJS#readme"
            isExternal
            display="block"
            mb={4}
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            _hover={{
              borderColor: 'gray.300',
              bg: 'gray.50',
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={4} align="center">
              <Box
                boxSize="40px"
                borderRadius="md"
                bg={themeColors.card.variant0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink={0}
              >
                <Text color="white" fontWeight="bold" fontSize="xl">P</Text>
              </Box>
              <Box flex="1">
                <Text fontWeight="medium" color={themeColors.text[700]} mb={1}>
                  PersistenceJS
                </Text>
                <Text fontSize="sm" color={themeColors.text[500]}>
                  github.com
                </Text>
              </Box>
              <ChevronRightIcon color={themeColors.text[500]} boxSize={5} flexShrink={0} />
            </HStack>
          </Box>

### Setup

\`\`\`
npm install persistenceonejs
\`\`\`

### Usage

PersistenceClient consists of a \`signingStargateClient\` and a \`SigningCowsmWasmClient\`, referred to as core and wasm respectively.

For querying use PersistenceClient.query, this gives you a \`tmclient\`. Usage for a tmclient for querying is based on \`cosmos-sdk\` i.e. query path is taken from module locations.

\`\`\`
import { PersistenceClient } from "persistenceonejs";

const alice = await PersistenceClient.init(...mnemonic);
const codes = await alice.query.cosmwasm.wasm.v1.codes({});
console.log(codes);
\`\`\`

### Example

*   **Send Tokens** Use persistenceClient.wasm to send contracts via CW20 contract, persistenceClient.wasm is a SigningWasmClient so most of the functionalities are similar to @cosmjs/[cosmwasm-stargate](https://github.com/cosmos/cosmjs/tree/main/packages/cosmwasm-stargate). The Signer for this example is a mnemonic wallet.

    \`\`\`
    import { PersistenceClient, Cw20Contract } from "persistenceonejs";
    import { coins } from "@cosmjs/stargate";

    const alice = await PersistenceClient.init(...mnemonic);
    const [account] = await alice.wallet.getAccounts();
    const aliceaddress = account.address;
    const pstake =
      "persistence14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sjvz4fk"; //cw20 token address on chain
    const res = await alice.wasm.execute(
      aliceaddress,
      pstake,
      {
        transfer: {
          recipient: "persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu", //recipient address
          amount: "10",
        },
      },
      { amount: coins(2_000_000, "stake"), gas: "200000" },
    );
    console.log(res);
    \`\`\`

    \`\`\`
    {
      logs: [ { msg_index: 0, log: '', events: [Array] } ],
      height: 1354,
      transactionHash: 'B4789783E9FB89FC69AB38F38C3C670612041C7E1EFFB8DF22929681BD52FB4A',
      gasWanted: 200000,
      gasUsed: 75715
    }
    \`\`\`

    Query Balance

    \`\`\`
    const balance = await alice.wasm.queryContractSmart(pstake, {
      balance: { address: "persistence123em6jp7y96rtylp6tjk9r0dcescl0k4ccqvpu" },
    });
    console.log(balance);
    \`\`\`

    \`\`\`
    {
      balance: "13010";
    }
    \`\`\`

    Please refer to [cowmwasm](https://docs.cosmwasm.com/dev-academy/smart-contract-interaction/interact#setting-up-the-cosmjs-cli-client) for more information on how to use CosmWasm.
*   **MsgSend** A more flexible way to send transaction is by creating a Msg and brodcasting it. This is the preferd way for building large scale applications with multiple components.

    \`\`\`
    import { cosmos } from "persistenceonejs";
import colors from '@/theme/colors'
    const sendMsg = {
      typeUrl: "/cosmos.bank.v1beta1.tx.MsgSend",
      value: cosmos.bank.v1beta1.MsgSend.fromJSON({
        fromAddress: from,
        toAddress: to,
        amount: amount,
      }),
    };
    const res = await alice.core.signAndBroadcast(
      account.address,
      [sendMsg],
      { amount: [{ denom: "uxprt", amount: "10000" }], gas: "100" },
      "test send",
    );
    \`\`\`

    This method gives a lot more flexibility for an application, additional use case can be found in the [helpers](https://github.com/persistenceOne/persistenceJS/blob/master/examples/helpers).

### Gov Proposals

This [script](https://github.com/persistenceOne/persistenceJS/blob/master/tests/testContractProposals.ts) lets you upload and initiate a contract via Gov proposals.

> _**NOTE:**_ It is the default method for uploading your own contract to the persistence chain.
`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header onMenuClick={onOpen} />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Persistence JS
            </Heading></Link>
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
