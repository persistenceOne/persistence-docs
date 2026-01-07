'use client'

import { Box } from '@chakra-ui/react'

interface EmbedProps {
  html: string
}

export function Embed({ html }: EmbedProps) {
  // Extract iframe src from HTML
  const iframeMatch = html.match(/<iframe[^>]+src="([^"]+)"[^>]*>/)
  if (!iframeMatch) return null

  const src = iframeMatch[1]
  const isYouTube = src.includes('youtube.com/embed')

  return (
    <Box
      my={6}
      position="relative"
      paddingBottom={isYouTube ? '56.25%' : '400px'}
      height={0}
      overflow="hidden"
      maxW="100%"
      borderRadius="md"
      boxShadow="md"
    >
      <Box
        as="iframe"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        borderRadius="md"
      />
    </Box>
  )
}


