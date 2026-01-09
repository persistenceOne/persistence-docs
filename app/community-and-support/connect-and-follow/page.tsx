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
  const content = `# Connect & Follow

## Official pages and channels

<table data-view="cards"><thead><tr><th align="center"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td align="center"><strong>Website</strong></td><td><a href="https://persistence.one">https://persistence.one</a></td></tr><tr><td align="center"><strong>Github</strong></td><td><a href="https://github.com/persistenceOne">https://github.com/persistenceOne</a></td></tr><tr><td align="center"><strong>Blog</strong></td><td><a href="https://blog.persistence.one/">https://blog.persistence.one/</a></td></tr><tr><td align="center"><strong>X (formerly Twitter)</strong></td><td><a href="https://x.com/PersistenceOne">https://x.com/PersistenceOne</a></td></tr><tr><td align="center"><strong>LinkedIn</strong></td><td><a href="https://www.linkedin.com/company/persistenceone">https://www.linkedin.com/company/persistenceone</a></td></tr><tr><td align="center"><strong>Discord</strong></td><td><a href="https://discord.com/invite/8DuNRExDj2">https://discord.com/invite/8DuNRExDj2</a></td></tr><tr><td align="center"><strong>Forum</strong></td><td><a href="https://forum.persistence.one/">https://forum.persistence.one/</a></td></tr><tr><td align="center"><strong>Telegram</strong></td><td><a href="https://t.me/PersistenceOne">https://t.me/PersistenceOne</a></td></tr><tr><td align="center"><strong>Reddit</strong></td><td><a href="https://www.reddit.com/r/PersistenceOne/">https://www.reddit.com/r/PersistenceOne/</a></td></tr><tr><td align="center"><strong>Youtube</strong></td><td><a href="https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ">https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ</a></td></tr></tbody></table>

## Telegram Communities

<table><thead><tr><th width="204">Country or Region</th><th width="214.33333333333331">Moderator / Facilitator</th><th width="381.6666666666667">Link</th></tr></thead><tbody><tr><td>Global</td><td>Persistence</td><td><a href="https://t.me/PersistenceOne">https://t.me/PersistenceOne</a></td></tr><tr><td>China</td><td></td><td><a href="https://t.me/PersistenceOneChina">https://t.me/PersistenceOneChina</a></td></tr><tr><td>France</td><td>StakeLab</td><td><a href="https://t.me/PersistenceOneFrance">https://t.me/PersistenceOneFrance</a></td></tr><tr><td>Russia</td><td>PostHuman</td><td><a href="https://t.me/PersistenceRussia">https://t.me/PersistenceRussia</a></td></tr><tr><td>South-Korea</td><td>Nonce</td><td><a href="https://t.me/PersistenceKorea">https://t.me/PersistenceKorea</a></td></tr><tr><td>Spain</td><td>Cosmonaut Stakes</td><td><a href="https://t.me/PersistenceOneESP">https://t.me/PersistenceOneESP</a></td></tr><tr><td>Turkey</td><td>Wonder wasp</td><td><a href="https://t.me/PersistenceOneTurkey">https://t.me/PersistenceOneTurkey</a></td></tr><tr><td>Vietnam</td><td>Megala</td><td><a href="https://t.me/PersistenceOneVietnam">https://t.me/PersistenceOneVietnam</a></td></tr></tbody></table>
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
              Connect & Follow
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
