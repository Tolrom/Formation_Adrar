USE caisse;

-- Ajout de la colonne age à la table vendeur
ALTER TABLE vendeur
ADD COLUMN age INT NOT NULL DEFAULT 16,
ADD CHECK (age>=16);

-- Ajout d'une vérification de la quantité sur la table ajouter
ALTER TABLE ajouter
ADD CHECK (quantite>0),
ALTER quantite SET DEFAULT 1;

-- Modification du nom d'un vendeur
UPDATE vendeur 
SET nom_vendeur = 'Albert' 
WHERE id_vendeur = 2;

-- Augmentation du tarif de certains produits
UPDATE produit
SET tarif_produit = tarif_produit + 1
WHERE tarif_produit < 2;

-- Modification de tickets de caisse
UPDATE ticket
SET id_vendeur = 5
WHERE id_vendeur = 2;

-- Mise à jour des catégories
UPDATE categorie
SET nom_categorie = 'nouveau'
WHERE nom_categorie < 'C';

-- Augmentation de quantite sur certains produits
UPDATE ajouter
INNER JOIN ticket
ON ticket.id_ticket = ajouter.id_ticket
INNER JOIN vendeur
ON vendeur.id_vendeur = ticket.id_vendeur
SET quantite = quantite + 3
WHERE prenom_vendeur = 'Sophie';

-- Promotion sur le bricolage!
UPDATE produit
INNER JOIN categorie
ON produit.id_categorie = categorie.id_categorie
SET tarif_produit = tarif_produit * 0.9
WHERE nom_categorie = 'Bricolage';

-- Modification de la date de certains tickets (Est-ce bien légal??)
UPDATE ticket
SET date_ticket = DATE_ADD(date_ticket, INTERVAL 2 DAY)
WHERE date_ticket > '2024-01-01';

