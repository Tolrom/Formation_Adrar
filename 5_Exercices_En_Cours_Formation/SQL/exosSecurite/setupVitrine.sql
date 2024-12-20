CREATE DATABASE IF NOT EXISTS vitrine CHARSET utf8mb4;

USE vitrine;

-- Table : role
CREATE TABLE IF NOT EXISTS roles (
    id_roles INT AUTO_INCREMENT PRIMARY KEY,
    libele_roles VARCHAR(50) NOT NULL
)Engine=InnoDB;

-- Table : utilisateur
CREATE TABLE IF NOT EXISTS utilisateur (
    id_utilisateur INT AUTO_INCREMENT PRIMARY KEY,
    nom_utilisateur VARCHAR(50) NOT NULL,
    login_utilisateur VARCHAR(50) NOT NULL UNIQUE,
    email_utilisateur VARCHAR(50) NOT NULL UNIQUE,
    mdp_utilisateur VARCHAR(100) NOT NULL,
    date_creation_utilisateur DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    statut_utilisateur TINYINT(1) NOT NULL DEFAULT 1,
    id_media INT,
    id_role INT
)Engine=InnoDB;

-- Table : actualite
CREATE TABLE IF NOT EXISTS actualite (
    id_actualite INT AUTO_INCREMENT PRIMARY KEY,
    titre_actualite VARCHAR(50) NOT NULL,
    contenu_actualite TEXT NOT NULL,
    date_creation_actualite DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    activation_actualite TINYINT(1) NOT NULL DEFAULT 1,
    auteur_id INT NOT NULL
)Engine=InnoDB;

-- Table : media
CREATE TABLE IF NOT EXISTS media (
    id_media INT AUTO_INCREMENT PRIMARY KEY,
    nom_media VARCHAR(50) NOT NULL,
    url_media VARCHAR(255) NOT NULL
)Engine=InnoDB;

-- Table : actualite_media
CREATE TABLE IF NOT EXISTS actualite_media (
    id_actualite INT NOT NULL,
    id_media INT NOT NULL,
    PRIMARY KEY (id_actualite, id_media)
)Engine=InnoDB;

-- Ajouter les clés étrangères
ALTER TABLE utilisateur
    ADD CONSTRAINT fk_ajouter FOREIGN KEY (id_media) REFERENCES media(id_media) ON DELETE CASCADE,
    ADD CONSTRAINT fk_utilisateur_role FOREIGN KEY (id_role) REFERENCES roles(id_roles);

ALTER TABLE actualite
    ADD CONSTRAINT fk_rediger FOREIGN KEY (auteur_id) REFERENCES utilisateur(id_utilisateur);

ALTER TABLE actualite_media
    ADD CONSTRAINT fk_actualite FOREIGN KEY (id_actualite) REFERENCES actualite(id_actualite),
    ADD CONSTRAINT fk_media FOREIGN KEY (id_media) REFERENCES media(id_media);
