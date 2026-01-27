import { useState, useEffect } from 'react'
import { Box, Container, SimpleGrid, VStack, HStack, Text, Heading, Image, Button, Input, Textarea, Badge, Flex, Link, DialogRoot, DialogContent, DialogHeader, DialogBody, DialogFooter, DialogCloseTrigger, DialogBackdrop, DialogPositioner } from '@chakra-ui/react'
import { CONFIG } from '@/data/portfolio_data.ts'
import type { Competence, Projet } from './types/portfolio_types';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import MenuPortfolio from '@/components/menu.tsx';
import TechnologiesCarousel from '@/components/ui/technologies-carousel.tsx';

const Portfolio = () => {

  const [activeSection, setActiveSection] = useState('accueil');
  const [selectedCompetenceModal, setSelectedCompetenceModal] = useState<Competence | null>(null);
  const [selectedCompetence, setSelectedCompetence] = useState<Competence['id'] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Observer pour détecter la section visible lors du scroll
  useEffect(() => {
    const sections = ['accueil', 'competences', 'technologies', 'projets', 'contact'];
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { 
          rootMargin: '-100px 0px -60% 0px',
          threshold: 0
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  
  // États pour le formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  // Fonction pour ouvrir le modal d'une compétence
  const openCompetenceModal = (comp: Competence) => {
    setSelectedCompetenceModal(comp);
    setIsDialogOpen(true);
  };

  const closeCompetenceModal = () => {
    setIsDialogOpen(false);
  };

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

  const handleSelectCompetence = (compId: Competence['id'] | null) => {
    setSelectedCompetence(compId);
    scrollToSection('projets');
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
  const filteredProjets = selectedCompetence
    ? CONFIG.projets.filter(p => p.competences.includes(selectedCompetence))
    : CONFIG.projets;
  const projetsProfessionnels = filteredProjets.filter(p => p.categorie === 'professionnel');
  const projetsScolaires = filteredProjets.filter(p => p.categorie === 'scolaire' || p.categorie === 'personnel' || !p.categorie);

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
        <Heading as="h3" size="lg" color="gray.700" mb={3}>
          {projet.titre}
        </Heading>
        <Text color="gray.700" mb={4}>
          {projet.description}
        </Text>
        
        <Box color="gray.700" mb={4}>
          <Heading as="h4" size="sm" color="gray.700" mb={2}>
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
          <Heading as="h4" size="sm" color="gray.700" mb={2}>
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
          <Heading as="h4" size="sm" color="gray.700" mb={2}>
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
                color="gray.700"
                title={comp.titre}
              >
                {comp.titreCourt}
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
      <Box 
        as="section" 
        pt={{ base: 28, md: 32 }} 
        pb={20} 
        px={4} 
        bg="white"
        bgGradient="linear(to-br, white, sage.100, white)"
        position="relative"
        overflow="hidden"
      >
        {/* Subtle background pattern */}
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          right="0" 
          bottom="0" 
          opacity="0.4"
          bgImage="radial-gradient(#cbd5e1 1px, transparent 1px)"
          bgSize="32px 32px"
        />
        <Container maxW="6xl" position="relative" zIndex="1">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={16}>
            <Box flex={{ md: '0 0 35%' }}>
              <Image 
                src={CONFIG.photo} 
                alt={CONFIG.nom}
                w={{ base: 48, md: 64 }}
                h={{ base: 48, md: 64 }}
                borderRadius="full"
                objectFit="cover"
                boxShadow="2xl"
                border="6px solid white"
                mx="auto"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
            <VStack flex={{ md: '0 0 65%' }} align={{ base: 'center', md: 'start' }} gap={6}>
              <Heading 
                as="h1" 
                id="accueil" 
                size={{ base: 'xl', md: '2xl' }} 
                textAlign={{ base: 'center', md: 'left' }} 
                scrollMarginTop="24"
                color="gray.900"
                fontWeight="800"
                letterSpacing="-0.02em"
              >
                {CONFIG.nom}
              </Heading>
              <Badge 
                colorScheme="sage" 
                fontSize={{ base: 'md', md: 'lg' }} 
                px={4} 
                py={2} 
                borderRadius="full"
                fontWeight="600"
              >
                {CONFIG.titre}
              </Badge>
              <Heading 
                as="h2" 
                size={{ base: 'md', md: 'lg' }} 
                color="sage.700" 
                textAlign={{ base: 'center', md: 'left' }}
                fontWeight="700"
                lineHeight="1.3"
              >
                {CONFIG.presentation.accroche}
              </Heading>
              <Text 
                fontSize={{ base: 'md', md: 'lg' }} 
                color="gray.600" 
                textAlign={{ base: 'center', md: 'left' }} 
                lineHeight="1.8"
                maxW="2xl"
              >
                {CONFIG.presentation.description}
              </Text>
              <HStack gap={3} justify={{ base: 'center', md: 'start' }} flexWrap="wrap" pt={4}>
                <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    bg="gray.900" 
                    color="white" 
                    borderRadius="full" 
                    _hover={{ bg: 'gray.700', transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    boxShadow="md"
                  >
                    <FaGithub size={20} />
                  </Button>
                </a>
                <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    bg="blue.600" 
                    color="white" 
                    borderRadius="full" 
                    _hover={{ bg: 'blue.500', transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    boxShadow="md"
                  >
                    <FaLinkedin size={20} />
                  </Button>
                </a>
                <a href={`mailto:${CONFIG.email}`}>
                  <Button 
                    size="lg" 
                    bg="sage.600" 
                    color="white" 
                    borderRadius="full" 
                    _hover={{ bg: 'sage.500', transform: 'translateY(-2px)' }}
                    transition="all 0.3s"
                    boxShadow="md"
                  >
                    <FaEnvelope size={20} />
                  </Button>
                </a>
                {CONFIG.cv && (
                  <a href={CONFIG.cv} target="_blank" rel="noopener noreferrer">
                    <Button 
                      colorScheme="primary" 
                      size="lg"
                      fontWeight="600"
                      boxShadow="md"
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                      transition="all 0.3s"
                    >
                      📄 Télécharger mon CV
                    </Button>
                  </a>
                )}
              </HStack>
            </VStack>
          </Flex>
          <Flex justify="center" mt={16}>
            <Box as={MdKeyboardArrowDown} fontSize="5xl" color="sage.600" animation="bounce 2s infinite" />
          </Flex>
        </Container>
      </Box>

      {/* 🎯 Section Compétences */}
      <Box as="section" py={20} px={4} bg="gray.50">
        <Container maxW="6xl">
          <VStack gap={4} mb={12}>
            <Heading 
              as="h2" 
              id="competences" 
              size="2xl" 
              textAlign="center" 
              color="gray.900" 
              scrollMarginTop="24"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              Mes Compétences
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
              Une progression continue à travers mes années de BUT Informatique
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {CONFIG.competences.map(comp => {
              // Déterminer le dernier niveau disponible
              const niveauFinal = comp.evolution.but3 || comp.evolution.but2;
              const levelBut = comp.evolution.but3 ? 'but3' : 'but2';
              
              return (
                <Box 
                  key={comp.id}
                  display="flex"
                  flexDirection="column"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="xl"
                  p={6}
                  bg="white"
                  _hover={{ 
                    boxShadow: 'xl', 
                    borderColor: comp.color,
                    transform: 'translateY(-4px)'
                  }}
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                >
                  {/* Color accent bar */}
                  <Box 
                    position="absolute" 
                    top="0" 
                    left="0" 
                    right="0" 
                    h="4px" 
                    bg={comp.color}
                  />
                  <Heading as="h3" size="md" color="gray.900" mb={3} fontWeight="700" mt={2}>
                    {comp.titre}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={6} lineHeight="1.6">
                    {comp.description}
                  </Text>

                  {/* Affichage du dernier niveau */}
                  <Box 
                    borderLeft="3px solid" 
                    borderLeftColor="success.500" 
                    pl={4} 
                    py={3} 
                    bg="success.50" 
                    borderRadius="md"
                    mb={6}
                  >
                    <HStack gap={2} mb={2}>
                      <Badge colorScheme="green" fontSize="xs" fontWeight="bold" borderRadius="full" px={3}>
                        {levelBut === 'but3' ? 'BUT3 (Actuel)' : 'BUT2 (Actuel)'}
                      </Badge>
                      <Text fontSize="sm" fontWeight="bold" color="success.700">
                        {niveauFinal.niveau}
                      </Text>
                    </HStack>
                    <Text fontSize="xs" color="accent.700" lineHeight="1.5">
                      {niveauFinal.apprentissages}
                    </Text>
                  </Box>

                  {/* Bouton pour voir l'évolution dans un modal */}
                  <Button
                    onClick={() => openCompetenceModal(comp)}
                    variant="ghost"
                    size="sm"
                    w="full"
                    mb={4}
                    color="sage.700"
                    _hover={{ bg: 'sage.50' }}
                    display="flex"
                    justifyContent="center"
                    gap={2}
                    fontWeight="600"
                    transition="all 0.2s"
                    borderRadius="md"
                  >
                    <Text fontSize="sm">
                      Voir l'évolution complète
                    </Text>
                    <Box
                      as={MdKeyboardArrowDown}
                      fontSize="xl"
                    />
                  </Button>

                  <HStack flexWrap="wrap" gap={2} mb={4}>
                    {comp.technos.map(tech => (
                      <Badge 
                        key={tech} 
                        variant="subtle" 
                        fontSize="xs" 
                        bg="sage.50" 
                        color="sage.800"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                  <Button
                    variant="ghost"
                    color="sage.700"
                    size="sm"
                    onClick={() => handleSelectCompetence(comp.id)}
                    fontWeight="600"
                    _hover={{ bg: 'sage.50', color: 'sage.800' }}
                    mt="auto"
                    alignSelf="flex-start"
                    px={0}
                  >
                    → {getProjetsParCompetence(comp.id).length} projet(s) lié(s)
                  </Button>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 🧰 Section Technologies */}
      <Box as="section" py={20} px={4} bg="white">
        <Container maxW="6xl">
          <VStack gap={4} mb={12}>
            <Heading 
              as="h2" 
              id="technologies" 
              size="2xl" 
              textAlign="center" 
              color="gray.900" 
              scrollMarginTop="24"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              Technologies maîtrisées
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
              Un aperçu des langages, frameworks et outils que j'utilise au quotidien
            </Text>
          </VStack>
          <TechnologiesCarousel items={CONFIG.technologies} />
        </Container>
      </Box>

      {/* 📁 Section Projets */}
      <Box as="section" py={20} px={4} bg="gray.50">
        <Container maxW="6xl">
          <VStack gap={4} mb={12}>
            <Heading 
              as="h2" 
              id="projets" 
              size="2xl" 
              textAlign="center" 
              color="gray.900" 
              scrollMarginTop="24"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              Mes Projets
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
              Une sélection de mes réalisations académiques et professionnelles
            </Text>
          </VStack>
          <VStack gap={6} mb={10}>
            <HStack gap={2} justify="center" flexWrap="wrap" bg="white" p={4} borderRadius="xl" boxShadow="sm">
              <Button
                size="sm"
                variant={selectedCompetence === null ? 'solid' : 'outline'}
                bg={selectedCompetence === null ? 'sage.600' : 'transparent'}
                borderColor="sage.200"
                borderWidth={selectedCompetence === null ? '0px' : '1px'}
                color={selectedCompetence === null ? 'white' : 'sage.700'}
                _hover={{ bg: selectedCompetence === null ? 'sage.700' : 'sage.50' }}
                onClick={() => handleSelectCompetence(null)}
                borderRadius="full"
                fontWeight="600"
              >
                Tous les projets
              </Button>
              {CONFIG.competences.map(c => (
                <Button
                  key={c.id}
                  size="sm"
                  variant={selectedCompetence === c.id ? 'solid' : 'outline'}
                  bg={selectedCompetence === c.id ? 'sage.600' : 'transparent'}
                  borderColor="sage.200"
                  borderWidth={selectedCompetence === c.id ? '0px' : '1px'}
                  color={selectedCompetence === c.id ? 'white' : 'sage.700'}
                  _hover={{ bg: selectedCompetence === c.id ? 'sage.700' : 'sage.50' }}
                  onClick={() => setSelectedCompetence(c.id)}
                  title={c.titre}
                  borderRadius="full"
                  fontWeight="600"
                >
                  {c.titreCourt}
                </Button>
              ))}
            </HStack>
          </VStack>
          <VStack gap={10}>
            {projetsProfessionnels.length > 0 && (
              <Box w="full">
                <Heading as="h3" size="lg" color="gray.900" mb={6} fontWeight="700">
                  💼 Expériences professionnelles
                </Heading>
                <VStack gap={6}>
                  {projetsProfessionnels.map(projet => (
                    <Box 
                      key={projet.id} 
                      w="full"
                      bg="white" 
                      borderRadius="xl" 
                      overflow="hidden" 
                      boxShadow="md"
                      border="1px solid"
                      borderColor="gray.200"
                      _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                      transition="all 0.3s ease"
                    >
                      {renderProjectInner(projet)}
                    </Box>
                  ))}
                </VStack>
              </Box>
            )}

            {projetsScolaires.length > 0 && (
              <Box w="full">
                <Heading as="h3" size="lg" color="gray.900" mb={6} fontWeight="700">
                  🎓 Projets scolaires & personnels
                </Heading>
                <VStack gap={6}>
                  {projetsScolaires.map(projet => (
                    <Box 
                      w="full"
                      key={projet.id} 
                      bg="white" 
                      borderRadius="xl" 
                      overflow="hidden" 
                      boxShadow="md"
                      border="1px solid"
                      borderColor="gray.200"
                      _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                      transition="all 0.3s ease"
                    >
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
      <Box as="section" py={20} px={4} bg="white">
        <Container maxW="3xl">
          <VStack gap={4} mb={12}>
            <Heading 
              as="h2" 
              id="contact" 
              size="2xl" 
              textAlign="center" 
              scrollMarginTop="24"
              color="gray.900"
              fontWeight="800"
              letterSpacing="-0.02em"
            >
              Me Contacter
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
              Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à me contacter
            </Text>
          </VStack>
          
          {/* Carte du formulaire */}
          <Box 
            bg="gray.50" 
            borderRadius="xl" 
            boxShadow="lg" 
            p={8}
            border="1px solid"
            borderColor="gray.200"
            mb={10}
          >
            <VStack gap={6}>
              <Box w="full">
                <Text mb={2} fontWeight="600" color="gray.700">Nom complet</Text>
                <Input 
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                  size="lg"
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'sage.500', boxShadow: '0 0 0 1px var(--chakra-colors-sage-500)' }}
                />
              </Box>
              <Box w="full">
                <Text mb={2} fontWeight="600" color="gray.700">Email</Text>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="votre.email@exemple.fr"
                  size="lg"
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'sage.500', boxShadow: '0 0 0 1px var(--chakra-colors-sage-500)' }}
                />
              </Box>
              <Box w="full">
                <Text mb={2} fontWeight="600" color="gray.700">Message</Text>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Votre message..."
                  size="lg"
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'sage.500', boxShadow: '0 0 0 1px var(--chakra-colors-sage-500)' }}
                />
              </Box>
              <Button 
                onClick={handleSubmit}
                w="full"
                colorScheme="sage"
                size="lg"
                fontWeight="700"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.3s"
              >
                Envoyer le message
              </Button>
            </VStack>
          </Box>
          
          <Box borderTop="2px" borderColor="gray.100" py={8} />
          
          <VStack gap={6}>
            <Text color="gray.700" fontSize="lg" fontWeight="600">Ou contactez-moi directement :</Text>
            <HStack gap={6} justify="center" flexWrap="wrap">
              <Link 
                href={`mailto:${CONFIG.email}`} 
                color="sage.600" 
                fontWeight="600"
                _hover={{ color: 'sage.700', textDecoration: 'underline' }}
              >
                📧 {CONFIG.email}
              </Link>
              <Link 
                href={CONFIG.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                color="sage.600"
                fontWeight="600"
                _hover={{ color: 'sage.700', textDecoration: 'underline' }}
              >
                💼 LinkedIn
              </Link>
              <Link 
                href={CONFIG.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                color="sage.600"
                fontWeight="600"
                _hover={{ color: 'sage.700', textDecoration: 'underline' }}
              >
                👨‍💻 GitHub
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* 👣 Footer */}
      <Box as="footer" bg="gray.900" color="white" py={12} px={4}>
        <Container maxW="6xl">
          <VStack gap={4}>
            <Text fontSize="lg" fontWeight="700">© 2025 {CONFIG.nom}</Text>
            <Text fontSize="sm" color="gray.400">
              Portfolio BUT Informatique - Développé avec ❤️ en React, TypeScript & Chakra UI
            </Text>
            <HStack gap={4} pt={4}>
              <Link 
                href={CONFIG.github} 
                target="_blank" 
                rel="noopener noreferrer"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="color 0.2s"
              >
                <FaGithub size={24} />
              </Link>
              <Link 
                href={CONFIG.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="color 0.2s"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link 
                href={`mailto:${CONFIG.email}`}
                color="gray.400"
                _hover={{ color: 'white' }}
                transition="color 0.2s"
              >
                <FaEnvelope size={24} />
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Dialog pour afficher l'évolution complète d'une compétence */}
      <DialogRoot open={isDialogOpen} onOpenChange={(e) => setIsDialogOpen(e.open)} size="lg">
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent>
            <DialogHeader>
              Évolution - {selectedCompetenceModal?.titre}
            </DialogHeader>
            <DialogCloseTrigger />
            <DialogBody>
              {selectedCompetenceModal && (
                <VStack align="stretch" gap={6}>
                  {/* BUT3 (si existe) */}
                  {selectedCompetenceModal.evolution.but3 && (
                    <Box borderLeft="4px solid" borderLeftColor="success.500" pl={4} py={4} bg="success.50" borderRadius="md">
                      <HStack gap={2} mb={3}>
                        <Badge colorScheme="green" fontSize="sm" fontWeight="bold" px={4}>
                          BUT3 (Actuel)
                        </Badge>
                        <Text fontSize="md" fontWeight="bold" color="success.700">
                          {selectedCompetenceModal.evolution.but3.niveau}
                        </Text>
                      </HStack>
                      <Text fontSize="sm" color="gray.700" lineHeight="1.6" mb={3}>
                        {selectedCompetenceModal.evolution.but3.apprentissages}
                      </Text>
                    </Box>
                  )}

                  {/* Flèche si 3 niveaux */}
                  {selectedCompetenceModal.evolution.but3 && (
                    <Text textAlign="center" color="gray.400" fontSize="2xl" fontWeight="bold">↑</Text>
                  )}

                  {/* BUT2 */}
                  <Box borderLeft="4px solid" borderLeftColor="primary.400" pl={4} py={4} bg="primary.50" borderRadius="md">
                    <HStack gap={2} mb={3}>
                      <Badge colorScheme="blue" fontSize="sm" fontWeight="bold" px={4}>
                        BUT2
                      </Badge>
                      <Text fontSize="md" fontWeight="bold" color="primary.700">
                        {selectedCompetenceModal.evolution.but2.niveau}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6" mb={3}>
                      {selectedCompetenceModal.evolution.but2.apprentissages}
                    </Text>
                  </Box>

                  {/* Flèche toujours présente entre BUT2 et BUT1 */}
                  <Text textAlign="center" color="gray.400" fontSize="2xl" fontWeight="bold">↑</Text>

                  {/* BUT1 */}
                  <Box borderLeft="4px solid" borderLeftColor="primary.300" pl={4} py={4} bg="primary.100" borderRadius="md">
                    <HStack gap={2} mb={3}>
                      <Badge colorScheme="cyan" fontSize="sm" fontWeight="bold" px={4}>
                        BUT1
                      </Badge>
                      <Text fontSize="md" fontWeight="bold" color="primary.900">
                        {selectedCompetenceModal.evolution.but1.niveau}
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.6" mb={3}>
                      {selectedCompetenceModal.evolution.but1.apprentissages}
                    </Text>
                  </Box>
                </VStack>
              )}
            </DialogBody>
            <DialogFooter>
              <Button colorScheme="gray" onClick={closeCompetenceModal}>
                Fermer
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPositioner>
      </DialogRoot>
    </>
  );
};

export default Portfolio;
