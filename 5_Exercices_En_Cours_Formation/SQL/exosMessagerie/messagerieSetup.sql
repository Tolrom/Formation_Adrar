CREATE DATABASE IF NOT EXISTS messagerie;
USE messagerie;

-- Table des utilisateurs
CREATE TABLE users (
    id_users INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Table mailbox (boîte de messages)
CREATE TABLE mailbox (
    id_mailbox INT PRIMARY KEY AUTO_INCREMENT,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);

-- Table envoyer (liaison auteur et message)
CREATE TABLE envoyer (
    id_auteur INT,
    id_mailbox INT,
    FOREIGN KEY (id_auteur) REFERENCES users(id_users),
    FOREIGN KEY (id_mailbox) REFERENCES mailbox(id_mailbox),
    PRIMARY KEY (id_auteur, id_mailbox)
);

-- Table recevoir (liaison destinataire et message)
CREATE TABLE recevoir (
    id_destinataire INT,
    id_mailbox INT,
    FOREIGN KEY (id_destinataire) REFERENCES users(id_users),
    FOREIGN KEY (id_mailbox) REFERENCES mailbox(id_mailbox),
    PRIMARY KEY (id_destinataire, id_mailbox)
);
