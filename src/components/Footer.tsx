import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = ({ theme }: { theme: 'white' | 'black' }) => {
  const isDark = theme === 'black';
  return (
    <footer className={`pt-24 pb-12 border-t transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-amber-50/50 border-orange-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
                <Zap className="w-5 h-5" fill="currentColor" />
              </div>
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>ELTON</span>
            </div>
            <p className={`max-w-sm mb-8 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Le premier réseau de fidélité intelligente en Côte d'Ivoire, pour une consommation qui a du sens.
            </p>
            <div className="flex gap-4">
              <div className={`w-10 h-10 border rounded-xl flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-black border-slate-800 text-orange-400 hover:text-orange-500' : 'bg-white border-orange-100 text-orange-400 hover:text-orange-600 cursor-pointer'}`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className={`font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Plateforme</h4>
            <ul className={`space-y-4 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <li><Link to="/" className="hover:text-orange-600 transition-colors">Fonctionnement</Link></li>
              <li><Link to="/" className="hover:text-orange-600 transition-colors">Stations Elton</Link></li>
              <li><Link to="/offres" className="hover:text-orange-600 transition-colors">Réseau partenaire</Link></li>
              <li><Link to="/postuler" className="hover:text-orange-600 transition-colors font-bold text-orange-600">Postuler au réseau</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Support</h4>
            <ul className={`space-y-4 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <li><Link to="/faq" className="hover:text-orange-600 transition-colors">Aide & FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link></li>
              <li><Link to="/politique-de-confidentialite" className="hover:text-orange-600 transition-colors">Confidentialité</Link></li>
              <li><Link to="/cgu" className="hover:text-orange-600 transition-colors">Conditions générales</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium transition-colors duration-300 ${isDark ? 'border-slate-800 text-slate-500' : 'border-orange-100 text-slate-400'}`}>
          <p>© 2025 Elton Network Côte d'Ivoire. Tous droits réservés.</p>
          <div className="flex gap-8">
            <span>FR / EN</span>
            <span className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Statut : Opérationnel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};