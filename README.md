# CAMBIS - Site Next.js (App Router)

Site vitrine CAMBIS migré de Vite/React vers Next.js App Router.

## Prérequis

- Node.js 18.18+ (ou 20+ recommandé)
- npm

## Lancement local

1. Installer les dépendances:
   `npm install`
2. Démarrer en dev:
   `npm run dev`
3. Ouvrir:
   `http://localhost:3000`

## Scripts utiles

- `npm run dev` : développement
- `npm run build` : build production
- `npm run start` : lancement production
- `npm run lint` : lint Next.js
- `npm run typecheck` : vérification TypeScript

## Images locales

- Les images du projet sont servies depuis `public/images`.
- Toutes les références frontend utilisent des chemins racine du type `/images/IMG_4928.jpg`.

## Déploiement Vercel

Vérifier les paramètres suivants dans Vercel:

- Framework Preset: `Next.js`
- Root Directory: racine du dépôt
- Build Command: `npm run build`
- Install Command: `npm install`

Si Vercel continue d'utiliser un ancien cache, relancer un déploiement avec cache vidé.
