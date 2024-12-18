-- Création et utilisation de la BDD
CREATE DATABASE IF NOT EXISTS caisse;
USE caisse;

-- Création de la table categorie
CREATE TABLE categorie (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT,
    nom_categorie VARCHAR(50) UNIQUE NOT NULL
);

-- Création de la table vendeur
CREATE TABLE vendeur (
    id_vendeur INT PRIMARY KEY AUTO_INCREMENT,
    prenom_vendeur VARCHAR(50) NOT NULL,
    nom_vendeur VARCHAR(50) NOT NULL,
    age_vendeur INT
);

-- Création de la table produit
CREATE TABLE produit (
    id_produit INT PRIMARY KEY AUTO_INCREMENT,
    nom_produit VARCHAR(50) UNIQUE NOT NULL,
    description_produit VARCHAR(255),
    tarif_produit DECIMAL(5,2),
    id_categorie INT,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie)
);

-- Création de la table ticket
CREATE TABLE ticket (
    id_ticket INT PRIMARY KEY AUTO_INCREMENT,
    date_ticket DATETIME NOT NULL,
    id_vendeur INT,
    FOREIGN KEY (id_vendeur) REFERENCES vendeur(id_vendeur)
);

-- Création de la table ajouter (table de liaison entre produit et ticket)
CREATE TABLE ajouter (
    id_produit INT,
    id_ticket INT,
    quantite INT NOT NULL,
    PRIMARY KEY (id_produit, id_ticket),
    FOREIGN KEY (id_produit) REFERENCES produit(id_produit),
    FOREIGN KEY (id_ticket) REFERENCES ticket(id_ticket)
);

