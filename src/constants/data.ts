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
  PARTNER_SPECTACLE: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/partner-spectacle-b4af7987-1773400600927.webp",
  FAQ_HERO: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/faq-hero-f80daa19-1773408906996.webp"
};

export const NAV_LINKS = [
  { name: 'Comment ça marche', href: '/#how-it-works' },
  { name: 'Offres', href: '/offres' },
  { name: 'Aide & FAQ', href: '/faq' },
];

export const PARTNERS = [
  { 
    id: 1, 
    name: "Le Toit d'Abidjan", 
    discount: "15%", 
    category: "Gastronomie", 
    image: IMAGES.PARTNER_RESTAURANT,
    description: "Expérience culinaire unique surplombant la lagune Ébrié.",
    location: "Plateau, Abidjan",
    terms: "Valable sur la carte hors boissons alcoolisées."
  },
  { 
    id: 2, 
    name: "Ivoire Boutique", 
    discount: "12%", 
    category: "Mode", 
    image: IMAGES.PARTNER_FASHION,
    description: "La haute couture ivoirienne revisitée pour le quotidien.",
    location: "Cocody, Abidjan",
    terms: "Applicable sur la nouvelle collection uniquement."
  },
  { 
    id: 3, 
    name: "Riviera Hotel & Spa", 
    discount: "20%", 
    category: "Hôtellerie", 
    image: IMAGES.PARTNER_HOTEL,
    description: "Évasion et détente au bord de l'océan Atlantique.",
    location: "San-Pédro",
    terms: "Réduction sur le tarif de la chambre, réservation 48h à l'avance."
  },
  { 
    id: 4, 
    name: "Zenith Bien-être", 
    discount: "25%", 
    category: "Spa & Santé", 
    image: IMAGES.PARTNER_SPA,
    description: "Soins traditionnels et modernes pour une relaxation totale.",
    location: "Zone 4, Abidjan",
    terms: "Sur tous les massages de plus de 60 minutes."
  },
  { 
    id: 5, 
    name: "SuperMarché Horizon", 
    discount: "5%", 
    category: "Alimentation", 
    image: IMAGES.PARTNER_SUPERMARKET,
    description: "Le meilleur des produits locaux et importés au juste prix.",
    location: "Yopougon, Abidjan",
    terms: "À partir de 30 000 FCFA d'achats."
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
    description: "Vivez les plus grands concerts et événements culturels.",
    location: "Cocody, Abidjan",
    terms: "Sur présentation de la carte à la billetterie physique."
  },
];

