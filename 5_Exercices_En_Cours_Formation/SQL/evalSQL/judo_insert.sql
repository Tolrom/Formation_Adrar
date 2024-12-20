-- Utilisation de la BDD
USE judoka;

-- Insertion des données
INSERT INTO niveau (couleur_ceinture)
VALUES
	('blanche'),
	('jaune'),
	('orange'),
	('verte'),
	('bleue'),
	('marron'),
	('noire');
    
INSERT INTO judoka (nom_judoka, prenom_judoka, age, sexe, id_niveau)
VALUES
	('Lachance', 'Dominique', 16, 'F', 2),
	('Porter', 'Gilbert', 18, 'H', 3),
	('Lemaître', 'Anne', 15, 'F', 4),
	('Robert', 'Juliette', 12, 'F', 1),
	('Montiny', 'Pierre', 17, 'H', 5),
	('Charrette', 'Pascal', 21, 'H', 6),
	('Guay', 'Émilie', 19, 'F', 6),
	('Maheu', 'Louise', 14, 'F', 4),
	('Poulin', 'Raymond', 26, 'H', 7),
	('Dupret', 'Alain', 20, 'H', 6);
    
INSERT INTO competition (nom_cpt, date_debut, date_fin)
VALUES
    ('judo31', '2021-02-06', '2021-02-07'),
    ('Judo11', '2021-02-27', '2021-02-28'),
    ('Judo81', '2021-03-20', '2021-03-21'),
    ('Judo82', '2021-04-17', '2021-04-18');

INSERT INTO participer (id_cpt, id_judoka)
VALUES
    (1, 1),
    (1, 3),
    (1, 4),
    (2, 2),
    (2, 5),
    (2, 6),
    (2, 9),
    (3, 9),
    (3, 10),
    (4, 1),
    (4, 3),
    (4, 8),
    (4, 4);
