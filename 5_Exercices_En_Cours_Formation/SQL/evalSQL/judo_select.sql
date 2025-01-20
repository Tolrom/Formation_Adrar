-- Utilisation de la BDD
USE judoka;

-- Affichage des judokas ceinture verte
SELECT id_judoka, prenom_judoka AS prenom, nom_judoka AS nom
FROM judoka j
INNER JOIN niveau n ON j.id_niveau = n.id_niveau
WHERE n.couleur_ceinture = 'verte';

-- Affichage du nombre de participants à la compétition judo31
SELECT COUNT(j.id_judoka) AS participants
FROM judoka j
INNER JOIN participer p ON p.id_judoka = j.id_judoka
INNER JOIN competition c ON p.id_cpt = c.id_cpt
WHERE c.nom_cpt = 'judo31';

-- Affichage de la LISTE des participants à la compétition judo81
SELECT j.id_judoka AS id_participant, j.prenom_judoka AS prenom_participant, j.nom_judoka AS nom_participant
FROM judoka j
INNER JOIN participer p ON p.id_judoka = j.id_judoka
INNER JOIN competition c ON p.id_cpt = c.id_cpt
WHERE c.nom_cpt = 'judo81';

-- Afficher les judokas ceinture marron de plus de 19 ans
SELECT j.prenom_judoka AS prenom, j.nom_judoka AS nom, n.couleur_ceinture AS ceinture, j.age AS age
FROM judoka j
INNER JOIN niveau n ON j.id_niveau = n.id_niveau
WHERE n.couleur_ceinture = 'marron' AND j.age > 19;

-- Affichage de la liste des judokas triés par ordre alphabétique, avec leur couleur de ceinture
SELECT j.nom_judoka AS nom, j.prenom_judoka AS prenom,  n.couleur_ceinture AS ceinture
FROM judoka j
INNER JOIN niveau n ON j.id_niveau = n.id_niveau
ORDER BY nom ASC;
