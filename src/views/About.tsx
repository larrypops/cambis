"use client";

import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, Heart, Users as UsersIcon } from "lucide-react";

const values = [
  { title: "Professionnalisme", icon: CheckCircle2 },
  { title: "Rigueur", icon: Target },
  { title: "Rapidité", icon: Eye },
  { title: "Qualité", icon: Heart },
  { title: "Satisfaction client", icon: UsersIcon },
];

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-30"
        >
          <img
            src="/images/IMG_4928.jpg"
            alt="Équipe CAMBIS en intervention"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 italic">
              À Propos de <span className="text-brand-primary">CAMBIS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              L'excellence du nettoyage au service de votre image et de votre confort quotidien à Douala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-10 border-b-4 border-brand-primary inline-block pb-2">Qui sommes-nous ?</h2>
            <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-brand-primary first-letter:mr-3 first-letter:float-left">
                CAMBIS est une entreprise spécialisée dans le nettoyage professionnel basée à Douala. Nous sommes nés de la volonté de révolutionner les standards d'hygiène au Cameroun en apportant une approche rigoureuse et des techniques modernes.
              </p>
              <p className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-primary italic">
                Nous accompagnons particuliers et entreprises dans l'entretien et la remise en état de leurs espaces, avec un objectif immuable : <span className="font-bold text-brand-primary">garantir une propreté absolue et un confort durable.</span>
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-12 aspect-square overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="/images/IMG_4929.jpg"
                alt="Détail d'un nettoyage professionnel"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="/images/IMG_4930.jpg"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                alt="Pièce soigneusement nettoyée"
              />
            </motion.div>
            <div className="absolute inset-0 bg-brand-primary/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 transition-all hover:bg-white/10 shadow-2xl"
          >
            <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-extrabold mb-6 italic text-brand-primary">Notre mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Offrir des services de nettoyage irréprochables, alliant rapidité et exigence, pour sublimer le cadre de vie et de travail de nos clients. Nous transformons chaque espace en un lieu sain et inspirant.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 transition-all hover:bg-white/10 shadow-2xl"
          >
            <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center mb-8 -rotate-3">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-extrabold mb-6 italic text-brand-primary">Notre vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              S'imposer comme le leader incontesté du nettoyage professionnel au Cameroun, en misant sur l'innovation, la formation continue de nos agents et une satisfaction client sans compromis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values with staggered reveal */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Nos Valeurs Cardinales</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white px-10 py-8 rounded-[2rem] border-2 border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col items-center gap-4 transition-all hover:border-brand-primary hover:shadow-brand-primary/10 group"
              >
                <div className="w-16 h-16 bg-gray-50 text-brand-primary rounded-full flex items-center justify-center transition-all group-hover:bg-brand-primary group-hover:text-white shadow-inner">
                  <v.icon size={30} />
                </div>
                <span className="font-black text-xl text-brand-dark uppercase tracking-tight">{v.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
           >
            <h2 className="text-4xl font-black mb-10 text-brand-dark">Expertise & Dévouement</h2>
            <p className="text-xl text-brand-primary font-bold mb-8 italic leading-snug">
              "La propreté n'est pas un luxe, c'est une nécessité que nous rendons accessible avec brio."
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Nos agents ne sont pas de simples intervenants ; ce sont des experts formés aux protocoles sanitaires les plus stricts, équipés pour transformer radicalement vos espaces de vie et de travail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Travail d'orfèvre", "Résultats certifiés", "Fiabilité absolue", "Discrétion totale"].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold text-brand-dark">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 bg-brand-primary rounded-[3rem] -rotate-3 z-0 animate-pulse"></div>
             <img
              src="/images/IMG_4931.jpg"
              alt="L'équipe Cambis"
              className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
