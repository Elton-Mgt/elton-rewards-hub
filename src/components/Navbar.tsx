import React, { useState } from 'react';
import { Zap, Sun, Moon, X, Menu, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants/data';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'sonner';

interface NavbarProps {
  cardActive: boolean;
  theme: 'white' | 'black';
  toggleTheme: () => void;
}

export const Navbar = ({ cardActive, theme, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDark = theme === 'black';
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    toast.info("Déconnexion réussie");
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? 'bg-black/90 border-slate-800' : 'bg-white/90 border-orange-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" fill="currentColor" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>ELTON</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-slate-300 hover:text-orange-400' : 'text-slate-600 hover:text-orange-600'} ${location.pathname === link.href ? 'text-orange-600' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full transition-colors duration-300 ${isDark ? 'bg-slate-800 text-amber-400' : 'bg-orange-50 text-orange-600'}`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {user ? (
                <div className="flex items-center gap-3">
                  <Link to="/mon-compte" className="flex items-center gap-2">
                    <div className={`p-2 rounded-full ${isDark ? 'bg-slate-800 text-white' : 'bg-orange-100 text-orange-600'}`}>
                      <User size={18} />
                    </div>
                    <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Mon Compte</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className={`p-2 rounded-full transition-colors ${isDark ? 'text-slate-400 hover:text-red-500' : 'text-slate-500 hover:text-red-600'}`}
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/connexion">
                    <button className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'text-white hover:text-orange-400' : 'text-slate-600 hover:text-orange-600'}`}>Connexion</button>
                  </Link>
                  <Link to="/inscription">
                    <button className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'bg-white text-black hover:bg-slate-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>S'inscrire</button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors duration-300 ${isDark ? 'bg-slate-800 text-amber-400' : 'bg-orange-50 text-orange-600'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black border-slate-800' : 'bg-white border-orange-100'}`}
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg font-medium transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className={`pt-4 border-t space-y-3 transition-colors duration-300 ${isDark ? 'border-slate-800' : 'border-orange-100'}`}>
                {user ? (
                  <>
                    <Link to="/mon-compte" onClick={() => setIsMenuOpen(false)} className="block">
                      <button className="w-full py-3 rounded-xl font-medium bg-blue-600 text-white">Mon Compte</button>
                    </Link>
                    <button 
                      onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                      className="w-full py-3 rounded-xl font-medium border border-red-500/30 text-red-500"
                    >
                      Déconnexion
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/connexion" onClick={() => setIsMenuOpen(false)} className="block">
                      <button className={`w-full py-3 rounded-xl font-medium transition-colors ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`}>Connexion</button>
                    </Link>
                    <Link to="/inscription" onClick={() => setIsMenuOpen(false)} className="block">
                      <button className="w-full py-3 rounded-xl font-medium bg-blue-600 text-white">S'inscrire</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};