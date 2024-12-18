USE caisse;

-- Insertion dans la table categorie (5 catégories)
INSERT INTO categorie (nom_categorie) VALUES
('Alimentation'),
('Électronique'),
('Vêtements'),
('Bricolage'),
('Loisirs');

-- Insertion dans la table produit (10 produits avec id_categorie)
INSERT INTO produit (nom_produit, description_produit, tarif_produit, id_categorie) VALUES
('Pain', 'Pain de mie complet', 1.20, 1),
('Télévision', 'TV 4K Ultra HD 50 pouces', 499.99, 2),
('Jeans', 'Pantalon denim bleu', 39.99, 3),
('Marteau', 'Marteau de bricolage en acier', 9.50, 4),
('Ballon', 'Ballon de football en cuir', 15.00, 5),
('Croissant', 'Croissant frais au beurre', 0.90, 1),
('Ordinateur portable', 'Laptop i7, 16GB RAM, SSD 512GB', 899.99, 2),
('Chemise', 'Chemise en coton blanche', 25.00, 3),
('Perceuse', 'Perceuse électrique sans fil', 59.99, 4),
('Puzzle', 'Puzzle 1000 pièces - paysage', 12.50, 5);

-- Insertion dans la table vendeur (5 vendeurs)
INSERT INTO vendeur (nom_vendeur, prenom_vendeur, age_vendeur) VALUES
('Martin', 'Julie', 22),
('Dubois', 'Pierre', 35),
('Leroy', 'Sophie', 54),
('Moreau', 'Alexandre', 24),
('Simon', 'Camille', 28);

-- Insertion dans la table ticket (10 tickets avec id_vendeur)
INSERT INTO ticket (date_ticket, id_vendeur) VALUES
('2024-06-01 09:00:00', 1),
('2024-06-01 10:30:00', 2),
('2024-06-01 11:45:00', 3),
('2024-06-02 14:00:00', 4),
('2024-06-02 15:15:00', 5),
('2024-06-03 08:30:00', 1),
('2024-06-03 09:45:00', 2),
('2024-06-03 16:00:00', 3),
('2024-06-04 10:00:00', 4),
('2024-06-04 13:30:00', 5);


-- Insertion dans la table ajouter (3 produits par ticket)

-- Pour le ticket 1
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(1, 1, 2), (2, 1, 1), (3, 1, 1);

-- Pour le ticket 2
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(4, 2, 1), (5, 2, 2), (6, 2, 3);

-- Pour le ticket 3
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(7, 3, 1), (8, 3, 2), (9, 3, 1);

-- Pour le ticket 4
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(10, 4, 1), (1, 4, 3), (2, 4, 2);

-- Pour le ticket 5
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(3, 5, 2), (4, 5, 1), (5, 5, 1);

-- Pour le ticket 6
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(6, 6, 2), (7, 6, 1), (8, 6, 1);

-- Pour le ticket 7
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(9, 7, 1), (10, 7, 2), (1, 7, 1);

-- Pour le ticket 8
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(2, 8, 3), (3, 8, 1), (4, 8, 2);

-- Pour le ticket 9
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(5, 9, 1), (6, 9, 3), (7, 9, 2);

-- Pour le ticket 10
INSERT INTO ajouter (id_produit, id_ticket, quantite) VALUES
(8, 10, 1), (9, 10, 2), (10, 10, 1);

