USE caisse;

CREATE VIEW vw_popular AS
SELECT nom_produit AS nom, SUM(pt.quantite) AS total_ventes
FROM produit_ticket pt
INNER JOIN produit p
ON p.id_produit = pt.id_produit
GROUP BY p.nom_produit
ORDER BY total_ventes DESC LIMIT 5;

SELECT nom, total_ventes FROM vw_popular;
