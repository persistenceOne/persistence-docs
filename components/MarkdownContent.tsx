'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {
  Box,
  Heading,
  Text,
  Code,
  Link,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Alert,
  AlertIcon,
  Image,
  Divider,
} from '@chakra-ui/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import NextLink from 'next/link'
import { CardTable } from './CardTable'
import { Embed } from './Embed'

interface MarkdownContentProps {
  content: string
  hideFirstHeading?: boolean
}

export function MarkdownContent({ content, hideFirstHeading }: MarkdownContentProps) {
  // Remove first h1 if hideFirstHeading is true
  let processedContent = content
  if (hideFirstHeading) {
    processedContent = processedContent.replace(/^#\s+.+$/m, '')
  }

  // Extract card tables and replace with placeholders
  const cardTables: string[] = []
  processedContent = processedContent.replace(
    /<table data-view="cards">[\s\S]*?<\/table>/g,
    (match) => {
      const index = cardTables.length
      cardTables.push(match)
      return `\n\n__CARD_TABLE_${index}__\n\n`
    }
  )

  // Extract embed containers and replace with placeholders
  const embeds: string[] = []
  processedContent = processedContent.replace(
    /<div class="embed-container">[\s\S]*?<\/div>/g,
    (match) => {
      const index = embeds.length
      embeds.push(match)
      return `\n\n__EMBED_${index}__\n\n`
    }
  )

  // Split content by placeholders
  const parts = processedContent.split(/(__CARD_TABLE_\d+__|__EMBED_\d+__)/)
  
  return (
    <Box>
      {parts.map((part, index) => {
        const cardMatch = part.match(/^__CARD_TABLE_(\d+)__$/)
        if (cardMatch) {
          const tableIndex = parseInt(cardMatch[1])
          return <CardTable key={`card-${tableIndex}`} html={cardTables[tableIndex]} />
        }
        const embedMatch = part.match(/^__EMBED_(\d+)__$/)
        if (embedMatch) {
          const embedIndex = parseInt(embedMatch[1])
          return <Embed key={`embed-${embedIndex}`} html={embeds[embedIndex]} />
        }
        if (!part.trim()) {
          return null
        }
        return (
          <ReactMarkdown
            key={`md-${index}`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }: any) => (
                <Heading as="h1" size="xl" mb={4} mt={8} {...props} />
              ),
              h2: ({ node, ...props }) => (
                <Heading as="h2" size="lg" mb={3} mt={6} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <Heading as="h3" size="md" mb={2} mt={4} {...props} />
              ),
              h4: ({ node, ...props }) => (
                <Heading as="h4" size="sm" mb={2} mt={3} {...props} />
              ),
              p: ({ node, ...props }) => <Text mb={4} lineHeight="tall" {...props} />,
              a: ({ node, href, ...props }: any) => {
                const isExternal = href?.startsWith('http')
                const isInternal = href?.startsWith('/') && !href?.startsWith('http')
                if (isInternal) {
                  return (
                    <Link as={NextLink} href={href} color="blue.500" {...props} />
                  )
                }
                return (
                  <Link color="blue.500" isExternal={isExternal} href={href} {...props} />
                )
              },
              ul: ({ node, ...props }) => <UnorderedList mb={4} {...props} />,
              ol: ({ node, ...props }) => <OrderedList mb={4} {...props} />,
              li: ({ node, ...props }) => <ListItem {...props} />,
              code: ({ node, inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || '')
                const codeString = String(children).replace(/\n$/, '')
                
                if (!inline && match) {
                  return (
                    <Box my={4} borderRadius="md" overflow="hidden">
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0 }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </Box>
                  )
                }
                
                return (
                  <Code
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="sm"
                    bg="gray.100"
                    color="gray.800"
                    {...props}
                  >
                    {codeString}
                  </Code>
                )
              },
              table: ({ node, ...props }) => (
                <TableContainer mb={4}>
                  <Table variant="simple" {...props} />
                </TableContainer>
              ),
              thead: ({ node, ...props }) => <Thead {...props} />,
              tbody: ({ node, ...props }) => <Tbody {...props} />,
              tr: ({ node, ...props }) => <Tr {...props} />,
              th: ({ node, ...props }) => <Th {...props} />,
              td: ({ node, ...props }) => <Td {...props} />,
              img: ({ node, src, alt, ...props }: any) => {
                // Ensure image paths are correct
                let imageSrc = src || ''
                if (imageSrc.startsWith('/images/')) {
                  // Already correct
                } else if (imageSrc.includes('.gitbook/assets')) {
                  // Extract image name and use /images/ path
                  const imageName = imageSrc.split('/').pop()
                  imageSrc = `/images/${imageName}`
                }
                
                return (
                  <Image
                    mb={4}
                    borderRadius="md"
                    maxW="100%"
                    src={imageSrc}
                    alt={alt || ''}
                    {...props}
                  />
                )
              },
              hr: ({ node, ...props }) => <Divider my={6} {...props} />,
              blockquote: ({ node, ...props }: any) => {
                const content = String(props.children)
                const isInfo = content.includes('ℹ️') || content.includes('info')
                const isSuccess = content.includes('✅') || content.includes('success')
                const isWarning = content.includes('⚠️') || content.includes('warning')
                const isDanger = content.includes('❌') || content.includes('danger')
                
                let status: 'info' | 'success' | 'warning' | 'error' = 'info'
                if (isSuccess) status = 'success'
                else if (isWarning) status = 'warning'
                else if (isDanger) status = 'error'
                
                return (
                  <Alert status={status} variant="left-accent" mb={4}>
                    <AlertIcon />
                    <Box>{props.children}</Box>
                  </Alert>
                )
              },
            }}
          >
            {part}
          </ReactMarkdown>
        )
      })}
    </Box>
  )
}
