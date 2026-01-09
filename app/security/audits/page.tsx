'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading as ChakraHeading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Audits

Persistence DEX takes the security of its base very seriously, and keeping user funds safe is a top priority.

Persistence DEX's code has been audited by top blockchain security firms, including **Halborn**, **Oak** **Security**, and **Peckshield**.

Check out the audit reports here:

* [Halborn Final Report.pdf](https://2753824657-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9LsBCKFqnrfW4Kl6Y0k0%2Fuploads%2FDS6xkFhwgrT4H5J1Fokz%2FHalborn%20Final%20Report.pdf?alt=media\\&token=b7bc0ae9-4820-4a95-b5db-e317a543edae) (1MB)
* [PeckShield Final Report.pdf](https://2753824657-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9LsBCKFqnrfW4Kl6Y0k0%2Fuploads%2FwvVYlUkUYvUBYhGp42Nl%2FPeckShield%20Final%20Report.pdf?alt=media\\&token=1c749cc8-533c-402e-a85d-b3ebb7ae1598) (395KB)
* [Oak Final Report.pdf](https://2753824657-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9LsBCKFqnrfW4Kl6Y0k0%2Fuploads%2FNQQcHe1LyZyn74wDhP0P%2FOak%20Final%20Report.pdf?alt=media\\&token=5a018e3b-f006-4174-b73a-11a1e9e900c7) (576KB)

In addition, a Financial Audit was also conducted by Halborn. Check out the report here:

* [Halborn Financial Final Report.pdf](https://2753824657-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9LsBCKFqnrfW4Kl6Y0k0%2Fuploads%2FKuYZwTRDQKbpXKtKKmZY%2FHalborn%20Financial%20Final%20Report.pdf?alt=media\\&token=854ba839-4aec-4ad6-b49d-35efca317dc5) (1MB)

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
            <ChakraHeading as="h1" size="2xl" mb={4}>
              Audits
            </ChakraHeading>
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
