'use client'

import { Box, HStack, Image } from '@chakra-ui/react'
import { Search } from './Search'

export function Header() {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      px={8}
      py={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexShrink={0}
      zIndex={1000}
    >
      <Image
        src="/images/logo.avif"
        alt="Persistence Docs"
        height="40px"
        objectFit="contain"
      />
      <Search />
    </Box>
  )
}

