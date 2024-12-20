-- Création de la BDD
CREATE DATABASE IF NOT EXISTS judoka;

-- Utilisation de la BDD
USE judoka;

-- Création des tables
CREATE TABLE judoka (
	id_judoka INT PRIMARY KEY AUTO_INCREMENT,
    nom_judoka VARCHAR(50),
    prenom_judoka VARCHAR(50),
    age INT,
    sexe VARCHAR(5),
    id_niveau INT
)Engine=InnoDB;

CREATE TABLE competition (
	id_cpt INT PRIMARY KEY AUTO_INCREMENT,
    nom_cpt VARCHAR(50),
    date_fin DATE NOT NULL,
    date_debut DATE NOT NULL
)Engine=InnoDB;

CREATE TABLE niveau (
	id_niveau INT PRIMARY KEY AUTO_INCREMENT,
    couleur_ceinture VARCHAR(50) NOT NULL
)Engine=InnoDB;

CREATE TABLE participer (
	id_judoka INT,
    id_cpt INT,
    PRIMARY KEY (id_judoka, id_cpt)
)Engine=InnoDB;


-- Ajout des Foreign Keys

ALTER TABLE judoka
ADD CONSTRAINT fk_niveau
FOREIGN KEY (id_niveau) REFERENCES niveau (id_niveau)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE participer
ADD CONSTRAINT fk_judoka
FOREIGN KEY (id_judoka) REFERENCES judoka (id_judoka)
ON DELETE CASCADE
ON UPDATE CASCADE,
ADD CONSTRAINT fk_cpt
FOREIGN KEY (id_cpt) REFERENCES competition (id_cpt)
ON DELETE CASCADE
ON UPDATE CASCADE;
