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
import { extractHeadings } from '@/lib/extractHeadings'

interface MarkdownContentProps {
  content: string
  hideFirstHeading?: boolean
}

export function MarkdownContent({ content, hideFirstHeading }: MarkdownContentProps) {
  // Extract headings and create ID map
  const headings = extractHeadings(content)
  const headingIdMap = new Map<string, string>()
  headings.forEach((heading) => {
    // Use the cleaned text (already has HTML stripped) for the map key
    headingIdMap.set(`${heading.level}:${heading.text}`, heading.id)
  })
  
  // Helper to generate ID from text (same logic as extractHeadings)
  const generateId = (text: string) => {
    return text
      .toLowerCase()
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&#x20;/g, ' ') // Decode HTML entities
      .replace(/&#160;/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#32;/g, ' ')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }
  
  // Helper to extract text from React children (handles images and other elements)
  const extractTextFromChildren = (children: any): string => {
    let text = ''
    if (typeof children === 'string') {
      text = children
    } else if (Array.isArray(children)) {
      text = children
        .map((child) => {
          if (typeof child === 'string') {
            return child
          }
          if (typeof child === 'object' && child?.props?.children) {
            return extractTextFromChildren(child.props.children)
          }
          return ''
        })
        .join(' ')
    } else if (typeof children === 'object' && children?.props?.children) {
      text = extractTextFromChildren(children.props.children)
    } else {
      text = String(children)
    }
    
    // Clean up: remove HTML tags, normalize whitespace, decode entities
    return text
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/&#x20;/g, ' ') // Decode HTML entities
      .replace(/&#160;/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#32;/g, ' ')
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()
  }

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
              h1: ({ node, children, ...props }: any) => {
                // Extract text content, handling React elements (like images) and HTML
                const text = extractTextFromChildren(children)
                const id = headingIdMap.get(`1:${text}`) || generateId(text)
                return (
                  <Heading as="h1" id={id} size="xl" mb={4} mt={8} {...props}>
                    {children}
                  </Heading>
                )
              },
              h2: ({ node, children, ...props }: any) => {
                // Extract text content, handling React elements (like images) and HTML
                const text = extractTextFromChildren(children)
                const id = headingIdMap.get(`2:${text}`) || generateId(text)
                return (
                  <Heading as="h2" id={id} size="lg" mb={3} mt={6} {...props}>
                    {children}
                  </Heading>
                )
              },
              h3: ({ node, children, ...props }: any) => {
                // Extract text content, handling React elements (like images) and HTML
                const text = extractTextFromChildren(children)
                const id = headingIdMap.get(`3:${text}`) || generateId(text)
                return (
                  <Heading as="h3" id={id} size="md" mb={2} mt={4} {...props}>
                    {children}
                  </Heading>
                )
              },
              h4: ({ node, children, ...props }: any) => {
                // Extract text content, handling React elements (like images) and HTML
                const text = extractTextFromChildren(children)
                const id = headingIdMap.get(`4:${text}`) || generateId(text)
                return (
                  <Heading as="h4" id={id} size="sm" mb={2} mt={3} {...props}>
                    {children}
                  </Heading>
                )
              },
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
                <TableContainer mb={4} overflowX="auto" maxW="100%">
                  <Table variant="simple" size={{ base: 'sm', md: 'md' }} {...props} />
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
