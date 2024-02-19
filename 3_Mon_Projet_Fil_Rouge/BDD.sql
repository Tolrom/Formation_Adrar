CREATE DATABASE legumanDB;
USE legumanDB;
CREATE TABLE utilisateur(
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
email_utilisateur varchar(50) unique not null,
password_utilisateur varchar(100) not null,
telephone_utilisateur varchar(10),
statut_utilisateur tinyint(1) default 1,
id_roles int not null
)Engine=InnoDB;
CREATE TABLE roles(
id_roles int primary key auto_increment not null,
nom_roles varchar(50) not null
)Engine=InnoDB;
CREATE TABLE commande(
id_commande int primary key auto_increment not null,
date_commande datetime not null,
statut_commande tinyint(1) default 1,
date_livraison_commande datetime not null,
montant_commande decimal(5,2) not null,
id_relais int not null,
id_utilisateur int not null
)Engine=InnoDB;
CREATE TABLE produit(
id_produit int primary key auto_increment not null,
nom_produit varchar(50) not null,
prix_produit decimal(4,2) not null,
stock_produit int not null,
image_produit varchar(50) not null,
description_produit text not null
)Engine=InnoDB;
CREATE TABLE relais(
id_relais int primary key auto_increment not null,
adresse_relais varchar(50)
)Engine=InnoDB;
CREATE TABLE selectionner(
id_utilisateur int not null,
id_produit int not null
)Engine=InnoDB;
CREATE TABLE contenir(
id_produit int not null,
id_commande int not null
)Engine=InnoDB;
alter table utilisateur
add constraint fk_appartenir_roles
foreign key(id_roles)
references roles(id_roles);
alter table commande
add constraint fk_arriver_relais
foreign key(id_relais)
references relais(id_relais);
alter table commande
add constraint fk_commander_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);
alter table selectionner
add constraint fk_selectionner_produit
foreign key(id_produit)
references produit(id_produit);
alter table selectionner
add constraint fk_selectionner_utilisateur
foreign key(id_utilisateur)
references utilisateur(id_utilisateur);
alter table contenir
add constraint fk_contenir_produit
foreign key(id_produit)
references produit(id_produit);
alter table contenir
add constraint fk_contenir_commande
foreign key(id_commande)
references commande(id_commande);