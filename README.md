# Portfolio — Prénom Nom

Portfolio professionnel présentant mon parcours en Sécurité des Systèmes d'Information (SSI),
mes compétences en cybersécurité/réseaux/administration système, mes projets et mon expérience.

Site statique en **HTML / CSS / JavaScript pur**, sans framework ni dépendance externe,
conçu pour être hébergé gratuitement sur **GitHub Pages**.

## Structure du projet

```
.
├── index.html          # Page unique du portfolio
├── style.css            # Styles (thème sombre, orienté réseaux/cybersécurité)
├── script.js             # Interactions (menu mobile, navigation active, effets)
├── assets/
│   ├── photo.jpg         # ⚠️ À AJOUTER — votre photo de profil
│   └── cv.pdf            # ⚠️ À AJOUTER — votre CV au format PDF
└── README.md
```

## Personnalisation

Avant publication, complétez les éléments suivants dans `index.html` :

| Élément | Emplacement | Action |
|---|---|---|
| Nom complet | `<title>`, hero, footer | Remplacer "Prénom Nom" |
| Photo de profil | `assets/photo.jpg` | Ajouter votre photo (recommandé : carré, ≥ 400×400 px) |
| CV | `assets/cv.pdf` | Ajouter votre CV au format PDF |
| LinkedIn | liens `linkedin.com/in/VOTRE-PROFIL` | Remplacer par votre URL réelle |
| GitHub | liens `github.com/VOTRE-PROFIL` | Remplacer par votre URL réelle |
| Email / téléphone | section `#contact` | Remplacer les placeholders |
| Établissement, ville | section `#profil` | Compléter les champs `[À compléter]` |
| Dates de stage | section `#experience` | Compléter `[Dates du stage à compléter]` |
| Date de certification | section `#certifications` | Compléter `[Date d'obtention à compléter]` |

### Ajouter une certification

Dans `index.html`, section `#certifications`, dupliquez le bloc modèle en commentaire :

```html
<li class="cert-card reveal">
  <div class="cert-card__icon" aria-hidden="true">✓</div>
  <div>
    <h3>Nom de la certification</h3>
    <p class="cert-card__org">Organisme émetteur</p>
    <p class="cert-card__date">Date d'obtention</p>
  </div>
</li>
```

Aucune modification de CSS ou de JS n'est nécessaire.

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub (par exemple `votre-pseudo.github.io` pour un site racine,
   ou un nom de dépôt classique pour un sous-chemin).
2. Ajoutez ces fichiers à la racine du dépôt (avec le dossier `assets/` contenant
   `photo.jpg` et `cv.pdf`).
3. Poussez sur la branche `main` :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/VOTRE-PROFIL/VOTRE-DEPOT.git
   git push -u origin main
   ```
4. Dans le dépôt GitHub : **Settings → Pages → Source**, sélectionnez la branche
   `main` et le dossier `/ (root)`, puis enregistrez.
5. Le site sera accessible à l'adresse indiquée par GitHub Pages (généralement
   `https://votre-pseudo.github.io/` ou `https://votre-pseudo.github.io/votre-depot/`).

## Notes techniques

- Aucune dépendance externe (pas de framework, pas de CDN) : le site fonctionne
  hors-ligne une fois les fichiers téléchargés.
- Respecte `prefers-reduced-motion` pour les animations.
- Responsive : navigation latérale sur ordinateur, menu déroulant sur mobile.
- Testez localement en ouvrant simplement `index.html` dans un navigateur, ou via
  un serveur local (`python -m http.server`) pour un rendu fidèle à la production.
