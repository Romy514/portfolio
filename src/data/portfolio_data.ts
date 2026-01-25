export const CONFIG = {
  nom: "Romy Chauvière",
  titre: "Étudiante en 3ème année de BUT Informatique",
  photo: "/portfolio/assets/profil.jpg",
  email: "romy.chauviere@gmail.com",
  github: "https://github.com/romy514",
  linkedin: "https://linkedin.com/in/romychauviere",
  
  presentation: {
    accroche: "Passionnée par le développement logiciel et l'innovation technologique",
    description: "Étudiante en 3ème année de BUT Informatique, je me spécialise dans le développement logiciel et la conception d'applications performantes. À la recherche d'opportunités pour mettre en pratique mes compétences et continuer à apprendre."
  },
  
  // 🎯 Compétences - Ajoute/modifie selon ton parcours
  competences: [
    {
      id: "comp1",
      titre: "Réaliser une application web",
      niveau: "Maitrisé",
      description: "Conception et développement d'applications web interactives",
      technos: ["HTML/CSS", "JS/TS", "React", "Vite", "Chakra UI","TanStack", "PHP", "Symfony"],
      color: "blue.500"
    },
    {
      id: "comp2",
      titre: "Optimiser des applications informatiques",
      niveau: "Avancé",
      description: "Performance, qualité du code et bonnes pratiques",
      technos: ["Git", "Docker", "CI/CD"],
      color: "green.500"
    },
    {
      id: "comp3",
      titre: "Administrer des systèmes informatiques communicants",
      niveau: "Intermédiaire",
      description: "Gestion de serveurs et infrastructures",
      technos: ["Linux", "Docker"],
      color: "yellow.500"
    },
    {
      id: "comp4",
      titre: "Gérer des données de l'information",
      niveau: "Avancé",
      description: "Modélisation, requêtes et optimisation de bases de données",
      technos: ["OracleSQL", "Neo4j", "MariaDB", "API REST", "NinjaAPI"],
      color: "orange.500"
    },
    {
      id: "comp5",
      titre: "Conduire un projet",
      niveau: "Maîtrisé",
      description: "Méthodes agiles, travail en équipe et gestion de projet",
      technos: ["Scrum", "Jira", "Git", "Documentation"],
      color: "red.500"
    },
    {
      id: "comp6",
      titre: "Travailler dans une équipe informatique",
      niveau: "Maîtrisé",
      description: "Collaboration, communication et veille technologique",
      technos: ["Teams", "GitHub", "Code Review", "Agile"],
      color: "purple.500"
    }
  ],
  
  // 📁 Projets - Personnalise avec tes réalisations
  projets: [
    {
      id: "proj1",
      titre: "Développement IHM de montre connectée",
      description: "Conception et implétementation d'un interface utilisateur pour personnes malvoyantes sur une montre connectée (esp32) avec quelques fonctionnalités (recherche d'objet, interaction avec objets connectés).",
      image: "/portfolio/assets/echowatch.png",
      technos: ["LVGL", "C", "C++", "MQTT"],
      competences: ["comp1", "comp2", "comp5", "comp6"], // IDs des compétences liées
      categorie: "scolaire",
      contexte: {
        client: "Adrien van den Bossche - l'IRIT pour Locura4IoT",
        besoin: "Créer une IHM accessible pour une montre connectée destinée aux malvoyants",
        solution: "Software embarqué avec interface tactile et fonctionnalités adaptées",
        resultat: "Note de 18/20 - Application réemployée sur des prototypes de montres par les chercheurs"
      },
      lienGithub: "https://github.com/Perceval00731/EchoWatch",
    },
    {
      id: "proj2",
      titre: "Site web e-commerce",
      description: "Site web d'e-commerce et base de données avec gestion des produits, commandes, paiements (simulés) et système d'authentification sécurisé.",
      image: "/portfolio/assets/index.png",
      technos: ["PHP", "HTML/CSS", "JavaScript", "MariaDB"],
      competences: ["comp1", "comp3", "comp4", "comp5", "comp6"],
      categorie: "scolaire",
      contexte: {
        client: "Projet tuteuré - 10 semaines",
        besoin: "Implémenter un système de commande en ligne d'une boutique locale",
        solution: "Dévloppement d'un site web complet avec back-office et base de données",
        resultat: "Hausse de la fréquentation de la boutique - Note de 16/20"
      },
      lienGithub: "https://github.com/IUT-Blagnac/sae-3-01-devapp-2024-2025-g2b10"
    },
    {
      id: "proj3",
      titre: "Dashboard d'upload de logs",
      description: "Application web d'upload de fichiers de logs avec visualisation de l'avancement du traitement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technos: ["React", "Vite", "NinjaAPI", "Chakra UI", "TanStack"],
      competences: ["comp1", "comp4"],
      categorie: "professionnel",
      contexte: {
        client: "Projet professionnel - Alternance",
        besoin: "Créer une plateforme de dépôt de logs à analyser pour les équipes métier",
        solution: "Application web avec drag and drop de fichiers et visualisation de l'avancement",
        resultat: "Montée en compétence significative en React et TypeScript"
      },
      lienGithub: "https://github.com/tonpseudo/projet3",
      lienDemo: "https://dashboard-demo.vercel.app"
    }
  ]
};