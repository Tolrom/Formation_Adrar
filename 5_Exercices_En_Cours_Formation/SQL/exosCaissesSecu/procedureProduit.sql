USE caisse;

DELIMITER $$
CREATE PROCEDURE ajouterProduit(
IN new_nom_produit VARCHAR(50),
IN tarif DECIMAL(5,2),
IN `description` TEXT,
IN id_categorie INT
)
BEGIN
	START TRANSACTION;
    IF (SELECT p.id_produit FROM produit p WHERE p.nom_produit = new_nom_produit) > 0
    THEN 
		ROLLBACK;
        SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Attention, le produit existe déjà';
	ELSEIF (tarif <= 0)
    THEN 
		ROLLBACK;
        SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Veuillez saisir un prix positif';
	ELSE
		INSERT INTO produit(nom_produit, tarif, `description`, id_categorie) VALUES (new_nom_produit, tarif, `description`, id_categorie);
        SELECT p.id_produit AS id, p.nom_produit AS produit FROM produit p
        WHERE nom_produit = new_nom_produit;
        COMMIT;
	END IF;
END$$

DELIMITER ;
		
CALL ajouterProduit('Cartes Pokémon', 5.99 , 'Un booster de 10 cartes', 5);