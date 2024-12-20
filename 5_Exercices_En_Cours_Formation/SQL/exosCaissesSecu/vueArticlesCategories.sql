USE caisse;

CREATE VIEW vw_article_categorie AS 
SELECT p.nom_produit AS nom, tarif, c.nom_categorie AS categorie 
FROM produit p
INNER JOIN categorie c
ON p.id_categorie = c.id_categorie;

SELECT nom, tarif, categorie FROM vw_article_categorie;