USE caisse;

-- 1) Afficher le nom et le prénom des vendeurs pour chaque ticket (id_ticket, nom_vendeur, prenom_vendeur)
SELECT id_ticket, nom_vendeur, prenom_vendeur
FROM ticket t
INNER JOIN vendeur v on v.id_vendeur = t.id_vendeur
GROUP BY id_ticket;

-- 2) Afficher le nom des categories pour chaque article (nom_produit, nom_categorie)
SELECT nom_produit, nom_categorie
FROM produit p
INNER JOIN categorie c ON c.id_categorie = p.id_categorie;

-- 3) Afficher la liste des produits vendu sur le ticket : 1 (nom_produit, tarif, quantite)
SELECT nom_produit, tarif_produit, quantite
FROM ticket t
INNER JOIN ajouter a ON a.id_ticket = t.id_ticket
INNER JOIN produit p ON a.id_produit = p.id_produit
WHERE t.id_ticket = 1;

-- 4) Afficher la liste des catégories de produit vendu sur chaque ticket (nom_produit, tarif, nom_categorie)
SELECT t.id_ticket, p.nom_produit, p.tarif_produit, c.nom_categorie
FROM ticket t
INNER JOIN ajouter a ON t.id_ticket = a.id_ticket
INNER JOIN produit p ON a.id_produit = p.id_produit
INNER JOIN categorie c ON p.id_categorie = c.id_categorie
ORDER BY t.id_ticket;


-- 5) Afficher la liste des produits vendu par le vendeur : 4 (nom_produit, tarif, nom_vendeur, prenom_vendeur)
SELECT p.nom_produit, p.tarif_produit, v.nom_vendeur, v.prenom_vendeur
FROM vendeur v
INNER JOIN ticket t ON v.id_vendeur = t.id_vendeur
INNER JOIN ajouter a ON t.id_ticket = a.id_ticket
INNER JOIN produit p ON a.id_produit = p.id_produit
WHERE v.id_vendeur = 4;


-- 6) Afficher la liste des produits d'une categorie vendue (nom_produit, tarif, nom_categorie)
SELECT p.nom_produit, p.tarif_produit, c.nom_categorie
FROM produit p
INNER JOIN ajouter a ON p.id_produit = a.id_produit
INNER JOIN categorie c ON p.id_categorie = c.id_categorie
WHERE c.nom_categorie = 'Bricolage'
GROUP BY p.nom_produit;
