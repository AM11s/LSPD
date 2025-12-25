# LSPD — Site de candidature et manuel (GitHub Pages)

Petit site statique pour centraliser le manuel des branches, règles RP et un formulaire de recrutement (Formspree).

Installation / publication sur GitHub Pages

1. Créez un repo sur GitHub (par exemple `lspd-site`).
2. Placez les fichiers du dossier `site/` dans la branche `main` du repo.
3. Dans les réglages du repo -> Pages, choisissez la branche `main` et le répertoire `/` puis activez Pages.

Git local & push

J'ai initialisé le site et je peux créer un commit local pour vous. Pour pousser vers GitHub, fournissez l'URL du repo distant (format `https://github.com/USERNAME/REPO.git`) ou ajoutez le remote et poussez vous-même.

Exemple de commandes pour pousser après ajout du remote :

```bash
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Configurer Formspree

- Ouvrez `recrutement.html` et remplacez `YOUR_FORMSPREE_ID` par votre identifiant Formspree (format `f/XXXXX`).
- Alternativement, créez un formulaire sur https://formspree.io et copiez l'URL fournie.

Notes

- Le formulaire envoie le `character_name`, `discord_name`, `discord_id`, `experience` et `scenario_answer`.
- Le site est volontairement simple pour être compatible GitHub Pages.

Si vous voulez, je peux :
- Remplir les sections du manuel avec plus de détails.
- Adapter le design ou ajouter un logo.
- Préparer un commit Git et pousser vers un repo si vous me fournissez l'accès ou les informations.
