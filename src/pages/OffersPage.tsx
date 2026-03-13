import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  ChevronRight, 
  Info, 
  Tag, 
  Building2, 
  Filter,
  CreditCard,
  Zap
} from 'lucide-react';
import { PARTNERS } from '../constants/data';

export const OffersPage = ({ theme, cardActive }: { theme: 'white' | 'black', cardActive: boolean }) => {
  const isDark = theme === 'black';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', ...new Set(PARTNERS.map(p => p.category))];

  const filteredPartners = PARTNERS.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          partner.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h1 className={`text-4xl md:text-5xl font-black mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Offres & <span className="text-orange-600">Partenaires</span>
              </h1>
              <p className={`text-lg max-w-2xl transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Découvrez toutes les réductions exclusives disponibles avec votre Carte Elton dans toute la Côte d'Ivoire.
              </p>
            </div>
            
            <div className={`px-6 py-4 rounded-3xl border flex items-center gap-4 transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100 shadow-sm'}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cardActive ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}`}>
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Votre Statut</p>
                <p className={`font-bold ${cardActive ? 'text-green-500' : 'text-orange-500'}`}>
                  {cardActive ? 'Privilèges Activés' : 'Privilèges Inactifs'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 sticky top-20 z-40">
           <div className={`p-4 rounded-[2rem] border backdrop-blur-md transition-colors duration-300 ${isDark ? 'bg-black/60 border-slate-800 shadow-2xl shadow-orange-900/10' : 'bg-white/80 border-orange-100 shadow-xl shadow-orange-100/50'}`}>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                  <input 
                    type="text" 
                    placeholder="Rechercher un partenaire, une ville..."
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-600 transition-all ${isDark ? 'bg-slate-900 text-white placeholder:text-slate-600' : 'bg-slate-50 text-slate-900 placeholder:text-slate-400'}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                  <div className={`flex items-center gap-2 px-3 py-2 mr-2 border-r ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                    <Filter className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                    <span className={`text-sm font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Catégories</span>
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                        selectedCategory === cat 
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                        : isDark ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
           </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`group rounded-[2.5rem] overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isDark ? 'bg-slate-900 border-slate-800 hover:shadow-orange-900/10' : 'bg-white border-orange-100 hover:shadow-orange-100/50'}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-2 rounded-2xl font-black text-xl shadow-lg flex items-center gap-1.5">
                    <Tag className="w-4 h-4" /> -{partner.discount}
                  </div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider">
                        {partner.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{partner.name}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{partner.location}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl mb-8 border border-dashed transition-colors duration-300 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-orange-50/50 border-orange-200'}`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Conditions</p>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{partner.terms}</p>
                  </div>

                  <button 
                    disabled={!cardActive}
                    className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                      cardActive 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20' 
                      : isDark ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {cardActive ? "Profiter de l'offre" : "Carte Inactive"}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Aucun partenaire trouvé</h3>
              <p className="text-slate-500">Essayez d'ajuster votre recherche ou changez de catégorie.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-24 p-8 md:p-16 rounded-[3rem] text-white relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-blue-700 border-b-8 border-blue-900' : 'bg-blue-600 border-b-8 border-blue-800'}`}
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black mb-4">Devenez partenaire Elton</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Rejoignez le premier réseau de fidélité de Côte d'Ivoire et attirez plus de 50 000 clients qualifiés dans vos points de vente.
              </p>
              <Link to="/postuler">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  Postuler au réseau <Zap className="w-5 h-5" fill="currentColor" />
                </button>
              </Link>
            </div>
            <div className="hidden md:block">
               <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Zap className="w-8 h-8 opacity-20" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};