import { Box, SimpleGrid, VStack, Text, Icon } from '@chakra-ui/react'
import type { Technology } from '@/types/portfolio_types';
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

interface TechnologiesCarouselProps {
  items: Technology[]
}

const TechnologiesCarousel = ({ items }: TechnologiesCarouselProps) => {
  // Helper to dynamically get icon component
  const getIcon = (iconName: string) => {
    // @ts-ignore
    const IconComponent = FaIcons[iconName] || SiIcons[iconName];
    return IconComponent ? <IconComponent size={32} /> : null;
  };

  return (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={8}>
      {items.map((tech) => (
        <VStack 
          key={tech.name}
          bg="white" 
          p={6} 
          borderRadius="xl" 
          boxShadow="sm"
          border="1px solid"
          borderColor="gray.100"
          transition="all 0.2s"
          _hover={{ 
            transform: 'translateY(-4px)',
            boxShadow: 'md',
            borderColor: 'primary.200'
          }}
        >
          <Box color="primary.500" mb={2}>
            {getIcon(tech.icon)}
          </Box>
          <Text fontWeight="600" color="gray.700" fontSize="sm">
            {tech.name}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  )
}

export default TechnologiesCarousel;

