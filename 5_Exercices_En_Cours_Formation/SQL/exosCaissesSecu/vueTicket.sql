USE caisse;

CREATE VIEW vw_ticket AS
SELECT t.id_ticket, nom_vendeur AS nom, prenom_vendeur AS prenom, SUM(quantite*tarif) AS montant_TTC
FROM ticket t
INNER JOIN produit_ticket AS pt
ON pt.id_ticket = t.id_ticket
INNER JOIN produit p
ON p.id_produit = pt.id_produit
INNER JOIN vendeur v
ON v.id_vendeur = t.id_vendeur
GROUP BY id_ticket;

SELECT id_ticket, nom, prenom, montant_TTC 
FROM vw_ticket;