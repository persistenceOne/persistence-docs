import { Box, Container, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import colors from '@/theme/colors'

export default function NotFound() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bg={themeColors.body.bg}>
      <Container>
        <VStack spacing={4} textAlign="center">
          <Heading size="2xl" color={themeColors.text[700]}>404</Heading>
          <Text fontSize="xl" color={themeColors.text[500]}>
            Page not found
          </Text>
          <Text color={themeColors.text[400]}>
            The page you&#39;re looking for doesn&#39;t exist.
          </Text>
          <Button as={Link} href="/docs" colorScheme="blue">
            Go to Documentation
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}


