import React, { useEffect, useState, useRef } from 'react';
import { 
  CreditCard, 
  Fuel, 
  ShoppingBag, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Wallet,
  Star,
  MapPin,
  Gift,
  Users,
  Store,
  Phone,
  X,
  ExternalLink,
  Navigation,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { IMAGES, PARTNERS, ELTON_STATIONS } from '../constants/data';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// Custom Blue Elton Icon
const EltonIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #2563eb; width: 32px; height: 32px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);"><div style="transform: rotate(45deg); width: 8px; height: 8px; background-color: white; border-radius: 50%;"></div></div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface HomePageProps {
  cardActive: boolean;
  daysRemaining: number;
  simulatePurchase: () => void;
  theme: 'white' | 'black';
}

// Component to handle map view changes
const MapViewHandler = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
};

export const HomePage = ({ cardActive, daysRemaining, simulatePurchase, theme }: HomePageProps) => {
  const isDark = theme === 'black';
  const [selectedStation, setSelectedStation] = useState<typeof ELTON_STATIONS[0] | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([5.3600, -4.0083]);
  const [mapZoom, setMapZoom] = useState(7);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!cardActive) {
      const timeout = setTimeout(() => {
        toast.info("Bienvenue chez Elton Côte d'Ivoire ! Votre carte est actuellement inactive.", {
          description: "Faites le plein pour débloquer vos avantages."
        });
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [cardActive]);

  const handleStationClick = (station: typeof ELTON_STATIONS[0]) => {
    setSelectedStation(station);
    setMapCenter([station.location.lat, station.location.lng]);
    setMapZoom(14);
    
    // Scroll to map section only if the modal is not already being displayed (optional, but keep for now)
    const mapSection = document.getElementById('map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleMarkerClick = (station: typeof ELTON_STATIONS[0]) => {
    setSelectedStation(station);
    setMapCenter([station.location.lat, station.location.lng]);
    setMapZoom(14);
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-gradient-to-b from-slate-900 to-black' : 'bg-gradient-to-b from-amber-50/50 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase transition-colors duration-300 ${isDark ? 'bg-orange-600/20 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
                <Star className="w-3.5 h-3.5 fill-current" /> Programme Fidélité Elton Côte d'Ivoire
              </span>
              <h1 className={`text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                En <span className="text-orange-600">Côte d'Ivoire</span> Y a Carte et Y a Carte
              </h1>
              <p className={`text-lg mb-10 max-w-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                La Carte Elton transforme vos pleins d'essence en économies massives chez vos commerçants préférés à Abidjan et partout ailleurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/obtenir-carte" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-blue-200/20 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group">
                  Obtenir ma carte <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/offres" className={`border-2 px-8 py-4 rounded-2xl font-bold transition-all text-center ${isDark ? 'bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800' : 'bg-white border-orange-100 text-orange-700 hover:bg-orange-50'}`}>
                  Voir les offres
                </Link>
              </div>
              
              <div className={`mt-12 flex items-center gap-8 transition-all ${isDark ? 'opacity-40 grayscale' : 'opacity-60 grayscale hover:grayscale-0'}`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <div className={`flex items-center gap-2 font-bold text-sm ${isDark ? 'text-orange-400' : 'text-orange-800'}`}>
                  <MapPin className="w-4 h-4" /> Côte d'Ivoire
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[100px] rounded-full -z-10 transition-colors duration-300 ${isDark ? 'bg-orange-600/10' : 'bg-orange-400/10'}`} />
              <div className={`relative rounded-[2.5rem] p-4 backdrop-blur-sm border shadow-2xl overflow-hidden group transition-colors duration-300 ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white/50 border-orange-100 shadow-orange-100'}`}>
                 <img 
                   src={IMAGES.ELTON_CARD} 
                   alt="Carte Elton" 
                   className="rounded-3xl shadow-lg group-hover:scale-105 transition-transform duration-700 w-full aspect-video object-cover"
                 />
                 <div className={`absolute bottom-10 left-10 p-4 backdrop-blur-md rounded-2xl border shadow-lg flex items-center gap-4 animate-bounce transition-colors duration-300 ${isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-white/90 border-orange-100'}`}>
                   <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statut</p>
                     <p className={`text-sm font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Actif en Côte d'Ivoire</p>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 transition-colors duration-300`}>
         <div className={`rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl transition-all ${isDark ? 'bg-blue-700 shadow-blue-900/20 border-b-8 border-blue-900' : 'bg-blue-600 shadow-blue-100 border-b-8 border-blue-800'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-2">Pas encore de carte Elton ?</h3>
              <p className="text-blue-100">Rejoignez plus de 50 000 clients satisfaits en Côte d'Ivoire.</p>
            </div>
            <Link to="/obtenir-carte" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold whitespace-nowrap hover:bg-slate-50 transition-all flex items-center gap-2">
              Commander ma carte <CreditCard className="w-5 h-5" />
            </Link>
         </div>
      </div>

      {/* Customers Section */}
      <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full blur-2xl transition-colors duration-300 ${isDark ? 'bg-orange-600/20' : 'bg-orange-200/50'}`} />
                <img 
                  src={IMAGES.GROUP} 
                  alt="Clients heureux en Côte d'Ivoire"
                  className={`rounded-[3rem] shadow-2xl border-8 relative z-10 transition-colors duration-300 object-cover aspect-[4/3] w-full ${isDark ? 'border-slate-900' : 'border-white'}`}
                />
                <div className="absolute -bottom-6 -right-6 p-6 bg-orange-600 text-white rounded-3xl shadow-xl z-20 max-w-[240px]">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="font-bold">+50 000 Membres</span>
                  </div>
                  <p className="text-xs text-orange-100">Une communauté grandissante de clients satisfaits en Côte d'Ivoire.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Nos Clients</span>
              <h2 className={`text-4xl font-extrabold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Le sourire de nos clients est notre <span className="text-orange-600">plus belle récompense.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-amber-100'}`}>
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Réductions immédiates</h4>
                    <p className={`transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pas de points à accumuler, juste des réductions directes lors de vos achats.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isDark ? 'bg-slate-800' : 'bg-amber-100'}`}>
                    <ShoppingBag className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Réseau local premium</h4>
                    <p className={`transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Profitez des meilleures adresses d'Abidjan, Yamoussoukro et San-Pédro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className={`py-24 transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-amber-50/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-extrabold sm:text-4xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>La règle d'or d'Elton</h2>
            <p className={`mt-4 text-lg transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Un cercle vertueux où votre fidélité est toujours récompensée.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Fuel className="w-6 h-6" />,
                title: "Faites le plein",
                desc: "Achetez votre carburant dans n'importe quelle station Elton du réseau national."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Activez vos privilèges",
                desc: "Chaque plein active vos réductions chez nos partenaires pour les 30 prochains jours."
              },
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "Économisez partout",
                desc: "Payez avec votre carte chez nos partenaires et profitez de réductions instantanées."
              }
            ].map((step, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 ${isDark ? 'bg-black border-slate-800' : 'bg-white border-orange-100'}`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${isDark ? 'bg-orange-600/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                  {step.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className={`py-20 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white transition-colors duration-300 ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-[#1c1917]'}`}>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Gérez vos privilèges</h2>
                <p className="text-stone-400 mb-10 text-lg">Suivez votre statut d'activation en temps réel et ne manquez aucune économie.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cardActive ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                      {cardActive ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-stone-400 font-medium">Statut de la carte</p>
                      <p className="text-xl font-bold">{cardActive ? 'Réductions activées' : 'Réductions expirées'}</p>
                    </div>
                    {cardActive && (
                      <div className="text-right">
                        <p className="text-sm text-stone-400">Reste</p>
                        <p className="text-xl font-bold">{daysRemaining} jours</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 group hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center">
                      <Wallet className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-stone-400 font-medium">Solde de la carte</p>
                      <p className="text-xl font-bold">95 000 FCFA</p>
                    </div>
                  </div>
                </div>

                {!cardActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 p-6 bg-orange-600/10 border border-orange-600/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white">
                        <Gift className="w-5 h-5" />
                      </div>
                      <p className="font-medium text-orange-100">Refaites le plein pour réactiver vos rabais !</p>
                    </div>
                    <button 
                      onClick={simulatePurchase}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all w-full sm:w-auto"
                    >
                      Simuler un plein
                    </button>
                  </motion.div>
                )}
                
                {cardActive && (
                  <button 
                    onClick={simulatePurchase}
                    className="mt-10 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all w-full md:w-auto"
                  >
                    Actualiser mon statut
                  </button>
                )}
              </div>

              <div className="relative">
                 <img 
                    src={IMAGES.MAN_CARD} 
                    alt="Client heureux en Côte d'Ivoire" 
                    className="rounded-[2rem] shadow-2xl object-cover aspect-square w-full"
                 />
                 <div className={`absolute -bottom-4 -left-4 bg-orange-600 p-6 rounded-3xl border-4 shadow-xl transition-colors duration-300 ${isDark ? 'border-slate-900' : 'border-[#1c1917]'}`}>
                    <p className="text-sm text-orange-100">Total économisé</p>
                    <p className="text-3xl font-black">24 500 FCFA</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Preview Section */}
      <section id="partners" className={`py-24 overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className={`text-3xl font-extrabold sm:text-4xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Nos partenaires à Abidjan</h2>
              <p className={`mt-4 text-lg max-w-2xl transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Le réseau Elton s'associe aux meilleures enseignes ivoiriennes pour vous offrir des avantages exclusifs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/offres" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
                  Voir tout le réseau <ChevronRight className="w-5 h-5" />
                </Link>
                <Link to="/postuler" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
                  Postuler au réseau <Store className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.slice(0, 4).map((partner) => (
              <motion.div 
                key={partner.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to="/offres">
                  <div className={`relative h-64 rounded-3xl overflow-hidden mb-4 border transition-colors duration-300 ${isDark ? 'border-slate-800' : 'border-orange-50'}`}>
                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-300 mb-1">{partner.category}</p>
                      <h3 className="text-xl font-bold">{partner.name}</h3>
                    </div>
                    <div className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-2 font-bold text-orange-600 shadow-lg">
                      -{partner.discount}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stations Map Section */}
      <section id="map-section" className={`py-24 transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-blue-50/30'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Notre Réseau</span>
            <h2 className={`text-3xl font-extrabold sm:text-4xl transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Trouvez une station <span className="text-blue-600">Elton</span> proche de vous
            </h2>
            <p className={`mt-4 text-lg transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Un réseau de 10 stations modernes à votre service à travers toute la Côte d'Ivoire.
            </p>
          </div>

          <div className={`rounded-[3rem] overflow-hidden border-8 shadow-2xl transition-colors duration-300 h-[600px] relative z-0 ${isDark ? 'border-slate-800' : 'border-white'}`}>
            <MapContainer 
              center={mapCenter} 
              zoom={mapZoom} 
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
              ref={mapRef}
            >
              <MapViewHandler center={mapCenter} zoom={mapZoom} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={isDark 
                  ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" 
                  : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
              />
              {ELTON_STATIONS.map((station) => (
                <Marker 
                  key={station.id} 
                  position={[station.location.lat, station.location.lng]}
                  icon={EltonIcon}
                  eventHandlers={{
                    click: () => handleMarkerClick(station)
                  }}
                >
                  <Popup minWidth={280}>
                    <div className="p-1">
                      <img 
                        src={station.imageUrl} 
                        alt={station.name} 
                        className="w-full h-32 object-cover rounded-xl mb-3"
                      />
                      <h3 className="font-bold text-lg text-slate-900 mb-1">{station.name}</h3>
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>{station.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
                        <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <a 
                          href={`tel:${station.phoneNumber.replace(/\s/g, '')}`} 
                          className="hover:text-blue-600 hover:underline transition-colors"
                        >
                          {station.phoneNumber}
                        </a>
                      </div>
                      <button 
                        onClick={() => handleMarkerClick(station)}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" /> Voir détails complets
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
             {ELTON_STATIONS.map((station) => (
               <div 
                 key={station.id}
                 onClick={() => handleStationClick(station)}
                 className={`p-4 rounded-2xl border transition-all hover:border-blue-500 cursor-pointer group ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-blue-100 text-slate-900'}`}
               >
                 <div className="flex items-center justify-between mb-2">
                   <p className="font-bold text-sm truncate">{station.name}</p>
                   <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <p className="text-xs opacity-60 truncate">{station.address.split(',')[1] || station.address}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Station Details Modal */}
      <AnimatePresence>
        {selectedStation && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStation(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className={`relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] shadow-2xl ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}
            >
              <button 
                onClick={() => setSelectedStation(null)}
                className={`absolute top-6 right-6 z-10 p-3 rounded-full transition-colors ${isDark ? 'bg-black/40 text-white hover:bg-black/60' : 'bg-white/90 text-slate-900 hover:bg-white shadow-lg'}`}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-72 md:h-auto">
                  <img 
                    src={selectedStation.imageUrl} 
                    alt={selectedStation.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white md:hidden">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">Station Service</span>
                    <h2 className="text-3xl font-black">{selectedStation.name}</h2>
                  </div>
                </div>

                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                  <div>
                    <div className="hidden md:block mb-8">
                      <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">Partenaire Réseau Elton</span>
                      <h2 className={`text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{selectedStation.name}</h2>
                    </div>

                    <div className="space-y-8">
                      <div className="flex gap-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${isDark ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-blue-50 text-blue-600'}`}>
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Adresse & Localisation</p>
                          <p className={`font-medium text-lg leading-snug ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{selectedStation.address}</p>
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${isDark ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-blue-50 text-blue-600'}`}>
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Ligne Directe</p>
                          <a 
                            href={`tel:${selectedStation.phoneNumber.replace(/\s/g, '')}`}
                            className={`font-black text-2xl hover:text-blue-500 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
                          >
                            {selectedStation.phoneNumber}
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${isDark ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-blue-50 text-blue-600'}`}>
                          <ShoppingBag className="w-6 h-6" />
                        </div>
                        <div className="w-full">
                          <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Services Disponibles</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedStation.services.map((service, idx) => (
                              <span 
                                key={idx} 
                                className={`text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-tight border ${isDark ? 'bg-slate-800/50 text-slate-300 border-slate-700' : 'bg-slate-50 text-slate-600 border-slate-200'}`}
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`tel:${selectedStation.phoneNumber.replace(/\s/g, '')}`}
                      className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-2xl font-bold text-center hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" /> Appeler
                    </a>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${selectedStation.location.lat},${selectedStation.location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold text-center hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-5 h-5" /> Itinéraire
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};