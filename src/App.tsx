import { useState } from 'react'
import { Box, Container, SimpleGrid, VStack, HStack, Text, Heading, Image, Button, Input, Textarea, Badge, Flex, Link } from '@chakra-ui/react'
import { CONFIG } from '@/data/portfolio_data.ts'
import type { Competence, Projet } from './types/portfolio_types';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import MenuPortfolio from '@/components/menu.tsx';

const Portfolio = () => {

  const [activeSection, setActiveSection] = useState('accueil');
  
  // États pour le formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  // Fonction pour obtenir les projets liés à une compétence
  const getProjetsParCompetence = (compId: Competence['id']) => {
    return CONFIG.projets.filter(p => p.competences.includes(compId));
  };

  // Fonction pour obtenir les compétences liées à un projet
  const getCompetencesParProjet = (projet: Projet) => {
    return CONFIG.competences.filter(c => projet.competences.includes(c.id));
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Gestion du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connecter avec EmailJS, Formspree ou votre backend
    console.log('Form data:', formData);
    alert('Merci pour votre message ! Formulaire à connecter avec un service d\'envoi.');
    // Réinitialiser le formulaire
    setFormData({ nom: '', email: '', message: '' });
  };

  // Regroupement des projets par catégorie
  const projetsProfessionnels = CONFIG.projets.filter(p => p.categorie === 'professionnel');
  const projetsScolaires = CONFIG.projets.filter(p => p.categorie === 'scolaire' || p.categorie === 'personnel' || !p.categorie);

  const renderProjectInner = (projet: Projet) => (
    <Flex direction={{ base: 'column', md: 'row' }}>
      <Box flex={{ md: '0 0 40%' }} overflow="hidden">
        <Image 
          src={projet.image} 
          alt={projet.titre}
          w="full"
          h={{ base: 64, md: 'full' }}
          objectFit="cover"
        />
      </Box>
      <Box flex={{ md: '0 0 60%' }} p={6}>
        <Heading as="h3" size="lg" color="gray.600" mb={3}>
          {projet.titre}
        </Heading>
        <Text color="gray.700" mb={4}>
          {projet.description}
        </Text>
        
        <Box color="gray.600" mb={4}>
          <Heading as="h4" size="sm" color="gray.600" mb={2}>
            Contexte du projet
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} fontSize="sm">
            <Box>
              <Text fontWeight="medium" display="inline">Client:</Text> {projet.contexte.client}
            </Box>
            <Box>
              <Text fontWeight="medium" display="inline">Besoin:</Text> {projet.contexte.besoin}
            </Box>
            <Box gridColumn={{ md: 'span 2' }}>
              <Text fontWeight="medium" display="inline">Solution:</Text> {projet.contexte.solution}
            </Box>
            <Box gridColumn={{ md: 'span 2' }}>
              <Text fontWeight="medium" display="inline">Résultat:</Text> {projet.contexte.resultat}
            </Box>
          </SimpleGrid>
        </Box>

        <Box mb={4}>
          <Heading as="h4" size="sm" color="gray.600" mb={2}>
            Technologies
          </Heading>
          <HStack flexWrap="wrap" gap={2}>
            {projet.technos.map(tech => (
              <Badge key={tech} colorScheme="sage">
                {tech}
              </Badge>
            ))}
          </HStack>
        </Box>

        <Box mb={4}>
          <Heading as="h4" size="sm" color="gray.600" mb={2}>
            Compétences mobilisées
          </Heading>
          <HStack flexWrap="wrap" color="gray.800" gap={2}>
            {getCompetencesParProjet(projet).map(comp => (
              <Button
                key={comp.id}
                onClick={() => {
                  scrollToSection('competences');
                }}
                size="sm"
                variant="outline"
                title={comp.titre}
              >
                {comp.titre.length > 35 
                  ? `${comp.titre.substring(0, 35)}...` 
                  : comp.titre
                }
              </Button>
            ))}
          </HStack>
        </Box>

        <HStack gap={3} flexWrap="wrap">
          {projet.lienGithub && (
            <a href={projet.lienGithub} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button colorScheme="gray">
                <FaGithub /> Code
              </Button>
            </a>
          )}
          {projet.lienDemo && (
            <a href={projet.lienDemo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button colorScheme="blue">
                <FaExternalLinkAlt /> Démo
              </Button>
            </a>
          )}
        </HStack>
      </Box>
    </Flex>
  );

  return (
    <>
      <MenuPortfolio 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      {/* 🏠 Section Accueil */}
      <Box as="section" pt={{ base: 24, md: 28 }} pb={16} px={4} color="gray.800" backgroundColor="sage.400">
        <Container maxW="6xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={12}>
            <Box flex={{ md: '0 0 33%' }}>
              <Image 
                src={CONFIG.photo} 
                alt={CONFIG.nom}
                w="64"
                h="64"
                borderRadius="full"
                objectFit="cover"
                boxShadow="xl"
                border="4px solid white"
                mx="auto"
              />
            </Box>
            <VStack flex={{ md: '0 0 67%' }} align={{ base: 'center', md: 'start' }} gap={6}>
              <Heading as="h1" id="accueil" size="2xl" textAlign={{ base: 'center', md: 'left' }} scrollMarginTop="24">
                {CONFIG.nom}
              </Heading>
              <Text fontSize="xl" color="gray.800" textAlign={{ base: 'center', md: 'left' }}>
                {CONFIG.titre}
              </Text>
              <Heading as="h2" size="lg" color="gray.700" textAlign={{ base: 'center', md: 'left' }}>
                {CONFIG.presentation.accroche}
              </Heading>
              <Text fontSize="lg" color="gray.600" textAlign={{ base: 'center', md: 'left' }} lineHeight="relaxed">
                {CONFIG.presentation.description}
              </Text>
              <HStack gap={4} justify={{ base: 'center', md: 'start' }}>
                <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
                  <Button p={3} bg="gray.800" color="white" borderRadius="full" _hover={{ bg: 'gray.700' }}>
                    <FaGithub size={24} />
                  </Button>
                </a>
                <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button p={3} bg="sage.700" color="white" borderRadius="full" _hover={{ bg: 'sage.600' }}>
                    <FaLinkedin size={24} />
                  </Button>
                </a>
                <a href={`mailto:${CONFIG.email}`}>
                  <Button p={3} bg="green.600" color="white" borderRadius="full" _hover={{ bg: 'green.700' }}>
                    <FaEnvelope size={24} />
                  </Button>
                </a>
              </HStack>
            </VStack>
          </Flex>
          <Flex justify="center" mt={12}>
            <Box as={MdKeyboardArrowDown} fontSize="4xl" color="gray.400" animation="bounce 1s infinite" />
          </Flex>
        </Container>
      </Box>

      {/* 🎯 Section Compétences */}
      <Box as="section" py={16} px={4} bg="white">
        <Container maxW="6xl">
          <Heading as="h2" id="competences" size="xl" textAlign="center" color="gray.600" mb={12} scrollMarginTop="24">
            Mes Compétences
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {CONFIG.competences.map(comp => (
              <Box 
                key={comp.id}
                border="2px solid"
                borderColor={comp.color}
                borderRadius="lg"
                p={6}
                _hover={{ boxShadow: 'lg' }}
                transition="all"
                cursor="pointer"
              >
                <Heading as="h3" size="md" color="gray.600" mb={2}>
                  {comp.titre}
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={3}>
                  {comp.description}
                </Text>
                <HStack mb={4} gap={2}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Niveau:
                  </Text>
                  <Badge 
                    colorScheme={
                      comp.niveau === 'Maîtrisé' ? 'green' :
                      comp.niveau === 'Avancé' ? 'sage' :
                      'yellow'
                    }
                  >
                    {comp.niveau}
                  </Badge>
                </HStack>
                <HStack flexWrap="wrap" gap={2} mb={4}>
                  {comp.technos.map(tech => (
                    <Badge key={tech} variant="subtle" fontSize="xs">
                      {tech}
                    </Badge>
                  ))}
                </HStack>
                <Text fontSize="sm" color="sage.500" fontWeight="medium">
                  → {getProjetsParCompetence(comp.id).length} projet(s) lié(s)
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 📁 Section Projets */}
      <Box as="section" py={16} px={4} bg="gray.50">
        <Container maxW="6xl">
          <Heading as="h2" id="projets" size="xl" textAlign="center" color="gray.600" mb={12} scrollMarginTop="24">
            Mes Projets
          </Heading>
          <VStack gap={8}>
            {projetsProfessionnels.length > 0 && (
              <Box w="full">
                <Heading as="h3" size="lg" color="gray.600" mb={4}>
                  Expériences professionnelles
                </Heading>
                <VStack gap={6}>
                  {projetsProfessionnels.map(projet => (
                    <Box key={projet.id} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
                      {renderProjectInner(projet)}
                    </Box>
                  ))}
                </VStack>
              </Box>
            )}

            {projetsScolaires.length > 0 && (
              <Box w="full">
                <Heading as="h3" size="lg" color="gray.600" mb={4}>
                  Projets scolaires & personnels
                </Heading>
                <VStack gap={6}>
                  {projetsScolaires.map(projet => (
                    <Box key={projet.id} bg="white" borderRadius="lg" overflow="hidden" boxShadow="md">
                      {renderProjectInner(projet)}
                    </Box>
                  ))}
                </VStack>
              </Box>
            )}
          </VStack>
        </Container>
      </Box>

      {/* 📧 Section Contact */}
      <Box as="section" py={16} px={4} bg="white" color="gray.600">
        <Container maxW="3xl">
          <Heading as="h2" id="contact" size="xl" textAlign="center" mb={12} scrollMarginTop="24">
            Me Contacter
          </Heading>
          <VStack gap={6} mb={12}>
            <Box w="full">
              <Text mb={2} fontWeight="medium">Nom complet</Text>
              <Input 
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                placeholder="Votre nom"
              />
            </Box>
            <Box w="full">
              <Text mb={2} fontWeight="medium">Email</Text>
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre.email@exemple.fr"
              />
            </Box>
            <Box w="full">
              <Text mb={2} fontWeight="medium">Message</Text>
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Votre message..."
              />
            </Box>
            <Button 
              onClick={handleSubmit}
              w="full"
              colorScheme="sage"
              size="lg"
              borderColor={"gray.600"}
            >
              Envoyer le message
            </Button>
          </VStack>
          
          <Box borderTop="1px" borderColor="gray.200" />
          
          <VStack gap={4} mt={12}>
            <Text color="gray.600">Ou contactez-moi directement :</Text>
            <HStack gap={6} justify="center" flexWrap="wrap">
              <Link href={`mailto:${CONFIG.email}`} color="sage.500">
                {CONFIG.email}
              </Link>
              <Link href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" color="sage.500">
                LinkedIn
              </Link>
              <Link href={CONFIG.github} target="_blank" rel="noopener noreferrer" color="sage.500">
                GitHub
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* 👣 Footer */}
      <Box as="footer" bg="gray.900" color="white" py={8} px={4}>
        <Container maxW="6xl" textAlign="center">
          <Text>© 2025 {CONFIG.nom} - Portfolio BUT Informatique</Text>
          <Text fontSize="sm" color="gray.400" mt={2}>
            Développé avec React, TypeScript & Chakra UI
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Portfolio;