import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

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
import { IMAGES, CONTACT_EMAIL } from '../constants/data';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
  subject: z.string().min(5, { message: 'Le sujet doit contenir au moins 5 caractères.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactPageProps {
  theme: 'white' | 'black';
}

export const ContactPage = ({ theme }: ContactPageProps) => {
  const isDark = theme === 'black';

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    // Simulated email sending
    console.log('Sending email to:', CONTACT_EMAIL);
    console.log('Form data:', values);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message envoyé !', {
      description: `Votre message a été transmis à l'équipe Elton. Nous vous répondrons à ${values.email} sous peu.`,
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    });
    
    form.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: 'Email',
      value: CONTACT_EMAIL,
      description: 'Envoyez-nous un email à tout moment.',
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: 'Téléphone',
      value: '+225 2720 311360',
      description: 'Disponible du lundi au vendredi, 8h-18h.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: 'Siège social',
      value: "Abidjan Marcory, Immeuble Rive Droite, 3 Rue des Brasseurs",
      description: "Notre siège en Côte d'Ivoire.",
    },
  ];

  return (
    <div className={`pt-24 pb-20 transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Contactez-nous
              </h1>
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Vous avez des questions sur la Carte Elton ou souhaitez devenir partenaire ? 
                Notre équipe est là pour vous aider.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border flex items-start gap-4 transition-all ${
                    isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100 shadow-sm'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-orange-50'}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{info.title}</h3>
                    <p className="text-orange-600 font-medium mb-1">{info.value}</p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={IMAGES.CONTACT_HERO} 
                alt="Contact us" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="flex items-center gap-3 text-white">
                  <MessageSquare className="w-6 h-6 text-orange-400" />
                  <p className="font-medium">Support client disponible 24/7 pour les urgences</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 md:p-10 rounded-3xl border ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100 shadow-xl'
            }`}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={isDark ? 'text-slate-300' : 'text-slate-700'}>Nom complet</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Jean Dupont" 
                            {...field} 
                            className={`rounded-xl border-2 focus-visible:ring-orange-500 ${
                              isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-orange-50'
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={isDark ? 'text-slate-300' : 'text-slate-700'}>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="jean@exemple.com" 
                            {...field} 
                            className={`rounded-xl border-2 focus-visible:ring-orange-500 ${
                              isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-orange-50'
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={isDark ? 'text-slate-300' : 'text-slate-700'}>Sujet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Comment devenir partenaire ?" 
                          {...field} 
                          className={`rounded-xl border-2 focus-visible:ring-orange-500 ${
                            isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-orange-50'
                          }`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={isDark ? 'text-slate-300' : 'text-slate-700'}>Votre message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez votre demande en quelques mots..." 
                          className={`min-h-[150px] rounded-xl border-2 focus-visible:ring-orange-500 ${
                            isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-orange-50'
                          }`}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={form.formState.isSubmitting}
                  className="w-full py-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg transition-all shadow-lg shadow-orange-600/20"
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </div>
                  )}
                </Button>
                
                <p className={`text-xs text-center ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
                  Votre message sera envoyé à {CONTACT_EMAIL}.
                </p>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};