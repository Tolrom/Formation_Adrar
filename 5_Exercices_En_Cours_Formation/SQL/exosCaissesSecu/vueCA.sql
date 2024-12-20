USE caisse;

CREATE VIEW vw_ca_vendeur AS 
SELECT v.id_vendeur, nom_vendeur AS nom, prenom_vendeur AS prenom, SUM(quantite*tarif) AS CA
FROM vendeur v
INNER JOIN ticket t
ON v.id_vendeur = t.id_vendeur
INNER JOIN produit_ticket pt
ON pt.id_ticket = t.id_ticket
INNER JOIN produit p
ON p.id_produit = pt.id_produit
GROUP BY id_vendeur
ORDER BY CA DESC;

SELECT nom, prenom, CA FROM vw_ca_vendeur;