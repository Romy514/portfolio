// Types pour le portfolio

export interface EvolutionNiveau {
  niveau: string;
  apprentissages: string;
  preuves: string[];
  nouveaute?: boolean;
}

export interface Evolution {
  but1: EvolutionNiveau;
  but2: EvolutionNiveau;
  but3?: EvolutionNiveau;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Competence {
  id: string;
  titre: string;
  description: string;
  color: string;
  evolution: Evolution;
  technos: string[];
  pertinenteBut3?: boolean;
}

export interface ContexteProjet {
  client: string;
  besoin: string;
  solution: string;
  resultat: string;
}

export interface Projet {
  id: string;
  titre: string;
  description: string;
  image: string;
  technos: string[];
  competences: string[]; // IDs des compétences liées
  categorie?: string;
  annee?: string; // BUT1, BUT2, BUT3
  contexte: ContexteProjet;
  apprentissagesClés?: string[];
  lienGithub?: string | null;
  lienDemo?: string | null;
  nouveaute?: string;
}

export interface Presentation {
  accroche: string;
  description: string;
}

export interface PortfolioConfig {
  nom: string;
  titre: string;
  photo: string;
  email: string;
  github: string;
  linkedin: string;
  cv?: string;
  presentation: Presentation;
  competences: Competence[];
  projets: Projet[];
}