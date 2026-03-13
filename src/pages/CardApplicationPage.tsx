import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  Loader2,
  Heart
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FAVORITE_ACTIVITIES, CONTACT_EMAIL } from '../constants/data';

const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit avoir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
  gender: z.string().min(1, "Veuillez sélectionner votre genre"),
  dateOfBirth: z.string().min(1, "La date de naissance est requise"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  address: z.string().min(5, "L'adresse est requise"),
  favoriteActivities: z.array(z.string()).max(3, "Vous ne pouvez choisir que 3 activités maximum").min(1, "Veuillez choisir au moins une activité"),
});

type FormValues = z.infer<typeof formSchema>;

interface CardApplicationPageProps {
  theme: 'white' | 'black';
}

// Updated illustration of a young well-dressed African woman with Elton Card
const MEMBER_ILLUSTRATION = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/african-woman-with-elton-card-illustration-1eede870-1773400407843.webp";

export const CardApplicationPage = ({ theme }: CardApplicationPageProps) => {
  const isDark = theme === 'black';
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      phone: "",
      email: "",
      address: "",
      favoriteActivities: [],
    },
  });

  const selectedActivities = watch("favoriteActivities");

  const toggleActivity = (activity: string) => {
    if (selectedActivities.includes(activity)) {
      setValue("favoriteActivities", selectedActivities.filter(a => a !== activity));
    } else if (selectedActivities.length < 3) {
      setValue("favoriteActivities", [...selectedActivities, activity]);
    } else {
      toast.error("Maximum 3 activités");
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulating email sending logic
    console.log(`Sending application to ${CONTACT_EMAIL}`, data);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Demande envoyée !", {
      description: "Votre dossier est en cours d'examen. Nous vous contacterons bientôt."
    });
  };

  if (isSuccess) {
    return (
      <div className={`min-h-screen pt-32 pb-20 flex items-center justify-center px-4 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-amber-50/30'}`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`max-w-md w-full p-10 rounded-[3rem] text-center border shadow-2xl transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-green-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className={`text-3xl font-extrabold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Demande Reçue !</h2>
          <p className={`mb-10 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Félicitations ! Votre demande de carte Elton a été transmise avec succès à notre équipe. Vous recevrez un email de confirmation à l'adresse indiquée.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
          >
            Retour à l'accueil <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <main className={`min-h-screen pt-24 pb-20 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-amber-50/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className={`inline-flex items-center gap-2 mb-8 font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-orange-600'}`}>
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-8 md:p-12 rounded-[2.5rem] border shadow-xl transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}
          >
            <div className="mb-10">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-4 tracking-widest uppercase transition-colors duration-300 ${isDark ? 'bg-orange-600/20 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
                <Sparkles className="w-3 h-3" /> Demande de Carte
              </span>
              <h1 className={`text-4xl font-extrabold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Obtenez votre <span className="text-orange-600">Carte Elton</span></h1>
              <p className={`transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Remplissez le formulaire ci-dessous pour rejoindre le club Elton et profiter des meilleures offres en Côte d'Ivoire.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <User className="w-4 h-4 text-orange-600" /> Prénom
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="Votre prénom"
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs font-medium">{errors.firstName.message}</p>}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <User className="w-4 h-4 text-orange-600" /> Nom
                  </label>
                  <input
                    {...register("lastName")}
                    placeholder="Votre nom"
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs font-medium">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Gender */}
                <div className="space-y-2">
                  <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <User className="w-4 h-4 text-orange-600" /> Genre
                  </label>
                  <select
                    {...register("gender")}
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all appearance-none ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="masculin">Masculin</option>
                    <option value="féminin">Féminin</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-xs font-medium">{errors.gender.message}</p>}
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Calendar className="w-4 h-4 text-orange-600" /> Date de naissance
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth")}
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-xs font-medium">{errors.dateOfBirth.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Phone className="w-4 h-4 text-orange-600" /> Téléphone
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+225 00 00 00 00 00"
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Mail className="w-4 h-4 text-orange-600" /> Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="votre@email.com"
                    className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <MapPin className="w-4 h-4 text-orange-600" /> Adresse de résidence (Abidjan, Cocody, etc.)
                </label>
                <textarea
                  {...register("address")}
                  placeholder="Ex: Riviera Palmeraie, Rue I12, Villa 45"
                  rows={2}
                  className={`w-full px-5 py-3.5 rounded-xl border outline-none transition-all resize-none ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                />
                {errors.address && <p className="text-red-500 text-xs font-medium">{errors.address.message}</p>}
              </div>

              {/* Favorite Activities */}
              <div className="space-y-4">
                <label className={`text-sm font-bold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Heart className="w-4 h-4 text-orange-600" /> Vos 3 activités favorites
                  <span className="text-[10px] font-normal opacity-60 ml-auto">{selectedActivities.length}/3 sélectionnés</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {FAVORITE_ACTIVITIES.map((activity) => {
                    const isSelected = selectedActivities.includes(activity);
                    return (
                      <button
                        key={activity}
                        type="button"
                        onClick={() => toggleActivity(activity)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                          isSelected 
                            ? 'bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20' 
                            : isDark ? 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500' : 'bg-white border-slate-200 text-slate-600 hover:border-orange-300'
                        }`}
                      >
                        {activity}
                      </button>
                    );
                  })}
                </div>
                {errors.favoriteActivities && <p className="text-red-500 text-xs font-medium">{errors.favoriteActivities.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200/20 hover:bg-blue-700 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>Soumettre ma demande <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Side Illustration */}
          <div className="hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute inset-0 blur-[100px] rounded-full -z-10 transition-colors duration-300 ${isDark ? 'bg-orange-600/10' : 'bg-orange-400/10'}`} />
              <img 
                src={MEMBER_ILLUSTRATION} 
                alt="Membre Elton avec Carte" 
                className={`rounded-[3rem] shadow-2xl border-8 w-full transition-colors duration-300 ${isDark ? 'border-slate-800' : 'border-white'}`}
              />
              
              <div className={`absolute -bottom-8 -right-8 p-8 rounded-[2rem] border shadow-2xl transition-colors duration-300 max-w-[280px] ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className={`font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>Avantages Inclus</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Accès au réseau de 100+ partenaires",
                    "Jusqu'à -25% de réduction",
                    "Service client prioritaire",
                    "Offres exclusives anniversaires"
                  ].map((item, idx) => (
                    <li key={idx} className={`text-xs flex items-start gap-2 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};