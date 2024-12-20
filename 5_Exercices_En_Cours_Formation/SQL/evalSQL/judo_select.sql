-- Utilisation de la BDD
USE judoka;

-- Affichage des judokas ceinture verte
SELECT id_judoka, prenom_judoka AS prenom, nom_judoka AS nom
FROM judoka j
INNER JOIN niveau n ON j.id_niveau = n.id_niveau
WHERE n.couleur_ceinture = 'verte';

-- Affichage du nombre de participants à la compétition judo31

-- Affichage de la LISTE des participants à la compétition judo81

-- Afficher les judokas ceinture marron de plus de 19 ans

-- Affichage de la liste des judokas triés par ordre alphabétique, avec leur couleur de ceinture
