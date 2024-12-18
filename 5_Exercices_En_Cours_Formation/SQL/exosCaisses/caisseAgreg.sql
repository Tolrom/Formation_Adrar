USE caisse;

-- 1) Calculer le nombre de vendeur
SELECT COUNT(id_vendeur) 
FROM vendeur;

-- 2) Calculer le nombre de ticket
SELECT COUNT(id_ticket) 
FROM ticket;

-- 3) Calculer le nombre de ticket qu'a vendu chaque vendeur
SELECT v.id_vendeur, v.prenom_vendeur, v.nom_vendeur, COUNT(t.id_ticket) AS nombre_tickets_vendus
FROM vendeur AS v
LEFT JOIN ticket AS t 
ON v.id_vendeur = t.id_vendeur
GROUP BY v.id_vendeur, v.prenom_vendeur, v.nom_vendeur;

-- 4) Calculer la quantite moyenne de produit vendu
SELECT AVG(quantite) AS quantité_moyenne
FROM ajouter;

-- 5) Calculer la quantite moyenne de produit vendu sur chaque ticket
SELECT id_ticket, AVG(quantite) AS quantité_moyenne_par_ticket
FROM ajouter
GROUP BY id_ticket;

-- 6) Compter le nombre de produit pour chaque catégorie
SELECT c.nom_categorie, COUNT(id_produit) AS Nombre_de_produits
FROM categorie c
INNER JOIN produit p
WHERE p.id_categorie = c.id_categorie
GROUP BY c.id_categorie;

-- 7) Calculer le prix moyen d'un produit
SELECT id_produit, AVG(tarif_produit)
FROM produit;

-- 8) Calculer le prix moyen des produit au sein de chaque categorie
SELECT c.nom_categorie, AVG(p.tarif_produit) AS Prix_moyen_des_produits
FROM categorie c
INNER JOIN produit p
ON p.id_categorie = c.id_categorie
GROUP BY c.id_categorie;

-- 9) Trouver le ticket qui a été vendu le plus récemment (avec MAX())
SELECT id_ticket, MAX(date_ticket)
FROM ticket;

-- 10) Calculer l'âge moyen des vendeurs
SELECT AVG(age_vendeur) AS Age_moyen_des_vendeurs
FROM vendeur;

-- 11) Calculer le coût total des produits
SELECT SUM(tarif_produit) AS cout_total
FROM produit;

-- 12) Calculer la quantite de produit total vendu sur chaque ticket
SELECT t.id_ticket, SUM(a.quantite) AS quantite_produit_ticket
FROM ticket t
INNER JOIN ajouter a
ON a.id_ticket = t.id_ticket
INNER JOIN produit p
ON a.id_produit = p.id_produit
GROUP BY t.id_ticket;