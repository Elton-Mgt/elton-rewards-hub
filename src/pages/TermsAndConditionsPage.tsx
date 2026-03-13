import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import { TERMS_AND_CONDITIONS, LAST_UPDATE } from '../constants/termsAndConditions';

interface TermsAndConditionsPageProps {
  theme: 'white' | 'black';
}

export const TermsAndConditionsPage = ({ theme }: TermsAndConditionsPageProps) => {
  const isDark = theme === 'black';

  return (
    <div className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${isDark ? 'bg-blue-900/40 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              Cadre Juridique
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Conditions Générales d'Utilisation
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Ces conditions régissent votre utilisation du programme de fidélité Elton et de la carte Elton (virtuelle ou physique).
            </p>
            <p className={`mt-4 text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Dernière mise à jour : {LAST_UPDATE}
            </p>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50/50 border-orange-100'}`}
        >
          <div className="p-8 md:p-12 space-y-12">
            {TERMS_AND_CONDITIONS.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold ${isDark ? 'bg-slate-800 text-orange-400' : 'bg-white text-orange-600 shadow-sm border border-orange-100'}`}>
                    {index + 1}
                  </div>
                  <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {section.title}
                  </h2>
                </div>
                <div className={`text-base leading-relaxed whitespace-pre-line pl-11 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {section.content}
                </div>
                {index < TERMS_AND_CONDITIONS.length - 1 && (
                  <div className={`h-px w-full mt-12 ${isDark ? 'bg-slate-800' : 'bg-orange-100'}`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-12 p-6 rounded-2xl text-center flex items-center justify-center gap-3 border ${isDark ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-blue-50/50 border-blue-100 text-slate-600'}`}
        >
          <FileText className="w-5 h-5 text-blue-500" />
          <p className="text-sm">
            Pour toute question concernant ces conditions, veuillez nous contacter à l'adresse indiquée à l'Article 8.
          </p>
        </motion.div>
      </div>
    </div>
  );
};