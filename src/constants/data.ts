export const IMAGES = {
  GROUP: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/group-customers-37f7e402-1773325646514.webp",
  MAN_CARD: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/man-with-card-3955d251-1773325646707.webp",
  ELTON_CARD: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-card-blue-white-e6ecde3b-1773398923429.webp",
  ELTON_MEMBER: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-card-application-hero-1cc715a3-1773399598473.webp",
  PARTNER_RESTAURANT: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/abidjan-luxury-restaurant-fec86e9c-1773390811690.webp",
  PARTNER_FASHION: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/cocody-fashion-boutique-fc9561c9-1773390806860.webp",
  PARTNER_HOTEL: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/san-pedro-resort-50d19ce9-1773390806389.webp",
  PARTNER_SPA: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/abidjan-wellness-spa-03e9ee31-1773390806372.webp",
  PARTNER_SUPERMARKET: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/premium-ivorian-supermarket-fc94da83-1773390805797.webp",
  PARTNER_TECH: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/abidjan-tech-store-38fc0ea7-1773390806515.webp",
  APPLICATION_HERO: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/card-app-hero-450x800.webp",
  PARTNER_SPECTACLE: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/partner-spectacle-b4af7987-1773400600927.webp"
};

export const PARTNERS = [
  { 
    id: 1, 
    name: "Le Toit d'Abidjan", 
    discount: "15%", 
    category: "Gastronomie", 
    image: IMAGES.PARTNER_RESTAURANT,
    description: "Exp\u00e9rience culinaire unique surplombant la lagune \u00c9bri\u00e9.",
    location: "Plateau, Abidjan",
    terms: "Valable sur la carte hors boissons alcoolis\u00e9es."
  },
  { 
    id: 2, 
    name: "Ivoire Boutique", 
    discount: "12%", 
    category: "Mode", 
    image: IMAGES.PARTNER_FASHION,
    description: "La haute couture ivoirienne revisit\u00e9e pour le quotidien.",
    location: "Cocody, Abidjan",
    terms: "Applicable sur la nouvelle collection uniquement."
  },
  { 
    id: 3, 
    name: "Riviera Hotel & Spa", 
    discount: "20%", 
    category: "H\u00f4tellerie", 
    image: IMAGES.PARTNER_HOTEL,
    description: "\u00c9vasion et d\u00e9tente au bord de l'oc\u00e9an Atlantique.",
    location: "San-P\u00e9dro",
    terms: "R\u00e9duction sur le tarif de la chambre, r\u00e9servation 48h \u00e0 l'avance."
  },
  { 
    id: 4, 
    name: "Zenith Bien-\u00eatre", 
    discount: "25%", 
    category: "Spa & Sant\u00e9", 
    image: IMAGES.PARTNER_SPA,
    description: "Soins traditionnels et modernes pour une relaxation totale.",
    location: "Zone 4, Abidjan",
    terms: "Sur tous les massages de plus de 60 minutes."
  },
  { 
    id: 5, 
    name: "SuperMarch\u00e9 Horizon", 
    discount: "5%", 
    category: "Alimentation", 
    image: IMAGES.PARTNER_SUPERMARKET,
    description: "Le meilleur des produits locaux et import\u00e9s au juste prix.",
    location: "Yopougon, Abidjan",
    terms: "\u00c0 partir de 30 000 FCFA d'achats."
  },
  { 
    id: 6, 
    name: "Connect'IT", 
    discount: "10%", 
    category: "Technologie", 
    image: IMAGES.PARTNER_TECH,
    description: "Votre destination pour les derniers gadgets et accessoires.",
    location: "Marcory, Abidjan",
    terms: "Valable sur les accessoires et consommables."
  },
  { 
    id: 7, 
    name: "Palais des Spectacles", 
    discount: "10%", 
    category: "Spectacles", 
    image: IMAGES.PARTNER_SPECTACLE,
    description: "Vivez les plus grands concerts et \u00e9v\u00e9nements culturels.",
    location: "Cocody, Abidjan",
    terms: "Sur pr\u00e9sentation de la carte \u00e0 la billetterie physique."
  },
];

