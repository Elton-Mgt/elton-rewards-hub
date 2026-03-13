import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Store, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowLeft,
  Briefcase,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "Le nom de l'entreprise doit comporter au moins 2 caractères.",
  }),
  contactName: z.string().min(2, {
    message: "Le nom du responsable doit comporter au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().min(8, {
    message: "Veuillez entrer un numéro de téléphone valide (Côte d'Ivoire).",
  }),
  businessType: z.string().min(1, {
    message: "Veuillez sélectionner un type d'activité.",
  }),
  offerDetails: z.string().min(10, {
    message: "Veuillez donner quelques détails sur l'offre que vous souhaitez proposer.",
  }),
});

interface PartnerApplicationPageProps {
  theme: 'white' | 'black';
}

export const PartnerApplicationPage = ({ theme }: PartnerApplicationPageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isDark = theme === 'black';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      offerDetails: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulated submission to Kristalwos@gmail.com
    console.log("Submitting partner application to Kristalwos@gmail.com:", values);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Demande envoyée avec succès !", {
      description: "Notre équipe (Kristalwos@gmail.com) vous contactera sous 48h.",
      duration: 5000,
    });
  };

  if (isSubmitted) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-amber-50/20'}`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className={`max-w-xl w-full p-10 md:p-14 rounded-[3rem] border text-center shadow-3xl transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800 shadow-orange-900/10' : 'bg-white border-orange-100 shadow-orange-200/30'}`}
        >
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-lg shadow-green-500/20">
            <CheckCircle2 size={48} />
          </div>
          <h2 className={`text-4xl font-extrabold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Félicitations !
          </h2>
          <p className={`text-lg mb-12 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
            Votre dossier de partenariat pour <span className="text-orange-600 font-bold">{form.getValues('businessName')}</span> a été transmis avec succès à l'équipe Elton via <a href="mailto:Kristalwos@gmail.com" className="font-semibold text-blue-600 hover:underline">Kristalwos@gmail.com</a>.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full h-16 rounded-2xl text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                Retour à l'accueil
              </Button>
            </Link>
            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Une confirmation a été envoyée à {form.getValues('email')}.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-32 pb-24 transition-colors duration-300 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/" className={`inline-flex items-center gap-2 mb-10 font-medium transition-colors group ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
          <div className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-slate-800' : 'bg-slate-100 group-hover:bg-orange-100 group-hover:text-orange-600'}`}>
            <ArrowLeft size={18} />
          </div>
          Retour à l'accueil
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 transition-colors duration-300 ${isDark ? 'bg-orange-600/20 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
              <Globe className="w-4 h-4" /> Partenariat Elton Côte d'Ivoire
            </div>
            
            <h1 className={`text-5xl lg:text-7xl font-black mb-10 leading-[1.1] transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Boostez votre <br />
              <span className="text-orange-600 italic">croissance</span> avec nous
            </h1>
            
            <p className={`text-xl mb-12 leading-relaxed max-w-xl transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Rejoignez le premier réseau de fidélité en Côte d'Ivoire. Transformez les clients de passage en habitués fidèles grâce à la puissance d'Elton.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {[
                { 
                  icon: <Users className="w-6 h-6" />, 
                  title: "+10k Clients", 
                  desc: "Accès direct à une base de clients fidèles et actifs en Côte d'Ivoire.",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10"
                },
                { 
                  icon: <TrendingUp className="w-6 h-6" />, 
                  title: "Chiffre d'Affaire", 
                  desc: "Augmentez votre volume de ventes grâce à nos campagnes marketing ciblées.",
                  color: "text-orange-500",
                  bg: "bg-orange-500/10"
                },
                { 
                  icon: <Store className="w-6 h-6" />, 
                  title: "Zéro Frais", 
                  desc: "Pas de frais d'inscription ou d'installation. Payez uniquement à la performance.",
                  color: "text-green-500",
                  bg: "bg-green-500/10"
                },
                { 
                  icon: <Briefcase className="w-6 h-6" />, 
                  title: "Support Dédié", 
                  desc: "Un accompagnement personnalisé par nos équipes à Abidjan.",
                  color: "text-purple-500",
                  bg: "bg-purple-500/10"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className={`text-lg font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className={`relative rounded-[3rem] overflow-hidden border-4 transition-colors duration-300 group ${isDark ? 'border-slate-800' : 'border-white shadow-2xl shadow-orange-100/50'}`}>
               <img 
                 src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/business-partnership-ivory-coast-c53407e0-1773397018425.webp" 
                 alt="Environnement professionnel" 
                 className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                 <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(s => <div key={s} className="w-4 h-4 text-amber-400 fill-current">★</div>)}
                 </div>
                 <p className="text-white text-xl font-medium leading-relaxed italic mb-4">
                   "Depuis que nous sommes partenaires Elton, notre trafic en magasin a augmenté de 25%. C'est simple, efficace et local."
                 </p>
                 <p className="text-orange-400 font-bold text-sm uppercase tracking-widest">— Gérant, Boutique Plateau</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`sticky top-32 p-10 md:p-14 rounded-[3.5rem] border shadow-3xl transition-all duration-500 ${isDark ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800 shadow-orange-900/5 hover:border-orange-500/30' : 'bg-white border-orange-100 shadow-orange-200/40 hover:border-blue-200'}`}
          >
            <div className="mb-12">
              <h2 className={`text-3xl font-black transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Postuler au réseau</h2>
              <div className="w-16 h-1 bg-orange-600 mt-4 rounded-full" />
              <p className={`text-base mt-6 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Soumettez votre candidature pour devenir partenaire officiel d'Elton.</p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Nom de l'entreprise</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                            <Input placeholder="Ex: Boutique Abidjan" className={`pl-12 h-14 rounded-2xl transition-all font-medium ${isDark ? 'bg-black border-slate-800 focus:border-orange-600 text-white' : 'bg-amber-50/30 border-orange-100 focus:border-blue-600'}`} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Nom complet du contact</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                            <Input placeholder="Votre nom" className={`pl-12 h-14 rounded-2xl transition-all font-medium ${isDark ? 'bg-black border-slate-800 focus:border-orange-600 text-white' : 'bg-amber-50/30 border-orange-100 focus:border-blue-600'}`} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Email professionnel</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                            <Input type="email" placeholder="contact@entreprise.ci" className={`pl-12 h-14 rounded-2xl transition-all font-medium ${isDark ? 'bg-black border-slate-800 focus:border-orange-600 text-white' : 'bg-amber-50/30 border-orange-100 focus:border-blue-600'}`} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Téléphone (WhatsApp)</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                            <Input placeholder="+225 00 00 00 00" className={`pl-12 h-14 rounded-2xl transition-all font-medium ${isDark ? 'bg-black border-slate-800 focus:border-orange-600 text-white' : 'bg-amber-50/30 border-orange-100 focus:border-blue-600'}`} {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Secteur d'activité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={`h-14 rounded-2xl transition-all font-medium ${isDark ? 'bg-black border-slate-800 text-white' : 'bg-amber-50/30 border-orange-100'}`}>
                            <SelectValue placeholder="Sélectionnez votre domaine" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className={isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white text-slate-900 rounded-2xl'}>
                          <SelectItem value="restaurant" className="rounded-xl">Restauration & Gastronomie</SelectItem>
                          <SelectItem value="shopping" className="rounded-xl">Shopping & Mode</SelectItem>
                          <SelectItem value="sante" className="rounded-xl">Santé & Bien-être</SelectItem>
                          <SelectItem value="loisirs" className="rounded-xl">Loisirs & Culture</SelectItem>
                          <SelectItem value="technologie" className="rounded-xl">Technologie & Services</SelectItem>
                          <SelectItem value="autre" className="rounded-xl">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="offerDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Avantages proposés pour nos membres</FormLabel>
                      <FormControl>
                        <div className="relative group">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-orange-600 transition-colors" />
                          <Textarea 
                            placeholder="Décrivez brièvement la réduction ou l'avantage que vous souhaitez offrir (ex: -15% sur la carte)..." 
                            className={`pl-12 pt-4 min-h-[140px] rounded-2xl transition-all font-medium leading-relaxed ${isDark ? 'bg-black border-slate-800 focus:border-orange-600 text-white' : 'bg-amber-50/30 border-orange-100 focus:border-blue-600'}`} 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-2xl font-black text-lg bg-blue-600 hover:bg-blue-700 text-white transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma candidature <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
                
                <div className={`p-6 rounded-2xl border flex items-start gap-4 transition-colors duration-300 ${isDark ? 'bg-black border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                   <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-orange-600" />
                   </div>
                   <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Votre dossier sera traité manuellement par notre équipe. En soumettant, vous acceptez d'être recontacté par <a href="mailto:Kristalwos@gmail.com" className="text-orange-600 font-bold hover:underline">Kristalwos@gmail.com</a> pour valider votre intégration au réseau.
                  </p>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};