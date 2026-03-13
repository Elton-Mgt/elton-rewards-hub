import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Users, Store, Mail, Phone, ChevronRight } from 'lucide-react';
import { CLIENT_FAQ, PARTNER_FAQ, IMAGES } from '../constants/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.FAQ_HERO}
            alt="FAQ Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-orange-800/85 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6"
          >
            <HelpCircle size={16} className="text-orange-400" />
            <span>Support & Assistance</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Aide & FAQ
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Retrouvez toutes les réponses à vos questions sur la Carte Elton et nos partenariats exclusifs.
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-12">
        {/* Navigation Tabs (Smooth Scroll) */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mb-12 flex flex-col sm:flex-row gap-2">
          <button 
            onClick={() => document.getElementById('faq-clients')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl transition-all hover:bg-slate-50 font-semibold text-slate-700 hover:text-orange-600"
          >
            <Users size={20} />
            Espace Clients
          </button>
          <div className="hidden sm:block w-px bg-slate-100 h-10 self-center" />
          <button 
            onClick={() => document.getElementById('faq-partners')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl transition-all hover:bg-slate-50 font-semibold text-slate-700 hover:text-blue-600"
          >
            <Store size={20} />
            Espace Partenaires
          </button>
        </div>

        <div className="space-y-24">
          {/* Client FAQ Section */}
          <section id="faq-clients" className="scroll-mt-32">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="p-4 rounded-3xl bg-orange-100 text-orange-600 mb-4">
                <Users size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Questions / Réponses pour les Clients</h2>
              <p className="text-slate-500 max-w-md">Découvrez comment profiter pleinement de vos avantages Elton.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {CLIENT_FAQ.map((faq, index) => (
                <AccordionItem 
                  key={`client-faq-${index}`} 
                  value={`client-item-${index}`}
                  className="border rounded-2xl px-6 bg-white shadow-sm border-slate-100 transition-all duration-300 data-[state=open]:border-orange-200 data-[state=open]:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-slate-800 data-[state=open]:text-orange-600">
                    <div className="flex items-start gap-4">
                      <span className="text-orange-200 font-bold">Q{index + 1}</span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed pb-6 text-slate-600 whitespace-pre-line pl-10 border-t border-slate-50 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Partner FAQ Section */}
          <section id="faq-partners" className="scroll-mt-32">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="p-4 rounded-3xl bg-blue-100 text-blue-600 mb-4">
                <Store size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Questions / Réponses pour les Commerces Partenaires</h2>
              <p className="text-slate-500 max-w-md">Comment intégrer le réseau Elton et dynamiser votre point de vente.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {PARTNER_FAQ.map((faq, index) => (
                <AccordionItem 
                  key={`partner-faq-${index}`} 
                  value={`partner-item-${index}`}
                  className="border rounded-2xl px-6 bg-white shadow-sm border-slate-100 transition-all duration-300 data-[state=open]:border-blue-200 data-[state=open]:shadow-md overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-slate-800 data-[state=open]:text-blue-600">
                    <div className="flex items-start gap-4">
                      <span className="text-blue-200 font-bold">Q{index + 1}</span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed pb-6 text-slate-600 whitespace-pre-line pl-10 border-t border-slate-50 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -right-20 -top-20 p-24 opacity-5 bg-orange-600 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 p-24 opacity-5 bg-blue-600 rounded-full blur-3xl" />
            
            <HelpCircle size={64} className="mx-auto mb-8 text-orange-500 opacity-20" />
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg relative z-10">
              Notre équipe d'assistance est là pour vous guider. N'hésitez pas à nous contacter pour toute question spécifique.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a 
                href="mailto:contact@elton.com" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 w-full sm:w-auto justify-center group shadow-lg shadow-orange-900/20"
              >
                <Mail size={20} /> Nous écrire <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+22500000000" 
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 w-full sm:w-auto justify-center backdrop-blur-md border border-white/10"
              >
                <Phone size={20} /> Appeler le support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;