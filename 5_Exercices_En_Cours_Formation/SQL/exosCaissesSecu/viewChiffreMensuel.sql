USE caisse;

CREATE VIEW vw_ca_mois_2024 AS 
SELECT MONTH(t.date_creation) AS mois, SUM(quantite*tarif) AS CA
FROM ticket t
INNER JOIN produit_ticket pt
ON pt.id_ticket = t.id_ticket
INNER JOIN produit p
ON p.id_produit = pt.id_produit
GROUP BY MONTH(date_creation)
ORDER BY MONTH(date_creation) ASC;

SELECT mois, CA
FROM vw_ca_mois_2024;