/*Exercice 5 :
A partir de la bdd caisse

1) Supprimer deux catégories grâce à leur nom en 1 seule requête*/
-- Le problème ici c'est que des produits sont déjà lié à ces catégories, 
-- et comme on n'a pas mis de suppression en cascade, 
-- alors il faut d'abord supprimer les produit (ou bien mettre leur clé étrangère à null si c'est possible)

USE caisse;

UPDATE produit SET id_categorie = NULL 
	WHERE id_categorie IN (SELECT id_categorie FROM categorie WHERE nom_categorie IN ("nouveau","TCG"));

-- 1er Version avec un Opérateur Logique OR
DELETE FROM categorie WHERE nom_categorie = "nouveau" OR nom_categorie="TCG";

-- 2nd Version avec IN
DELETE FROM categorie WHERE nom_categorie IN ("nouveau","TCG");

-- 2) Supprimer le vendeur 1
UPDATE ticket SET id_vendeur = NULL  WHERE id_vendeur = 1;
DELETE FROM vendeur WHERE id_vendeur = 1;

-- 3) Supprimer tous les tickets qui ont une date inferieure au 10 Décembre 2024,
-- Cette fois, les clés id_ticket dans la table ajouter ne peuvent pas être NULL
-- Donc je dois les supprimer pour pouvoir supprimer les tickets
DELETE FROM ajouter WHERE id_ticket IN (SELECT id_ticket FROM ticket WHERE date_ticket < "2024-12-10");
DELETE FROM ticket WHERE date_ticket < "2024-12-10";

-- 4) Supprimer tous les produits de la table ajouter  (ou produit_ticket)
-- qui ont une quantite supérieure à 5.
DELETE FROM ajouter WHERE quantite > 5;