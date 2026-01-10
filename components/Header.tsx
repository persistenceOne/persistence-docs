'use client'

import { Box, HStack, Image, IconButton, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Search } from './Search'

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      px={{ base: 4, md: 8 }}
      py={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexShrink={0}
      zIndex={1000}
    >
      <HStack spacing={4}>
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: 'flex', lg: 'none' }}
          onClick={onMenuClick}
        />
        <Image
          src="/images/logo.avif"
          alt="Persistence Docs"
          height={{ base: '32px', md: '40px' }}
          objectFit="contain"
        />
      </HStack>
      <Search />
    </Box>
  )
}

