![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

# Frontend Projet Angular - Gestion des Devoirs

## Auteurs 👨‍💻
- **Florian AIME**
- **Thibault CANAVAGGIO**

## Description 📚
Ce projet, réalisé dans le cadre du Master 1 MIAGE, a pour objectif la gestion des devoirs. Il offre une plateforme permettant de visualiser, ajouter, modifier et supprimer des devoirs. Les données relatives aux devoirs sont stockées dans une base de données MongoDB.

## Accès au Projet 🌐
- [Frontend](https://assignment-front-2c79479bd1b2.herokuapp.com/home)
- [Backend API](https://assignment-back-c0dfe7c8382c.herokuapp.com/api/assignments)
- [Repo du back](https://github.com/florian83440/projet_angular_m1_miage_back)

## Introduction 🚀
Bienvenue dans la partie backend du projet de gestion des devoirs. Ce backend a été développé dans le cadre du Master 1 MIAGE par Florian AIME et Thibault CANAVAGGIO.

## Objectif du Projet 🎯
Le projet vise à fournir une solution robuste pour la gestion des devoirs. Il inclut un backend API qui permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur les données des devoirs, stockées dans une base de données MongoDB.

## Présentation
- Vidéo de la bêta : https://drive.google.com/file/d/16AX9EQrB584bSswPNhNMdgP5DyakkrGd/view?usp=sharing
- Vidéo de la version finale : https://drive.google.com/file/d/1tT_o9Vazl4w7fvZrqz_5XG8oa549fs5P/view?usp=sharing

## Fonctionnalités 🛠️
### 1. **Liste des Devoirs**
   - Affichage de la liste complète des devoirs disponibles.
   - Il est possible d'effectuer une recherche avancé sur la liste des devoirs (je suis content de cet ajout)

### 2. **Détails des Devoirs**
   - Consultation des détails spécifiques d'un devoir sélectionné.

### 3. **Ajout de Devoirs**
   - Possibilité d'ajouter de nouveaux devoirs.

### 4. **Modification de Devoirs**
   - Modification des détails d'un devoir existant.

### 5. **Suppression de Devoirs**
   - Suppression d'un devoir.

### 6. **Gestion des Enseignants, Étudiants et Matières**
   - Les données relatives aux enseignants, étudiants et matières sont intégrées directement dans le code (données en dur), on a essayé de le faire en base mais pas le temps de terminer malheuresmement, peut-être dans une prochaine version !
     
### 7. **Gestion des droits admin**
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
login : **admin**
password : **1234**

Compte non admin
login : **flo**
password : **Azerty0**


## Contact
Pour tout problème, n'hésitez pas à nous contacter :

- Florian : [LinkedIn](https://www.linkedin.com/in/florian-aime/) / florian.aime@etu.unice.fr
- Thibault : thibault.canavaggio@etu.unice.fr
