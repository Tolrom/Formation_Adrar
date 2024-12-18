USE caisse;

-- 1) Obtenir les tickets dont le total est supérieur à 10
SELECT t.id_ticket, SUM(a.quantite * p.tarif_produit) AS total_ticket
FROM ticket t
INNER JOIN ajouter a ON a.id_ticket = t.id_ticket
INNER JOIN produit p ON a.id_produit = p.id_produit
GROUP BY t.id_ticket
HAVING total_ticket > 10;

-- 2) Obtenir les catégories comportant plus de 2 produits
SELECT c.id_categorie, c.nom_categorie, COUNT(p.id_produit) AS nombre_produits
FROM categorie c
INNER JOIN produit p ON c.id_categorie = p.id_categorie
GROUP BY c.id_categorie, c.nom_categorie
HAVING nombre_produits > 2;

-- 3) Obtenir les produits dont la quantité maximum sur un ticket est de 1
SELECT p.id_produit, p.nom_produit, MAX(a.quantite) AS quantite_max
FROM produit p
INNER JOIN ajouter a ON p.id_produit = a.id_produit
GROUP BY p.id_produit, p.nom_produit
HAVING quantite_max = 1;

-- 4) Obtenir les vendeurs qui ont vendu pour un total supérieur ou égal à 50
SELECT v.id_vendeur, v.prenom_vendeur, v.nom_vendeur, SUM(a.quantite * p.tarif_produit) AS total_ventes
FROM vendeur v
INNER JOIN ticket t ON v.id_vendeur = t.id_vendeur
INNER JOIN ajouter a ON t.id_ticket = a.id_ticket
INNER JOIN produit p ON a.id_produit = p.id_produit
GROUP BY v.id_vendeur, v.prenom_vendeur, v.nom_vendeur
HAVING total_ventes >= 50;