export const ELTON_STATIONS = [
  {
    id: 1,
    name: "Elton Plateau",
    location: { lat: 5.326, lng: -4.019 },
    address: "Bd de la République, Plateau, Abidjan",
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
    services: ["Plein", "Boutique", "Café"]
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
    name: "Elton Bouaké",
    location: { lat: 7.690, lng: -5.031 },
    address: "Quartier Commerce, Bouaké",
    phoneNumber: "+225 27 31 63 11 22",
    imageUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/elton-station-kaolack-ba275f76-1773400988968.webp",
    services: ["Plein", "Boutique", "Pneumatique"]
  },
  {
    id: 8,
    name: "Elton Man",
    location: { lat: 7.412, lng: -7.553 },
    address: "Route de Danané, Man",
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
    services: ["Plein", "Boutique", "Café"]
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
  "Voyages & Hôtels",
  "Bien-être & Spa",
  "Supermarchés & Alimentation",
  "Électronique & High-Tech",
  "Cinéma & Divertissement",
  "Spectacles",
  "Sport & Fitness",
  "Automobile & Accessoires",
  "Culture & Arts"
];

export const CLIENT_FAQ = [
  {
    question: "Comment fonctionne la Carte Elton ?",
    answer: `La Carte Elton est votre passeport pour des réductions. Ce n'est pas une carte de paiement, mais une carte de fidélité qui vous donne accès à des avantages chez de nombreux commerces partenaires, à condition d'être un client actif chez Elton.`
  },
  {
    question: "Comment obtenir une Carte Elton ?",
    answer: `C'est très simple ! Lorsque vous vous inscrivez en ligne sur la plateforme Elton, une carte virtuelle vous est fournie gratuitement. Vous pouvez l'utiliser immédiatement depuis votre téléphone pour bénéficier des réductions chez nos partenaires.`
  },
  {
    question: "Existe-t-il une carte physique ?",
    answer: `Oui, absolument ! Si vous préférez avoir une carte physique en main, vous pouvez en acheter une à prix promotionnel dans n'importe quelle station-service Elton.`
  },
  {
    question: "Combien coûte la carte physique et où puis-je me la procurer ?",
    answer: `La carte physique est disponible au prix promotionnel de 1000 F.Cfa dans toutes les stations Elton. Il vous suffit de vous rendre dans une station, de demander la carte à l'accueil, et le personnel l'activera pour vous en moins de 5 minutes. C'est rapide et simple !`
  },
  {
    question: "Quelle est la différence entre la carte virtuelle gratuite et la carte physique payante ?",
    answer: `La carte virtuelle, que vous recevez gratuitement lors de votre inscription en ligne, vous permet déjà de profiter de toutes les réductions de base chez nos partenaires. La carte physique, elle, est complémentaire et vous offre des droits supplémentaires (par exemple, des offres exclusives, un accès prioritaire à certaines promotions, ou des avantages spéciaux chez certains commerces). C'est un plus pour les clients qui souhaitent aller encore plus loin dans les économies.`
  },
  {
    question: "Comment faire pour bénéficier des réductions chez les commerces partenaires avec ma carte ?",
    answer: `C'est simple, que vous utilisiez votre carte virtuelle ou votre carte physique :

• Vous présentez votre carte (sur votre téléphone ou en version physique) au commerçant.
• Il vérifie rapidement que votre carte est active (c'est-à-dire que vous avez acheté de l'essence Elton dans les 30 derniers jours).
• Si c'est le cas, il applique immédiatement la réduction sur votre facture.
• Ensuite, vous payez normalement avec le moyen de paiement de votre choix (espèces, carte bancaire, etc.).`
  },
  {
    question: "Est-ce que je dois payer avec la carte Elton pour avoir la réduction ?",
    answer: `Non, pas du tout ! La carte Elton (virtuelle ou physique) sert uniquement à déclencher la réduction. Elle prouve au commerçant que vous êtes un client Elton actif. Ensuite, vous êtes libre de payer comme vous le souhaitez.`
  },
  {
    question: "Comment suis-je informé des promotions chez les partenaires ?",
    answer: `Elton vous tient régulièrement informé ! Vous recevrez des notifications sur l'application mobile, des emails ou des SMS pour vous signaler les offres spéciales de nos partenaires. Par exemple, vous pourrez recevoir une alerte comme : "Offre flash chez votre boulanger partenaire : 2 cafés achetés = 1 offert, de 17h00 à 19h00 !" Comme ça, vous ne ratez aucune bonne affaire.`
  },
  {
    question: "Que se passe-t-il si je n'achète pas d'essence Elton pendant plus de 30 jours ?",
    answer: `Si vous dépassez les 30 jours sans achat chez Elton, votre carte devient "inactive". Les commerçants ne pourront donc plus vous accorder la réduction. Pas d'inquiétude : il vous suffit de refaire un plein dans une station Elton pour réactiver votre carte pour les 30 jours suivants.`
  },
  {
    question: "Comment savoir si ma carte est active et combien de temps il me reste ?",
    answer: `Vous pouvez vérifier le statut de votre carte sur l'application mobile Elton, sur le site internet, ou en regardant votre dernier ticket de caisse après un achat de carburant.`
  }
];

export const PARTNER_FAQ = [
  {
    question: "Comment fonctionne le partenariat avec Elton ?",
    answer: `En tant que commerce partenaire, vous offrez un avantage (une réduction ou une offre spéciale) aux porteurs de la Carte Elton. En échange, vous bénéficiez de la visibilité auprès de tous les clients fidèles d'Elton, ce qui attire de nouveaux clients dans votre magasin, sans que cela ne vous coûte de frais de publicité.`
  },
  {
    question: "Combien ce partenariat me coûte-t-il ? Y a-t-il une commission à verser à Elton ?",
    answer: `Non, aucun frais ni commission n'est reversé à Elton. Le partenariat repose uniquement sur l'avantage que vous choisissez d'offrir. C'est vous qui définissez l'offre (par exemple, -10% ou un café offert). Votre seul "coût" est la remise que vous accordez, en échange de nouveaux clients.`
  },
  {
    question: "Concrètement, comment ça se passe quand un client se présente avec sa carte ?",
    answer: `C'est très simple, que le client présente sa carte virtuelle (sur son téléphone) ou sa carte physique :

• Le client vous présente sa Carte Elton.
• Vous vérifiez sur votre terminal ou application dédiée que la carte est bien active (c'est-à-dire que le client a acheté de l'essence Elton dans les 30 derniers jours).
• Si c'est le cas, vous appliquez manuellement la réduction convenue sur sa facture.
• Le client paie ensuite avec le moyen de paiement de son choix.`
  },
  {
    question: "Comment les clients Elton seront-ils informés des promotions que je propose ?",
    answer: `C'est l'un des grands avantages du partenariat ! Elton se charge de promouvoir vos offres auprès de tous ses clients actifs. Quand vous lancez une opération spéciale (par exemple une promotion "2 pour 1" en fin de journée), Elton envoie des notifications, des emails ou des SMS à ses clients pour les informer. Vos offres bénéficient ainsi d'une visibilité immédiate auprès de milliers de clients potentiels.`
  },
  {
    question: "Puis-je communiquer sur des offres à durée limitée ou sur des créneaux horaires précis ?",
    answer: `Absolument ! C'est même encouragé. Les offres flash et les promotions horaires (comme "de 17h00 à 19h00") sont très efficaces pour attirer du monde à des moments creux. Il vous suffit de communiquer les détails de votre offre à Elton, et ils diffuseront l'information à tous les porteurs de carte actifs.`
  },
  {
    question: "Pourquoi devrais-je offrir une réduction à des clients qui ne sont pas les miens ?",
    answer: `C'est un excellent moyen de faire découvrir votre commerce à de nouvelles personnes. Les clients Elton, motivés par les notifications de promotions qu'ils reçoivent, pousseront votre porte pour la première fois. C'est une opération de marketing gagnante : vous échangez une petite réduction contre l'acquisition d'un nouveau client, qui pourrait devenir un client régulier.`
  },
  {
    question: "Est-ce que la vérification de la carte est compliquée ou prend du temps ?",
    answer: `Pas du tout. Elton fournit aux commerçants un outil simple et rapide (une application ou un terminal) pour vérifier le statut de la carte en quelques secondes. La procédure est fluide et ne ralentit pas le passage en caisse.`
  }
];

export const CONTACT_EMAIL = "kristalwos@gmail.com";