import { Box, Flex, Button, HStack, useDisclosure, Menu, useMediaQuery } from '@chakra-ui/react'
import { IoMenu, IoClose } from 'react-icons/io5'

interface MenuPortfolioProps {
  activeSection?: string;
  scrollToSection: (section: string) => void;
}

const MenuPortfolio = ({ activeSection = 'accueil', scrollToSection }: MenuPortfolioProps) => {
  const { open: isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery(['(min-width: 768px)'], { ssr: false })

  const sections = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'competences', label: 'Compétences' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'projets', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleSectionClick = (section: string) => {
    scrollToSection(section);
    onClose();
  };

  return (
    <Box 
      as="nav" 
      id="site-nav"
      position="fixed" 
      top="0" 
      w="100%" 
      bg="white/90" 
      backdropFilter="blur(12px)"
      boxShadow="sm" 
      zIndex="50"
      borderBottom="1px"
      borderBottomColor="gray.100"
    >
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 10 }}>
        <Flex justify="space-between" align="center" h="20" gap="4">
          {/* Logo */}
          <Box 
            fontSize="xl" 
            fontWeight="800" 
            bgGradient="linear(to-r, sage.600, sage.700)" 
            bgClip="text"
            color="transparent"
            flexShrink={0}
            letterSpacing="-0.02em"
          >
            Portfolio Romy Chauvière
          </Box>

          {/* Menu Desktop */}
          {isDesktop && (
            <HStack gap="2" ml="auto">
              {sections.map(section => (
                <Button
                  key={section.id}
                  variant="ghost"
                  onClick={() => handleSectionClick(section.id)}
                  fontSize="sm"
                  fontWeight={activeSection === section.id ? '700' : '600'}
                  color={activeSection === section.id ? 'sage.700' : 'gray.600'}
                  position="relative"
                  _hover={{ color: 'sage.700', bg: 'sage.50' }}
                  borderRadius="md"
                  px={4}
                  borderBottomWidth={activeSection === section.id ? '3px' : '0px'}
                  borderBottomColor="sage.600"
                  borderBottomRadius="0"
                >
                  {section.label}
                </Button>
              ))}
            </HStack>
          )}

          {/* Burger Menu Mobile */}
          {!isDesktop && (
            <Menu.Root open={isOpen} onOpenChange={(details) => {
              if (!details.open) onClose()
            }}>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  onClick={isOpen ? onClose : onOpen}
                  p="2"
                  _hover={{ bg: 'gray.100' }}
                  ml="auto"
                >
                  {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </Button>
              </Menu.Trigger>
              <Menu.Content>
                <Menu.ItemGroup>
                  {sections.map(section => (
                    <Menu.Item
                      key={section.id}
                      value={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      color={activeSection === section.id ? 'sage.600' : 'gray.700'}
                      fontWeight={activeSection === section.id ? 'bold' : 'medium'}
                      bg={activeSection === section.id ? 'sage.50' : 'white'}
                      _hover={{ bg: 'gray.50', color: 'sage.600' }}
                      borderLeftWidth={activeSection === section.id ? '4px' : '0px'}
                      borderLeftColor="sage.600"
                      paddingLeft={activeSection === section.id ? '3' : '4'}
                    >
                      {section.label}
                    </Menu.Item>
                  ))}
                </Menu.ItemGroup>
              </Menu.Content>
            </Menu.Root>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default MenuPortfolio;
