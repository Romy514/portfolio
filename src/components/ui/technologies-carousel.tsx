import { Box, Heading, HStack, Badge } from '@chakra-ui/react'

interface TechnologiesCarouselProps {
  items: string[]
  title?: string
}

const TechnologiesCarousel = ({ items, title = 'Technologies connues' }: TechnologiesCarouselProps) => {
  return (
    <Box 
      bg="white" 
      borderRadius="xl" 
      boxShadow="md" 
      p={6} 
      border="1px solid" 
      borderColor="gray.200"
    >
      <Heading as="h3" size="md" color="gray.900" mb={6} fontWeight="700">{title}</Heading>
      <HStack gap={3} flexWrap="wrap" justify="center">
        {items.map((tech) => (
          <Badge 
            key={tech} 
            variant="subtle" 
            fontSize="sm" 
            bg="sage.50" 
            color="sage.800" 
            px={4} 
            py={2} 
            borderRadius="full"
            fontWeight="600"
            border="1px solid"
            borderColor="sage.200"
            _hover={{ 
              bg: 'sage.100', 
              transform: 'translateY(-2px)',
              boxShadow: 'sm'
            }}
            transition="all 0.2s"
            cursor="default"
          >
            {tech}
          </Badge>
        ))}
      </HStack>
    </Box>
  )
}

export default TechnologiesCarousel
