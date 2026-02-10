'use client'

import { Box, HStack, Image, IconButton, useDisclosure, useColorMode } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Search } from './Search'
import colors from '@/theme/colors'

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  
  return (
    <Box
      as="header"
      bg={themeColors.nav.bg}
      borderBottom="1px"
      borderColor={themeColors.borderColor}
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
          src={colorMode === "dark" ? "/images/logo_light.avif" : "/images/logo.avif"}
          alt="Persistence Docs"
          height={{ base: '32px', md: '40px' }}
          objectFit="contain"
        />
      </HStack>
      <Search />
    </Box>
  )
}

