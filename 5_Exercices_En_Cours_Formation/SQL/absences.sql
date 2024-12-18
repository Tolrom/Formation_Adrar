-- Création et utilisation de la BDD
CREATE DATABASE IF NOT EXISTS absences;
USE absences;

-- Création de la table poste
CREATE TABLE poste (
    id_poste INT PRIMARY KEY AUTO_INCREMENT,
    nom_poste VARCHAR(50) NOT NULL
);

-- Création de la table employe
CREATE TABLE employe (
    id_employe INT PRIMARY KEY AUTO_INCREMENT,
    nom_employe VARCHAR(50) NOT NULL,
    prenom_employe VARCHAR(50) NOT NULL,
    age INT,
    telephone INT,
    nom_rue VARCHAR(50),
    num_rue INT,
    code_postal INT,
    ville VARCHAR(50),
    id_poste INT,
    FOREIGN KEY (id_poste) REFERENCES poste(id_poste)
);

-- Création de la table motif_absence
CREATE TABLE motif_absence (
    id_motif_absence INT PRIMARY KEY AUTO_INCREMENT,
    motif_absence VARCHAR(50) NOT NULL
);

-- Création de la table absence
CREATE TABLE absence (
    id_absence INT PRIMARY KEY AUTO_INCREMENT,
    date_debut DATETIME,
    date_fin DATETIME,
    id_motif_absence INT,
    id_employe INT,
    FOREIGN KEY (id_motif_absence) REFERENCES motif_absence(id_motif_absence),
    FOREIGN KEY (id_employe) REFERENCES employe(id_employe)
);

-- Création de la table role
CREATE TABLE role (
    id_role INT PRIMARY KEY AUTO_INCREMENT,
    nom_role VARCHAR(50) NOT NULL
);

-- Création de la table utilisateur
CREATE TABLE utilisateur (
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    nom_utilisateur VARCHAR(50) NOT NULL,
    prenom_utilisateur VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    mdp VARCHAR(100) NOT NULL,
    id_role INT,
    FOREIGN KEY (id_role) REFERENCES role(id_role)
);

-- Ajouter une colonne "intitule" dans la table absence
ALTER TABLE absence
ADD COLUMN intitule VARCHAR(240) NOT NULL;

-- Ajouter une colonne "accepte" avec une valeur par défaut de 1 dans la table absence
ALTER TABLE absence
ADD COLUMN accepte TINYINT(1) DEFAULT 1;

-- Changer le format de la colonne "date_debut" en DATE et la rendre NOT NULL
ALTER TABLE absence
MODIFY COLUMN date_debut DATE NOT NULL;

-- Supprimer la colonne "intitule" de la table absence
ALTER TABLE absence
DROP COLUMN intitule;

