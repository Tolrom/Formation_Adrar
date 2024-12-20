-- Utilisation de la BDD
USE judoka;

-- Insertion de nouveaux Judokas
INSERT INTO judoka (nom_judoka, prenom_judoka, age, sexe, id_niveau)
VALUES
	('Dujardin', 'Jean', 54, 'H', 3),
	('Hauchard', 'Lucas', 28, 'H', 2);

-- Suppression des judokas fraichement ajoutés    
DELETE FROM judoka
WHERE id_judoka > 10;