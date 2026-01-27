export const CONFIG = {
  nom: "Romy Chauvière",
  titre: "Étudiante en 3ème année de BUT Informatique",
  photo: "/portfolio/assets/profil.jpg",
  email: "romy.chauviere@gmail.com",
  github: "https://github.com/romy514",
  linkedin: "https://linkedin.com/in/romychauviere",
  cv: "/portfolio/assets/CV_CHAUVIERE_Romy.pdf",
  
  presentation: {
    accroche: "Passionnée par le développement logiciel et l'innovation technologique",
    description: "Étudiante alternante en 3ème année de BUT Informatique, je me spécialise dans le développement logiciel et la conception d'applications optimisées et performantes."
  },
  
  // 🎯 Compétences avec évolution - Montrez votre progression !
  competences: [
    {
      id: "comp1",
      titre: "Réaliser un développement d'application",
      titreCourt: "Réaliser",
      description: "Conception et développement d'applications web et logicielles",
      color: "blue.500",
      evolution: {
        but1: {
          niveau: "Débutant",
          apprentissages: "Premiers pas en HTML/CSS, JavaScript, Java et Python.",
          preuves: ["Projets basiques en HTML/CSS"]
        },
        but2: {
          niveau: "Intermédiaire",
          apprentissages: "Premiers pas en PHP, développement web complet, et approfondissement en Java et Python.",
          preuves: ["proj2"] // Référence à l'ID du projet e-commerce
        },
        but3: {
          niveau: "Maîtrisé",
          apprentissages: "Expertise en Python, composants réutilisables. Capacité à produire du code maintenable et documenté.",
          preuves: ["proj3"],
          nouveaute: false
        }
      },
      technos: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vite", "Chakra UI", "TanStack", "PHP", "Symfony", "Python", "Java"]
    },
    {
      id: "comp2",
      titreCourt: "Optimiser",
      titre: "Optimiser des applications informatiques",
      description: "Performance, qualité du code et bonnes pratiques",
      color: "green.500",
      evolution: {
        but1: {
          niveau: "Découverte",
          apprentissages: "Introduction aux concepts de performance et de qualité",
          preuves: []
        },
        but2: {
          niveau: "Intermédiaire",
          apprentissages: "Premières pratiques d'optimisation, utilisation basique de Git et design patterns",
          preuves: ["proj2"]
        },
        but3: {
          niveau: "Avancé",
          apprentissages: "Optimisation avancée du code, gestion de la dette technique, tests et intégration continue, bonnes pratiques en équipe professionnelle",
          preuves: ["proj3"],
          nouveaute: false
        }
      },
      technos: ["Git", "GitHub", "Docker", "CI/CD", "Code Review", "Tests"]
    },
    {
      titreCourt: "Administrer",
      id: "comp3",
      titre: "Administrer des systèmes informatiques communicants",
      description: "Gestion de serveurs et infrastructures",
      color: "yellow.500",
      evolution: {
        but1: {
          niveau: "Débutant",
          apprentissages: "Premiers pas avec Linux, notions de base",
          preuves: []
        },
        but2: {
          niveau: "Intermédiaire",
          apprentissages: "Déploiement d'applications, initiation à Docker et virtualisation",
          preuves: ["proj2"]
        }
      },
      technos: ["Linux", "Docker", "Serveurs Web", "Déploiement"],
      pertinenteBut3: false
    },
    {
      id: "comp4",
      titre: "Gérer des données de l'information",
      titreCourt: "Gérer des données",
      description: "Modélisation, requêtes et optimisation de bases de données",
      color: "orange.500",
      evolution: {
        but1: {
          niveau: "Débutant",
          apprentissages: "Introduction au modèle relationnel et SQL basique",
          preuves: []
        },
        but2: {
          niveau: "Intermédiaire",
          apprentissages: "Conception de schémas de données, requêtes complexes, optimisation de requêtes",
          preuves: ["proj2"]
        }
      },
      technos: ["SQL", "OracleSQL", "MariaDB", "Neo4j", "API REST", "NinjaAPI", "Modélisation"],
      pertinenteBut3: false
    },
    {
      id: "comp5",
      titre: "Conduire un projet",
      titreCourt: "Conduire",
      description: "Méthodes agiles, travail en équipe et gestion de projet",
      color: "red.500",
      evolution: {
        but1: {
          niveau: "Débutant",
          apprentissages: "Initiation aux méthodes agiles, travail en petits groupes",
          preuves: []
        },
        but2: {
          niveau: "Intermédiaire",
          apprentissages: "Application de Scrum sur des projets tuteurés, utilisation de Kanban, gestion d'une équipe de développement",
          preuves: ["proj2"]
        }
      },
      technos: ["Scrum", "Agile", "Kanban", "Git", "Documentation"],
      pertinenteBut3: false
    },
    {
      id: "comp6",
      titre: "Travailler dans une équipe informatique",
      titreCourt: "Collaborer",
      description: "Collaboration, communication et veille technologique",
      color: "purple.500",
      evolution: {
        but1: {
          niveau: "Débutant",
          apprentissages: "Premiers travaux en groupe, bases de la collaboration",
          preuves: []
        },
        but2: {
          niveau: "Intermédiaire",
          apprentissages: "Collaboration via GitHub, code reviews, communication sur des projets",
          preuves: ["proj2"]
        },
        but3: {
          niveau: "Maîtrisé",
          apprentissages: "Travail en équipe professionnelle. Communication efficace, écoute active et intégration harmonieuse. Veille technologique régulière.",
          preuves: ["proj3"],
          nouveaute: false
        }
      },
      technos: ["GitHub", "Code Review", "Agile", "Teams", "Communication", "Documentation"]
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
      competences: ["comp1", "comp2", "comp5", "comp6"],
      categorie: "scolaire",
      annee: "BUT3",
      contexte: {
        client: "Adrien van den Bossche - l'IRIT pour Locura4IoT",
        besoin: "Créer une IHM accessible pour une montre connectée destinée aux malvoyants",
        solution: "Software embarqué avec interface tactile et fonctionnalités adaptées",
        resultat: "Application réemployée sur des prototypes de montres par les chercheurs - Note à venir"
      },
      apprentissagesClés: [
        "Collaboration avec une équipe de recherche et des chercheurs",
        "Travail sur un vrai produit utilisé par d'autres",
        "Gestion de contraintes techniques complexes (embedded, accessibilité)",
        "Capacité à adapter mon code selon les besoins métier"
      ],
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
      annee: "BUT2",
      contexte: {
        client: "Projet tuteuré - 10 semaines",
        besoin: "Implémenter un système de commande en ligne d'une boutique locale",
        solution: "Dévloppement d'un site web complet avec back-office et base de données",
        resultat: "Hausse de la fréquentation de la boutique - Note de 15,33/20"
      },
      apprentissagesClés: [
        "Conception complète d'une base de données relationnelle",
        "Gestion d'authentification et sécurité web",
        "Travail en équipe agile (Scrum) sur une durée longue",
        "Déploiement et mise en production d'une application réelle"
      ],
      lienGithub: "https://github.com/IUT-Blagnac/sae-3-01-devapp-2024-2025-g2b10"
    },
    {
      id: "proj3",
      titre: "Dashboard d'upload de logs",
      description: "Application web d'upload de fichiers de logs avec visualisation de l'avancement du traitement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technos: ["React", "TypeScript", "Vite", "NinjaAPI", "Chakra UI", "TanStack"],
      competences: ["comp1", "comp2", "comp4", "comp6"],
      categorie: "professionnel",
      annee: "BUT3",
      contexte: {
        client: "Projet professionnel - Alternance",
        besoin: "Créer une plateforme de dépôt de logs à analyser pour les équipes métier",
        solution: "Application web moderne avec drag and drop de fichiers et visualisation en temps réel",
        resultat: "Application déployée et utilisée quotidiennement par les équipes. Montée en compétence significative en React et TypeScript"
      },
      apprentissagesClés: [
        "Travail dans une vraie équipe professionnelle multidisciplinaire",
        "Utilisation de TypeScript pour du code maintenable et sûr",
        "Communication avec les utilisateurs métier (non-techniques)",
        "Respect des deadlines et des standards de qualité en entreprise",
        "Intégration continue et déploiement dans un environnement professionnel"
      ],
      lienGithub: null,
      nouveaute: "Compétence développée en environnement professionnel"
    },
    {
      id: "proj4",
      titre: "Développement d'un jeu Bomberman",
      description: "Conception et développement d'un jeu Godot en équipe",
      image: "/portfolio/assets/bombermanfixing thin.png",
      technos: ["GScript", "Godot"],
      competences: ["comp1", "comp2", "comp6"],
      categorie: "scolaire",
      annee: "BUT3",
      contexte: {
        client: "Projet en développement multimédia",
        besoin: "Créer une copie 3D du jeu rétro Bomberman",
        solution: "Jeu vidéo complet en 3D jouable en multijoueur local ",
        resultat: "Jeu déployé et jouable sur Itch.io"
      },
      apprentissagesClés: [
        "Apprentissage de l'utilisation de Godot Editor et GScript",
        "Introduction aux concepts clés du développement de jeu vidéo (3D, physique)",
        "Gestion de projet, Kanban, travail d'équipe"
      ],
      lienGithub: "https://github.com/Romy514/bomberman",
      demo: "https://romyy514.itch.io/bomberman",
    },
    
  ],

  // 🛠 Technologies - Liste épurée pour affichage
  technologies: [
      { name: "Python", icon: "FaPython" },
      { name: "Symfony", icon: "SiSymfony" },
      { name: "Java", icon: "FaJava" },
      { name: "Bash", icon: "SiGnubash" },
      { name: "Docker", icon: "FaDocker" },
      { name: "Git", icon: "FaGitAlt" },
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Agile/Scrum", icon: "FaUsers" },
      { name: "SQL", icon: "FaDatabase" },
      { name: "Figma", icon: "FaFigma" }
  ]
};

