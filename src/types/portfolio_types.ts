// Types pour le portfolio

export interface Competence {
  id: string;
  titre: string;
  niveau: 'Maîtrisé' | 'Avancé' | 'Intermédiaire';
  description: string;
  technos: string[];
  color: string;
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
  // catégorie du projet — permet de séparer projets scolaires vs professionnels
  categorie?: string;
  contexte: ContexteProjet;
  lienGithub?: string;
  lienDemo?: string;
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
  presentation: Presentation;
  competences: Competence[];
  projets: Projet[];
}