import { Box, Heading, HStack, Badge } from '@chakra-ui/react'

interface TechnologiesCarouselProps {
  items: string[]
  title?: string
}

const TechnologiesCarousel = ({ items, title = 'Technologies connues' }: TechnologiesCarouselProps) => {
  return (
    <Box bg="white" borderRadius="lg" boxShadow="md" p={4} border="1px solid" borderColor="gray.200">
      <Heading as="h3" size="md" color="gray.700" mb={3}>{title}</Heading>
      <HStack gap={3} flexWrap="wrap">
        {items.map((tech) => (
          <Badge key={tech} variant="subtle" fontSize="sm" bg="sage.100" color="sage.700" px={3} py={2} borderRadius="md">
            {tech}
          </Badge>
        ))}
      </HStack>
    </Box>
  )
}

export default TechnologiesCarousel
