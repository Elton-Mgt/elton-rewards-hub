import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  User, 
  Settings, 
  LogOut, 
  Fuel, 
  ShoppingBag, 
  Award, 
  QrCode, 
  ChevronRight,
  Calendar,
  Zap
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface DashboardPageProps {
  theme: 'white' | 'black';
  cardActive: boolean;
  daysRemaining: number;
}

export const DashboardPage = ({ theme, cardActive, daysRemaining }: DashboardPageProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const isDark = theme === 'black';

  const handleSignOut = async () => {
    await signOut();
    toast.info("D\u00e9connexion r\u00e9ussie");
    navigate('/');
  };

  return (
    <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar / Profile Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-8 rounded-[2.5rem] border transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-600 mb-6">
                  <User size={48} />
                </div>
                <h2 className={`text-2xl font-black transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {user?.user_metadata?.full_name || 'Membre Elton'}
                </h2>
                <p className={`text-sm mb-8 transition-colors duration-300 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  {user?.email}
                </p>
                <div className="w-full space-y-3">
                  <button className={`w-full py-4 rounded-2xl flex items-center justify-between px-6 transition-all ${isDark ? 'bg-black border border-slate-800 text-white hover:border-orange-600' : 'bg-slate-50 text-slate-900 hover:bg-orange-50 hover:text-orange-600'}`}>
                    <div className="flex items-center gap-3">
                      <Settings size={20} />
                      <span className="font-bold">Param\u00e8tres</span>
                    </div>
                    <ChevronRight size={18} />
                  </button>
                  <button 
                    onClick={handleSignOut}
                    className={`w-full py-4 rounded-2xl flex items-center justify-between px-6 transition-all text-red-500 ${isDark ? 'bg-black border border-slate-800 hover:border-red-500/30' : 'bg-slate-50 hover:bg-red-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <LogOut size={20} />
                      <span className="font-bold">D\u00e9connexion</span>
                    </div>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`p-8 rounded-[2.5rem] border transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
            >
               <h3 className={`text-lg font-black mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 <Award className="text-orange-600" /> Vos Statisiques
               </h3>
               <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Points cumul\u00e9s</span>
                    <span className="font-black text-orange-600 text-xl">1,250 PTS</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>\u00c9conomies totales</span>
                    <span className="font-black text-blue-600 text-xl">12,500 FCFA</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Partenaires visit\u00e9s</span>
                    <span className="font-black text-green-600 text-xl">12</span>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Main Content / Card Section */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group"
            >
               <div className={`p-10 md:p-14 rounded-[3rem] border transition-all duration-500 relative overflow-hidden ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}>
                  {/* Card Glow Effect */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Virtual Card Illustration */}
                    <div className="relative">
                      <div className="w-[300px] aspect-[1.586/1] rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-black p-8 text-white shadow-2xl relative overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 blur-3xl rounded-full" />
                        <div className="flex justify-between items-start relative z-10">
                           <div className="flex items-center gap-1.5">
                              <Zap className="text-orange-500" fill="currentColor" size={16} />
                              <span className="font-black text-lg tracking-tighter">ELTON</span>
                           </div>
                           <CreditCard className="text-white/40" size={24} />
                        </div>
                        <div className="mt-12 mb-6 relative z-10">
                           <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Num\u00e9ro de carte</div>
                           <div className="font-mono text-xl tracking-[0.2em] font-medium">\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4021</div>
                        </div>
                        <div className="flex justify-between items-end relative z-10">
                           <div>
                              <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Membre depuis</div>
                              <div className="font-medium text-sm">03/24</div>
                           </div>
                           <div className="w-12 h-8 bg-orange-500/80 rounded-md backdrop-blur-sm" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                       <div className="flex items-center gap-3 mb-4">
                         <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${cardActive ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                           {cardActive ? 'Carte Activ\u00e9e' : 'Carte Inactive'}
                         </div>
                       </div>
                       <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                         Votre Status <span className="text-orange-600">Loyalty</span>
                       </h2>
                       <p className={`mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                         {cardActive 
                           ? `Vous b\u00e9n\u00e9ficiez actuellement de toutes les r\u00e9ductions partenaires. Votre plein chez Elton vous a accord\u00e9 un acc\u00e8s illimit\u00e9.` 
                           : `Votre carte est actuellement inactive. Faites un plein d'essence dans une station Elton pour r\u00e9activer vos avantages partenaires.`
                         }
                       </p>
                       {cardActive && (
                         <div className={`p-6 rounded-2xl flex items-center gap-4 ${isDark ? 'bg-black/40' : 'bg-orange-50'}`}>
                            <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white shrink-0">
                              <Calendar size={24} />
                            </div>
                            <div>
                               <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Temps restant</p>
                               <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{daysRemaining} Jours</p>
                            </div>
                         </div>
                       )}
                    </div>
                  </div>
               </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`p-10 rounded-[2.5rem] border transition-colors duration-300 flex flex-col items-center text-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
               >
                 <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                   <QrCode size={32} />
                 </div>
                 <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Mon Code QR</h3>
                 <p className={`text-sm mb-8 leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Pr\u00e9sentez ce code chez nos partenaires pour b\u00e9n\u00e9ficier imm\u00e9diatement de vos r\u00e9ductions.</p>
                 <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">Afficher le code</button>
               </motion.div>

               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`p-10 rounded-[2.5rem] border transition-colors duration-300 flex flex-col items-center text-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
               >
                 <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                   <ShoppingBag size={32} />
                 </div>
                 <h3 className={`text-xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Trouver un Partenaire</h3>
                 <p className={`text-sm mb-8 leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Explorez la liste des commerces \u00e0 proximit\u00e9 qui acceptent votre carte Elton.</p>
                 <button 
                  onClick={() => navigate('/offres')}
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${isDark ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                   Voir les offres
                 </button>
               </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-10 rounded-[2.5rem] border transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
            >
               <h3 className={`text-xl font-black mb-8 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 <Fuel className="text-orange-600" /> Derni\u00e8res Transactions
               </h3>
               <div className="space-y-6">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className={`flex items-center justify-between pb-6 border-b last:border-0 last:pb-0 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                      <div className="flex items-center gap-4">
                         <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
                            <Fuel className="text-orange-600" size={20} />
                         </div>
                         <div>
                            <p className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Plein Super - Station Cocody</p>
                            <p className="text-xs text-slate-500">12 Octobre 2023</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="font-black text-orange-600">-25,500 FCFA</p>
                         <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">+125 Points</p>
                      </div>
                   </div>
                 ))}
               </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
};