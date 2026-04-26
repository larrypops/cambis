import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tight">CAMBIS</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Votre partenaire de confiance pour un environnement propre, sain et professionnel à Douala et ses environs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Services</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Nettoyage Résidentiel</Link></li>
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Fin de Chantier</Link></li>
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Entretien Bureaux</Link></li>
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Désinfection</Link></li>
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Ravalement Façade</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Liens Rapides</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-brand-primary transition-colors">Accueil</Link></li>
            <li><Link href="/a-propos" className="hover:text-brand-primary transition-colors">À Propos</Link></li>
            <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Demander un Devis</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-brand-primary mt-1 flex-shrink-0" />
              <span>Douala, Cameroun</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-brand-primary flex-shrink-0" />
              <span>(+237) 699 68 95 03</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-brand-primary flex-shrink-0" />
              <span>contact@cambis-clean.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} CAMBIS. Tous droits réservés. Créé avec soin pour Douala.</p>
      </div>
    </footer>
  );
}
