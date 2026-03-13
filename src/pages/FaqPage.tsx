import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, User, Store, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CLIENTS, FAQ_PARTNERS } from '../constants/data';

interface FaqPageProps {
  theme: 'white' | 'black';
}

export const FaqPage = ({ theme }: FaqPageProps) => {
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
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${isDark ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
              <HelpCircle className="w-3.5 h-3.5" />
              Centre d'assistance
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Questions & Réponses
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Retrouvez toutes les informations nécessaires pour profiter pleinement du réseau Elton, que vous soyez client ou commerçant partenaire.
            </p>
          </motion.div>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {/* Clients Section */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-2.5 rounded-xl ${isDark ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Pour les Clients</h2>
                <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Tout savoir sur la Carte Elton et ses avantages</p>
              </div>
            </div>

            <div className={`rounded-3xl border p-2 ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/50 border-orange-100'}`}>
              <Accordion type="single" collapsible className="w-full">
                {FAQ_CLIENTS.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`client-${index}`}
                    className={`border-b-0 px-4 mb-2 last:mb-0 rounded-2xl transition-colors ${isDark ? 'hover:bg-slate-800/50' : 'hover:bg-white'}`}
                  >
                    <AccordionTrigger className={`text-left hover:no-underline font-semibold py-4 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      <div className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold ${isDark ? 'bg-slate-800 text-orange-400' : 'bg-white text-orange-600 shadow-sm'}`}>
                          {index + 1}
                        </span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={`text-base leading-relaxed whitespace-pre-line pb-6 pl-9 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.section>

          {/* Partners Section */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-2.5 rounded-xl ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Pour les Commerces Partenaires</h2>
                <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Découvrez comment booster votre activité avec Elton</p>
              </div>
            </div>

            <div className={`rounded-3xl border p-2 ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/50 border-orange-100'}`}>
              <Accordion type="single" collapsible className="w-full">
                {FAQ_PARTNERS.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`partner-${index}`}
                    className={`border-b-0 px-4 mb-2 last:mb-0 rounded-2xl transition-colors ${isDark ? 'hover:bg-slate-800/50' : 'hover:bg-white'}`}
                  >
                    <AccordionTrigger className={`text-left hover:no-underline font-semibold py-4 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                      <div className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600 shadow-sm'}`}>
                          {index + 1}
                        </span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={`text-base leading-relaxed whitespace-pre-line pb-6 pl-9 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.section>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-20 p-8 rounded-3xl text-center border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-orange-50 border-orange-100'}`}
        >
          <h3 className="text-xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h3>
          <p className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Notre équipe est à votre disposition pour vous accompagner dans vos démarches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className={`px-8 py-3 rounded-full font-semibold transition-all ${isDark ? 'bg-white text-black hover:bg-slate-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
              Nous contacter
            </button>
            <button className={`px-8 py-3 rounded-full font-semibold border transition-all ${isDark ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-orange-200 text-orange-700 hover:bg-orange-100'}`}>
              Voir nos stations
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};