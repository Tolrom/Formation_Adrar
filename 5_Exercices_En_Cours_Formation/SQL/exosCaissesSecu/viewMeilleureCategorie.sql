USE caisse;

CREATE VIEW vw_vendeur_categories AS
SELECT 
    v.id_vendeur, 
    v.nom_vendeur AS nom, 
    v.prenom_vendeur AS prenom, 
    c.nom_categorie AS categorie, 
    COUNT(pt.id_produit) AS ventes
FROM vendeur v
INNER JOIN ticket t ON v.id_vendeur = t.id_vendeur
INNER JOIN produit_ticket pt ON pt.id_ticket = t.id_ticket
INNER JOIN produit p ON p.id_produit = pt.id_produit
INNER JOIN categorie c ON c.id_categorie = p.id_categorie
GROUP BY v.id_vendeur, c.nom_categorie;

CREATE VIEW vw_vendeur_meilleure_categorie AS
SELECT 
    vcc.nom AS nom, 
    vcc.prenom AS prenom, 
    vcc.categorie AS meilleure_categorie, 
    vcc.ventes AS total_ventes
FROM vw_vendeur_categories vcc
INNER JOIN (
    SELECT id_vendeur, MAX(ventes) AS max_ventes
    FROM vw_vendeur_categories
    GROUP BY id_vendeur
) max_v ON vcc.id_vendeur = max_v.id_vendeur AND vcc.ventes = max_v.max_ventes;


SELECT nom, prenom, meilleure_categorie FROM vw_vendeur_meilleure_categorie;