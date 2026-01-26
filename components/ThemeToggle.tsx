'use client'

import { useState, useEffect } from 'react'
import { HStack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

type ColorMode = 'light' | 'dark' | 'system'

export function ThemeToggle() {
  const { colorMode, setColorMode: setChakraColorMode } = useColorMode()
  const [mode, setMode] = useState<ColorMode>('light')

  const getSystemPreference = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('colorMode') as ColorMode | null
    if (savedMode) {
      setMode(savedMode)
      if (savedMode === 'system') {
        setChakraColorMode(getSystemPreference())
      } else {
        setChakraColorMode(savedMode)
      }
    }
  }, [setChakraColorMode])

  useEffect(() => {
    if (mode !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setChakraColorMode(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mode, setChakraColorMode])

  const handleModeChange = (newMode: ColorMode) => {
    setMode(newMode)
    localStorage.setItem('colorMode', newMode)
    
    if (newMode === 'system') {
      setChakraColorMode(getSystemPreference())
    } else {
      setChakraColorMode(newMode)
    }
  }

  const getActiveMode = (): 'light' | 'dark' => {
    if (mode === 'system') {
      return getSystemPreference()
    }
    return mode
  }

  const activeMode = getActiveMode()
  const inactiveColor = useColorModeValue('gray.400', 'gray.500')
  const accentColor = '#E59636' // accent.primary from colors.ts

  return (
    <HStack spacing={1} justify="center">
      <IconButton
        aria-label="Light mode"
        icon={<SunIcon />}
        onClick={() => handleModeChange('light')}
        variant="ghost"
        size="sm"
        color={mode === 'light' ? accentColor : inactiveColor}
        bg={mode === 'light' ? 'rgba(229, 150, 54, 0.1)' : 'transparent'}
        _hover={{
          bg: mode === 'light' ? 'rgba(229, 150, 54, 0.1)' : 'gray.100',
        }}
        _dark={{
          _hover: {
            bg: mode === 'light' ? 'rgba(229, 150, 54, 0.2)' : 'gray.700',
          },
        }}
      />
      <IconButton
        aria-label="System mode"
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5C2 3.67157 2.67157 3 3.5 3H12.5C13.3284 3 14 3.67157 14 4.5V10.5C14 11.3284 13.3284 12 12.5 12H3.5C2.67157 12 2 11.3284 2 10.5V4.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12.5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12.5V13.5C6 14.0523 6.44772 14.5 7 14.5H9C9.55228 14.5 10 14.0523 10 13.5V12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        onClick={() => handleModeChange('system')}
        variant="ghost"
        size="sm"
        color={mode === 'system' ? accentColor : inactiveColor}
        bg={mode === 'system' ? 'rgba(229, 150, 54, 0.1)' : 'transparent'}
        _hover={{
          bg: mode === 'system' ? 'rgba(229, 150, 54, 0.1)' : 'gray.100',
        }}
        _dark={{
          _hover: {
            bg: mode === 'system' ? 'rgba(229, 150, 54, 0.2)' : 'gray.700',
          },
        }}
      />
      <IconButton
        aria-label="Dark mode"
        icon={<MoonIcon />}
        onClick={() => handleModeChange('dark')}
        variant="ghost"
        size="sm"
        color={mode === 'dark' ? accentColor : inactiveColor}
        bg={mode === 'dark' ? 'rgba(229, 150, 54, 0.1)' : 'transparent'}
        _hover={{
          bg: mode === 'dark' ? 'rgba(229, 150, 54, 0.1)' : 'gray.100',
        }}
        _dark={{
          _hover: {
            bg: mode === 'dark' ? 'rgba(229, 150, 54, 0.2)' : 'gray.700',
          },
        }}
      />
    </HStack>
  )
}
