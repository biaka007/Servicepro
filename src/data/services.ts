export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'nettoyage-standard',
    title: 'Service de Nettoyage Standard',
    description: 'Nettoyage complet de votre domicile ou bureau, incluant dépoussiérage, aspiration, et nettoyage des surfaces. Service professionnel avec matériel inclus.',
    image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg',
    price: '20,000 FCFA',
    features: [
      'Dépoussiérage de toutes les surfaces',
      'Aspiration et lavage des sols',
      'Nettoyage des salles de bain et cuisines',
      'Vidage des poubelles',
      'Nettoyage des vitres intérieures',
      'Désinfection des surfaces'
    ]
  },
  {
    id: 'maintenance-preventive',
    title: 'Maintenance Préventive',
    description: 'Inspection et entretien régulier de vos équipements pour prévenir les pannes et prolonger leur durée de vie. Service technique spécialisé.',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',
    price: '25,000 FCFA',
    features: [
      'Vérification des systèmes CVC',
      'Lubrification des pièces mobiles',
      'Nettoyage des filtres',
      'Rapports détaillés',
      'Contrôle de sécurité',
      'Planification des interventions'
    ]
  },
  {
    id: 'reparation-urgente',
    title: 'Réparation d\'Urgence',
    description: 'Intervention rapide pour résoudre vos problèmes techniques urgents. Disponible 24h/24 pour les urgences critiques.',
    image: 'https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg',
    price: '25,000 FCFA',
    features: [
      'Intervention dans les 2 heures',
      'Diagnostic rapide',
      'Réparation sur place',
      'Pièces de rechange disponibles',
      'Service 24h/24',
      'Garantie sur les réparations'
    ]
  },
  {
    id: 'nettoyage-profond',
    title: 'Nettoyage en Profondeur',
    description: 'Service de nettoyage intensif pour remise en état complète. Idéal pour déménagements, rénovations ou nettoyage saisonnier.',
    image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg',
    price: '35,000 FCFA',
    features: [
      'Nettoyage complet de tous les espaces',
      'Décapage et cirage des sols',
      'Nettoyage des moquettes et tapis',
      'Lessivage des murs et plafonds',
      'Nettoyage des appareils électroménagers',
      'Désinfection complète'
    ]
  },
  {
    id: 'jardinage-entretien',
    title: 'Jardinage et Entretien Extérieur',
    description: 'Entretien complet de vos espaces verts et extérieurs. Tonte, taille, plantation et aménagement paysager.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    price: '45,000 FCFA',
    features: [
      'Tonte de pelouse',
      'Taille des haies et arbustes',
      'Désherbage et binage',
      'Plantation et semis',
      'Nettoyage des allées',
      'Entretien des massifs'
    ]
  },
  {
    id: 'plomberie-sanitaire',
    title: 'Plomberie et Sanitaire',
    description: 'Services de plomberie générale et sanitaire. Installation, réparation et maintenance de vos équipements.',
    image: 'https://images.pexels.com/photos/8486944/pexels-photo-8486944.jpeg',
    price: '25,000 FCFA',
    features: [
      'Réparation de fuites',
      'Débouchage de canalisations',
      'Installation de robinetterie',
      'Maintenance de chauffe-eau',
      'Réparation de WC et lavabos',
      'Contrôle de pression'
    ]
  }
];
