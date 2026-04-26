"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-6xl font-black mb-8 italic">Contactez <span className="text-brand-primary">CAMBIS</span></h1>
                <p className="text-xl text-gray-600 leading-relaxed border-l-8 border-brand-primary pl-8">
                  Besoin d'un service de nettoyage à Douala et ses environs ? Notre équipe est sur le pied de guerre pour vous répondre rapidement.
                </p>
              </motion.div>

              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Localisation", content: "Douala, Cameroun" },
                  { 
                    icon: Phone, 
                    title: "Téléphone / WhatsApp", 
                    content: "(+237) 699 68 95 03",
                    link: "https://wa.me/237699689503?text=Bonjour, je souhaite un devis pour un service de nettoyage.",
                    linkText: "Contacter sur WhatsApp"
                  },
                  { icon: Mail, title: "Email", content: "contact@cambis-clean.com" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-8 group"
                  >
                    <div className="w-16 h-16 bg-white shadow-xl rounded-[1.5rem] flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-1 uppercase tracking-tight">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.content}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-brand-secondary font-black hover:underline mt-3"
                        >
                          <MessageSquare size={18} /> {item.linkText}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={itemVariants}
                className="bg-brand-dark text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                 <p className="text-2xl font-black mb-4 italic text-brand-primary">⚡ Intervention Éclair</p>
                 <p className="text-lg opacity-80 leading-relaxed">Nous traitons vos demandes de devis avec priorité absolue. Votre confort n'attend pas.</p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] p-8 md:p-14 border border-gray-100 relative group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-brand-primary/10 transition-colors"></div>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl font-black mb-10 italic border-l-4 border-brand-primary pl-4 uppercase">Obtenir mon devis</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-brand-dark uppercase ml-1 opacity-70">Nom Complet</label>
                        <input
                          required
                          type="text"
                          placeholder="Votre nom"
                          className="w-full px-6 py-4 rounded-[1.2rem] bg-gray-50 border-2 border-transparent focus:border-brand-primary focus:bg-white outline-none transition-all shadow-inner"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-brand-dark uppercase ml-1 opacity-70">Téléphone</label>
                        <input
                          required
                          type="tel"
                          placeholder="+237 6XX XXX XXX"
                          className="w-full px-6 py-4 rounded-[1.2rem] bg-gray-50 border-2 border-transparent focus:border-brand-primary focus:bg-white outline-none transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-black text-brand-dark uppercase ml-1 opacity-70">Type de service</label>
                      <div className="relative">
                        <select className="w-full px-6 py-4 rounded-[1.2rem] bg-gray-50 border-2 border-transparent focus:border-brand-primary focus:bg-white outline-none transition-all appearance-none cursor-pointer shadow-inner pr-12">
                          <option>Nettoyage Résidentiel</option>
                          <option>Nettoyage Fin de Chantier</option>
                          <option>Entretien Bureaux</option>
                          <option>Désinfection</option>
                          <option>Autre</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-black text-brand-dark uppercase ml-1 opacity-70">Message / Détails</label>
                      <textarea
                        rows={5}
                        placeholder="Dites-nous en plus sur vos besoins..."
                        className="w-full px-6 py-4 rounded-[1.2rem] bg-gray-50 border-2 border-transparent focus:border-brand-primary focus:bg-white outline-none transition-all resize-none shadow-inner"
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-brand-primary text-white py-5 rounded-[1.2rem] text-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/40 hover:bg-brand-primary/90 transition-all"
                    >
                      Demander mon devis <Send size={24} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="text-center py-20"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 100 }}
                      className="w-28 h-28 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-secondary/40"
                    >
                      <CheckCircle size={60} />
                    </motion.div>
                    <h2 className="text-4xl font-black mb-6 italic uppercase">C'est envoyé !</h2>
                    <p className="text-gray-600 text-xl mb-12 max-w-sm mx-auto leading-relaxed">Votre demande a été propulsée vers nos services. Nous vous recontactons dans les prochaines heures.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-brand-primary font-black uppercase tracking-widest hover:underline text-lg"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

