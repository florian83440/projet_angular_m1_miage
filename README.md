# Projet Angular - Gestion des Devoirs

## Auteurs
- Florian AIME
- Thibault CANAVAGGIO

## Description 📚
Ce projet, réalisé dans le cadre du Master 1 MIAGE, a pour objectif la gestion des devoirs. Il offre une plateforme permettant de visualiser, ajouter, modifier et supprimer des devoirs. Les données relatives aux devoirs sont stockées dans une base de données MongoDB.

## Accès au Projet 🌐
- [Frontend](https://assignment-front-2c79479bd1b2.herokuapp.com/home)
- [Backend API](https://assignment-back-c0dfe7c8382c.herokuapp.com/api/assignments)
- [Repo du back](https://github.com/florian83440/projet_angular_m1_miage_back)

## Fonctionnalités 🚀
1. **Liste des Devoirs**
   - Affichage de la liste complète des devoirs disponibles.
   - Il est possible d'effectuer un tri poussé sur la liste des devoirs (je suis content de cet ajout)

2. **Détails des Devoirs**
   - Consultation des détails spécifiques d'un devoir sélectionné.

3. **Ajout de Devoirs**
   - Possibilité d'ajouter de nouveaux devoirs.

4. **Modification de Devoirs**
   - Modification des détails d'un devoir existant.

5. **Suppression de Devoirs**
   - Suppression d'un devoir de la liste.

6. **Gestion des Enseignants, Étudiants et Matières**
   - Les données relatives aux enseignants, étudiants et matières sont intégrées directement dans le code (données en dur) en raison de contraintes temporelles.
     
5. **Gestion des droits admin**
   - On ne peut pas accéder à toutes les fonctionnalités si on n'est pas admin.


## Points Forts 🌟
- Style CSS entièrement personnalisé, sans utilisation de Bootstrap ou d'autres frameworks, à l'exception d'Angular Material.
- Utilisation d'Angular Material pour une interface utilisateur moderne et conviviale.

## Instructions d'Installation ⚙️
1. Cloner le projet depuis le repository.
2. Installer les dépendances avec la commande `npm install`.
3. Lancer l'application avec la commande `ng serve`.
4. Accéder à l'application depuis le navigateur à l'adresse `http://localhost:4200/`.

## Technologies Utilisées 💻
- Angular
- MongoDB (pour les données des devoirs)
- Angular Material
- CSS

## Remarques 📌
Le projet est hébergé sur Heroku aux adresses mentionnées ci-dessus. Les données relatives aux enseignants, étudiants et matières sont intégrées dans le code et non stockées dans une base de données MongoDB en raison de contraintes temporelles rencontrées lors du développement.

Le bouton Set Data sur la home page sert à insérer 1000 données en base ! (à utiliser avec modération s'il vous plaît :))

Les login/password sont en dur dans le code
Compte admin
login : admin
password : 1234

Compte non admin
login : flo
password : Azerty0
