import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  LogIn, 
  ArrowLeft, 
  Loader2, 
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage = ({ theme }: { theme: 'white' | 'black' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const isDark = theme === 'black';

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;

      toast.success("Connexion réussie !");
      navigate('/mon-compte');
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de la connexion");
      toast.error("Erreur de connexion");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center pt-20 pb-12 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] border shadow-2xl transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-100'}`}>
          {/* Form Side */}
          <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center">
            <Link to="/" className={`inline-flex items-center gap-2 mb-12 font-medium transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>
              <ArrowLeft size={18} /> Retour à l'accueil
            </Link>

            <div className="mb-10">
              <h1 className={`text-4xl font-black mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Ravi de vous <br />
                <span className="text-orange-600 italic">revoir</span>
              </h1>
              <p className={`transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Connectez-vous pour accéder à votre espace personnel et vos avantages.
              </p>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-start gap-3"
              >
                <AlertCircle className="shrink-0 w-5 h-5" />
                <p>{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Mail className="w-4 h-4 text-orange-600" /> Adresse E-mail
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="votre@email.com"
                  className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                />
                {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Lock className="w-4 h-4 text-orange-600" /> Mot de passe
                  </label>
                  <button type="button" className="text-xs font-semibold text-orange-600 hover:underline">Mot de passe oublié ?</button>
                </div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all ${isDark ? 'bg-black border-slate-800 text-white focus:border-orange-600' : 'bg-slate-50 border-slate-100 focus:bg-white focus:border-orange-500'}`}
                />
                {errors.password && <p className="text-red-500 text-xs font-medium">{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-200/20 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><LogIn className="w-5 h-5" /> Se connecter</>}
              </button>
            </form>

            <p className={`mt-10 text-center text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Pas encore de compte ? <Link to="/inscription" className="text-orange-600 font-bold hover:underline">S'inscrire</Link>
            </p>
          </div>

          {/* Illustration Side */}
          <div className="hidden lg:block relative">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e325981e-a3fa-4148-a322-f63d5532ab97/login-hero-e13d9f4e-1773431379394.webp"
              alt="Login Illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-20">
              <div className="max-w-md">
                <div className="flex gap-2 mb-6">
                  {[1,2,3].map(i => <ShieldCheck key={i} className="w-6 h-6 text-orange-500 fill-current" />)}
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Véritablement sécurisé.</h3>
                <p className="text-slate-300 text-lg">Vos données et vos avantages sont protégés par notre infrastructure de classe mondiale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};