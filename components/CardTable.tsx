'use client'

import { SimpleGrid, Card, CardBody, CardHeader, Heading, Text, Link, HStack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

interface CardTableProps {
  html: string
}

export function CardTable({ html }: CardTableProps) {
  // Parse the HTML table using regex (works in SSR)
  const rowMatches = html.match(/<tr>[\s\S]*?<\/tr>/g) || []
  
  const cards = rowMatches.slice(1).map((row) => {
    // Extract cells
    const cellMatches = row.match(/<td[^>]*>([\s\S]*?)<\/td>/g)
    if (!cellMatches || cellMatches.length < 2) return null
    
    // Extract text content from first cell (title) - get everything between > and </td>
    const firstCell = cellMatches[0]
    const titleContent = firstCell.replace(/<td[^>]*>/, '').replace(/<\/td>/, '')
    const title = titleContent.replace(/<[^>]+>/g, '').trim()
    
    // Extract text content from second cell (description)
    const secondCell = cellMatches[1]
    const descContent = secondCell.replace(/<td[^>]*>/, '').replace(/<\/td>/, '')
    const description = descContent.replace(/<[^>]+>/g, '').trim()
    
    // Extract link from third cell or second cell
    const linkMatch = cellMatches[2]?.match(/href="([^"]+)"/) || cellMatches[1]?.match(/href="([^"]+)"/)
    let href = linkMatch ? linkMatch[1] : ''
    
    // Convert relative paths to absolute paths
    if (href && !href.startsWith('http') && !href.startsWith('/')) {
      if (href.endsWith('.md')) {
        href = `/${href.replace(/\.md$/, '')}`
      } else if (href.endsWith('/')) {
        href = `/${href.slice(0, -1)}`
      } else {
        href = `/${href}`
      }
    } else if (href && href.startsWith('/docs')) {
      // Remove /docs prefix if present
      href = href.replace(/^\/docs/, '') || '/'
    } else if (!href) {
      href = ''
    }
    
    return { title, description, href }
  }).filter(Boolean) as Array<{ title: string; description: string; href: string }>

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} my={6}>
      {cards.map((card, index) => (
        <Card
          key={index}
          bg="white"
          color="gray.900"
          borderRadius="md"
          border="1px"
          borderColor="gray.200"
          boxShadow="sm"
          _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
          transition="all 0.2s"
        >
          <CardHeader pb={2}>
            {card.title && (
              <Heading size="md" color="gray.900" fontWeight="bold">
                {card.title}
              </Heading>
            )}
          </CardHeader>
          <CardBody pt={0}>
            <Text mb={4} color="gray.600" fontSize="sm" lineHeight="tall">
              {card.description}
            </Text>
            {card.href && (
              <Link
                as={card.href.startsWith('http') ? undefined : NextLink}
                href={card.href}
                color="blue.500"
                fontWeight="medium"
                fontSize="sm"
                textDecoration="underline"
                isExternal={card.href.startsWith('http')}
                _hover={{ color: 'blue.600' }}
              >
                <HStack as="span" display="inline-flex" spacing={1} alignItems="center">
                  <span>Learn more</span>
                  {card.href.startsWith('http') ? (
                    <ExternalLinkIcon boxSize={3} />
                  ) : (
                    <span>→</span>
                  )}
                </HStack>
              </Link>
            )}
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  )
}

