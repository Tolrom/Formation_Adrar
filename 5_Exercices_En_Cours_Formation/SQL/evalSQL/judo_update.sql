-- Utilisation de la BDD
USE judoka;

-- Mise à jour de la table judoka
UPDATE judoka
SET id_niveau = id_niveau+1
WHERE id_judoka < 6;