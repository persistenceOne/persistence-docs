import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
      <Container>
        <VStack spacing={4} textAlign="center">
          <Heading size="2xl">404</Heading>
          <Text fontSize="xl" color="gray.600">
            Page not found
          </Text>
          <Text color="gray.500">
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


