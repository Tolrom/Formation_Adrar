USE caisse;

-- Afficher la liste des tickets de 2024
SELECT id_ticket, date_ticket 
FROM ticket 
WHERE YEAR(date_ticket) = 2024;

-- Afficher la liste des produits d'id_categorie 1
SELECT id_produit, nom_produit, tarif_produit, id_categorie 
FROM produit 
WHERE id_categorie = 1;

-- Afficher la liste des produits dont le tarif est supérieur à 2 €
SELECT id_produit, nom_produit, tarif_produit 
FROM produit 
WHERE tarif_produit > 2;

-- Afficher la liste des produits dans l'ordre décroissant de tarif.
SELECT id_produit, nom_produit, tarif_produit 
FROM produit 
ORDER BY tarif_produit DESC;

-- Afficher la liste des produits dont le nom est inférieur à J et dont le prix est supérieur à 30 €
SELECT id_produit, nom_produit, tarif_produit 
FROM produit 
WHERE nom_produit < 'J' AND tarif_produit > 30;

--  Afficher le ticket le plus récent
SELECT id_ticket, date_ticket 
FROM ticket 
ORDER BY date_ticket DESC 
LIMIT 1;

-- Afficher le tout premier vendeur inscrit
SELECT id_vendeur, prenom_vendeur, nom_vendeur 
FROM vendeur 
ORDER BY id_vendeur ASC 
LIMIT 1;