export const ELTON_STATIONS = [
  {
    id: 1,
    name: "Elton Plateau",
    location: { lat: 5.326, lng: -4.019 },
    address: "Bd de la R\u00e9publique, Plateau, Abidjan",
    phoneNumber: "+225 27 20 20 00 00",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-dakar-plateau-42571346-1773400989230.webp",
    services: ["Plein", "Boutique", "Lavage"]
  },
  {
    id: 2,
    name: "Elton Almadies",
    location: { lat: 5.405, lng: -4.002 },
    address: "Avenue du Golf, Cocody Almadies, Abidjan",
    phoneNumber: "+225 27 22 44 11 22",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-almadies-2a36a6ef-1773400994244.webp",
    services: ["Plein", "Boutique", "Restaurant"]
  },
  {
    id: 3,
    name: "Elton Yamoussoukro",
    location: { lat: 6.815, lng: -5.275 },
    address: "Avenue de la Paix, Yamoussoukro",
    phoneNumber: "+225 27 30 64 33 44",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-thies-3e2511c1-1773400989608.webp",
    services: ["Plein", "Boutique", "Caf\u00e9"]
  },
  {
    id: 4,
    name: "Elton San-Pedro",
    location: { lat: 4.748, lng: -6.637 },
    address: "Quartier Administratif, San-Pedro",
    phoneNumber: "+225 27 34 71 55 66",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-saint-louis-55393d73-1773400994450.webp",
    services: ["Plein", "Boutique", "Lavage"]
  },
  {
    id: 5,
    name: "Elton Assinie",
    location: { lat: 5.163, lng: -3.284 },
    address: "Route d'Assinie-Mafia, Assinie",
    phoneNumber: "+225 27 21 30 77 88",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-mbour-fb7f76e0-1773400988739.webp",
    services: ["Plein", "Boutique"]
  },
  {
    id: 6,
    name: "Elton Korhogo",
    location: { lat: 9.458, lng: -5.629 },
    address: "Centre Ville, Korhogo",
    phoneNumber: "+225 27 36 86 99 00",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-touba-75fc2c2f-1773400988843.webp",
    services: ["Plein", "Boutique"]
  },
  {
    id: 7,
    name: "Elton Bouak\u00e9",
    location: { lat: 7.690, lng: -5.031 },
    address: "Quartier Commerce, Bouak\u00e9",
    phoneNumber: "+225 27 31 63 11 22",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-kaolack-ba275f76-1773400988968.webp",
    services: ["Plein", "Boutique", "Pneumatique"]
  },
  {
    id: 8,
    name: "Elton Man",
    location: { lat: 7.412, lng: -7.553 },
    address: "Route de Danan\u00e9, Man",
    phoneNumber: "+225 27 33 79 33 44",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-ziguinchor-e0e414ac-1773400989929.webp",
    services: ["Plein", "Boutique"]
  },
  {
    id: 9,
    name: "Elton Bassam",
    location: { lat: 5.211, lng: -3.743 },
    address: "Quartier France, Grand-Bassam",
    phoneNumber: "+225 27 21 30 55 66",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-diamniadio-e2dc6a4e-1773400996559.webp",
    services: ["Plein", "Boutique", "Caf\u00e9"]
  },
  {
    id: 10,
    name: "Elton Bingerville",
    location: { lat: 5.355, lng: -3.889 },
    address: "Route de Bingerville, Bingerville",
    phoneNumber: "+225 27 22 40 77 88",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-rufisque-3d086058-1773400996664.webp",
    services: ["Plein", "Boutique", "Lavage"]
  }
];

export const FAVORITE_ACTIVITIES = [
  "Gastronomie & Restaurants",
  "Mode & Shopping",
  "Voyages & H\u00f4tels",
  "Bien-\u00eatre & Spa",
  "Supermarch\u00e9s & Alimentation",
  "\u00c9lectronique & High-Tech",
  "Cin\u00e9ma & Divertissement",
  "Spectacles",
  "Sport & Fitness",
  "Automobile & Accessoires",
  "Culture & Arts"
];

export const CONTACT_EMAIL = "kristalwos@gmail.com";