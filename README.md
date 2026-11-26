# Portfolio — Thibaut Lenertz

Site statique du portfolio, prévu pour GitHub Pages : <https://thibaut-sudo.github.io/>

## Contenu

- Accueil, projets, compétences, parcours et contact
- CV téléchargeable : `cv-thibaut-lenertz.pdf`
- Captures d’écran réelles de [Belgian Slot Club](https://belgianslotclub.com) (accueil, championnat, calendrier, marketplace), en mode sombre
- Visuel public et page de connexion de [SONAR](https://sonarartists.be/), plus le schéma d’architecture (ERP interne, pas une capture d’écran métier)
- Captures d’écran réelles de l’application de gestion d’atelier alimentaire (projet confidentiel / nom anonymisé), de Watch Party, de BaladeVélo et du générateur de QR codes

## Déploiement

Dépôt attendu : `Thibaut-sudo/Thibaut-sudo.github.io`, branche `main`, racine `/`.

```bash
# depuis ce dossier, une fois le dépôt créé
git init
git add .
git commit -m "Publier le portfolio"
git branch -M main
git remote add origin https://github.com/Thibaut-sudo/Thibaut-sudo.github.io.git
git push -u origin main
```

Puis activer GitHub Pages : Settings → Pages → Deploy from a branch → `main` / `/` (root).
