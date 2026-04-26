"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight, CheckCircle, Shield, Zap, Sparkles, Building2, Home as HomeIcon, Construction, Bug, Paintbrush, Users, MapPin } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Nettoyage intérieur et extérieur",
    description: "Nettoyage complet de maisons, appartements, villas, cours et espaces extérieurs.",
    icon: HomeIcon,
    image: "/images/IMG_4928.jpg",
  },
  {
    title: "Nettoyage fin de chantier",
    description: "Remise en état après travaux : élimination de poussière, nettoyage des sols, murs et vitres.",
    icon: Construction,
    image: "/images/IMG_4929.jpg",
  },
  {
    title: "Entretien bureaux et immeubles",
    description: "Nettoyage régulier ou ponctuel pour bureaux, immeubles et espaces commerciaux.",
    icon: Building2,
    image: "/images/IMG_4930.jpg",
  },
  {
    title: "Désinfection et assainissement",
    description: "Traitement des surfaces pour éliminer microbes et bactéries efficacement.",
    icon: Bug,
    image: "/images/IMG_4931.jpg",
  },
  {
    title: "Ravalement de façade",
    description: "Nettoyage des murs extérieurs pour redonner une image propre à vos bâtiments.",
    icon: Paintbrush,
    image: "/images/IMG_4928.jpg",
  },
  {
    title: "Placement de personnel",
    description: "Mise à disposition d'agents de nettoyage qualifiés pour missions ponctuelles ou permanentes.",
    icon: Users,
    image: "/images/IMG_4929.jpg",
  },
];

const reasons = [
  {
    title: "Professionnalisme",
    desc: "Équipe qualifiée formée aux techniques modernes de nettoyage.",
    icon: Shield,
  },
  {
    title: "Rapidité d'intervention",
    desc: "Partout à Douala et ses environs, nous répondons à vos urgences.",
    icon: Zap,
  },
  {
    title: "Produits de qualité",
    desc: "Produits efficaces et adaptés à chaque type d'environnement.",
    icon: Sparkles,
  },
  {
    title: "Accompagnement personnalisé",
    desc: "Solutions sur mesure après analyse de vos besoins spécifiques.",
    icon: Users,
  },
];

const steps = [
  { id: "01", title: "Contact", desc: "WhatsApp ou formulaire" },
  { id: "02", title: "Analyse", desc: "Étude de votre besoin" },
  { id: "03", title: "Intervention", desc: "Travail soigné sur site" },
  { id: "04", title: "Résultat", desc: "Satisfaction garantie" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function Home() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f172a] animate-gradient-fluid"></div>
          
          {/* Spinning Gradient Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <motion.div 
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.3),rgba(20,184,166,0.3),transparent)] blur-[80px]"
            />
            <motion.div 
              animate={{ 
                rotate: -360,
              }}
              transition={{ 
                duration: 35, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_180deg,transparent,rgba(20,184,166,0.2),rgba(59,130,246,0.2),transparent)] blur-[100px]"
            />
          </div>
          
          {/* Subtle noise/texture overlay */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-white"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-xl border border-brand-primary/30 px-4 py-2 rounded-full text-brand-primary font-black text-sm uppercase tracking-widest mb-8"
            >
              <Sparkles size={16} /> Leader du nettoyage au Cameroun
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter"
            >
              Le Nettoyage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_auto] animate-gradient-x">Professionnel</span> <br />
              à Douala
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed max-w-xl">
              Entreprise leader pour particuliers et entreprises. Offrez à vos espaces le soin qu'ils méritent.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="btn-primary group transition-all text-xl py-5 px-10">
                Demander un devis <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="https://wa.me/237699689503"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-3 group"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#25D366] group-hover:scale-110 transition-transform"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.896 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp VIP
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand-primary rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="bg-brand-primary py-8 overflow-hidden">
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 md:gap-32"
        >
          {Array(3).fill([
            "Intervention rapide Douala",
            "Équipe professionnelle",
            "Résultats immédiats",
            "Satisfaction garantie",
          ]).flat().map((text, i) => (
            <div key={i} className="flex items-center text-white font-medium text-lg uppercase tracking-wider">
              <CheckCircle size={24} className="mr-3" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir CAMBIS ?</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-brand-primary mx-auto"
            ></motion.div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-6">
                  <reason.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services Professionnels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de solutions d'entretien pour répondre à tous vos besoins, du résidentiel au corporate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20 transition-transform group-hover:rotate-12">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0, 50 0, 100 100" stroke="white" strokeWidth="0.1" fill="transparent" />
            <path d="M0 50 C 20 0, 80 0, 100 50" stroke="white" strokeWidth="0.1" fill="transparent" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
            <p className="text-gray-400">Un processus simple et transparent pour votre confort.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="relative z-10 text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-brand-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl shadow-brand-primary/40 relative overflow-hidden transition-all group-hover:bg-brand-secondary"
                >
                  <span className="relative z-10">{step.id}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-brand-primary">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "CAMBIS assure l'entretien de nos bureaux à Bonamoussadi. Service rapide, efficace et équipe très respectueuse. Je recommande vivement pour toutes les entreprises locales.",
                author: "Entreprise de Logistique",
                location: "Akwa, Douala",
                initial: "E"
              },
              {
                text: "Résultat impeccable après mon déménagement à Yassa. Ils ont nettoyé la villa de fond en comble. Un gain de temps précieux et un résultat très professionnel.",
                author: "Particulier",
                location: "Bonapriso, Douala",
                initial: "M",
                primary: true
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-10 rounded-3xl italic relative group transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50"
              >
                <span className="text-8xl text-brand-primary opacity-10 absolute top-4 left-4 font-serif">“</span>
                <p className="text-lg text-gray-700 relative z-10 mb-8 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center relative z-10">
                  <div className={`w-14 h-14 ${t.primary ? 'bg-brand-primary' : 'bg-brand-dark'} rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{t.author}</p>
                    <p className="text-sm text-gray-500 italic">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intervention Zones with staggered reveal */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 italic border-l-8 border-brand-primary pl-4">Zone d'intervention</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Nous intervenons partout à Douala et ses périphéries. Notre équipe mobile est prête à relever tous vos défis de propreté.
              </p>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {["Akwa", "Bonapriso", "Bonamoussadi", "Makepe", "Logpom", "Yassa", "PK8", "PK12", "Bassa"].map((zone, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "#0ea5e9", color: "white" }}
                    className="flex items-center bg-white p-4 rounded-xl shadow-sm transition-all cursor-default"
                  >
                    <MapPin size={18} className="mr-3" />
                    <span className="text-sm font-bold">{zone}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-primary/10 rounded-[2.5rem] rotate-3 -z-10"></div>
              <div className="aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl relative z-10">
                <img
                  src="/images/IMG_4930.jpg"
                  alt="Carte des zones d'intervention"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-10 -left-10 hidden sm:block bg-brand-primary text-white p-10 rounded-3xl shadow-2xl max-w-xs z-20 border-4 border-white"
              >
                <p className="text-2xl font-bold mb-3">Disponible 6j/7</p>
                <p className="text-base opacity-90 leading-snug">Intervention garantie sous 24h à 48h selon votre secteur.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-primary overflow-hidden relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        ></motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Votre espace mérite <span className="underline decoration-brand-dark decoration-wavy underline-offset-8">le meilleur</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto"
          >
            Contacter CAMBIS dès maintenant pour transformer votre environnement.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.a
              href="https://wa.me/237699689503"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-brand-dark/95 transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(15,23,42,0.3)]"
            >
               WhatsApp : (+237) 699 68 95 03
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
