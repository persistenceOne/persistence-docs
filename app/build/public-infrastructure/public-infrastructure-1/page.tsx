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
  const content = `# Snapshots & Archival Nodes

## Snapshots

To aid with node syncing, the following snapshots are provided.

| Provider         | Mainnet (core-1)                                                                                                                                       | Testnet (test-core-2)                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Auto Stake       | [https://snapshots.autostake.net/core-1/](https://snapshots.autostake.net/core-1/)                                                                     | [https://snapshots.autostake.com/test-core-2/](https://snapshots.autostake.com/test-core-2/)                                                                                                     |
| BlueStake        | [https://persistence.bluestake.net/](https://persistence.bluestake.net/)                                                                               |                                                                                                                                                                                                  |
| Bware Labs       | [https://bwarelabs.com/snapshots](https://bwarelabs.com/snapshots)                                                                                     | [https://bwarelabs.com/snapshots/persistence](https://bwarelabs.com/snapshots/persistence)                                                                                                       |
| High Stakes      | [https://tools.highstakes.ch/snapshots/persistence](https://tools.highstakes.ch/snapshots/persistence)                                                 |                                                                                                                                                                                                  |
| Imperator        | [https://imperator.co/services/persistence](https://imperator.co/services/persistence)                                                                 | [https://imperator.co/services/persistence](https://imperator.co/services/persistence)                                                                                                           |
| Paranormal Bros. | [https://persistence.paranorm.pro/#snapshot](https://persistence.paranorm.pro/#snapshot)                                                               |                                                                                                                                                                                                  |
| Polkachu         | [https://polkachu.com/tendermint\\_snapshots/persistence](https://polkachu.com/tendermint\\_snapshots/persistence)                                       | [https://polkachu.com/testnets/persistence/snapshots](https://polkachu.com/testnets/persistence/snapshots)                                                                                       |
| STC Capital      | [https://stc.capital/networks/persistence](https://stc.capital/networks/persistence)                                                                   |                                                                                                                                                                                                  |
| YTWOFUND         | [https://github.com/YTWOFUND/PersistenceCore-service/blob/main/Snapshot.md](https://github.com/YTWOFUND/PersistenceCore-service/blob/main/Snapshot.md) | [https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md](https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md) |
| Stakeandrelax    | [https://services.stakeandrelax.net/mainnet/persistence/snapshot](https://services.stakeandrelax.net/mainnet/persistence/snapshot)                     |                                                                                                                                                                                                  |
| Synergynodes     | [https://www.synergynodes.com/service/persistence](https://www.synergynodes.com/service/persistence)                                                   |                                                                                                                                                                                                  |
| Quicksync        | [https://quicksync.cros-nest.com/persistence/snapshots](https://quicksync.cros-nest.com/persistence/snapshots)                                         |                                                                                                                                                                                                  |

**How to use the backups:** Depending on the provider's snapshot, a specific URL above needs to follow a set of instructions. Each table URL has a number attached indicating the usage instructions.

#### \\[1] Method One - using \`wget\`

1.  Download Snapshot:

    \`\`\`bash
    cd ~/.persistenceCore && wget -O persistence_snapshot.tar.gz <SNAPSHOT_URL>
    \`\`\`
2. Stop your node.
3. Backup \`~/.persistenceCore/data/priv_validator_state.json\`.
4.  Extract archive:

    \`\`\`bash
    tar zxf ~/.persistenceCore/persistence_snapshot.tar.gz
    \`\`\`
5. **Important,** remove wasm cache which typically present at \`~/.persistenceCore/wasm/wasm/cache/modules\`
6. Copy & Paste the \`priv_validator_state.json\` backup back in \`~/.persistenceCore/data/\`.
7. Start your node.

#### \\[2] Method Two - following the provider's instructions

1. Visit the provider's website (click the link in the table).
2. Follow the instructions provided.

## Archival Nodes

To aid the retrieval of historical data, the following archival endpoints are provided.

| Protocol | Provider  | Mainnet (core-1)                              | Testnet (test-core-2) | Testnet (test-core-1) |
| -------- | --------- | --------------------------------------------- | --------------------- | --------------------- |
| RPC      | AUDIT.one | https://rpc.persistence.audit.one             |                       |                       |
| REST     | AUDIT.one | https://rest.persistence.audit.one            |                       |                       |
| WSS      | AUDIT.one | wss://rpc.persistence.audit.one:443/websocket |                       |                       |
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Snapshots & Archival Nodes</Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}
