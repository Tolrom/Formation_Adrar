-- Création du compte VISITEUR
CREATE USER IF NOT EXISTS 'visiteur'@'%' IDENTIFIED BY '1234';

-- Affectation des droits 
-- SELECT
GRANT SELECT ON vitrine . *  TO 'visiteur'@'%';

-- INSERT
GRANT INSERT ON vitrine . media TO 'visiteur'@'%';
GRANT INSERT ON vitrine . utilisateur TO 'visiteur'@'%';


-- Création du compte REDACTEUR
CREATE USER IF NOT EXISTS 'redacteur'@'%' IDENTIFIED BY '1234';

-- Affectation des droits
-- SELECT
GRANT SELECT ON vitrine . *  TO 'redacteur'@'%';

-- INSERT
GRANT INSERT ON vitrine . actualite TO 'redacteur'@'%';
GRANT INSERT ON vitrine . media TO 'redacteur'@'%';
GRANT INSERT ON vitrine . actualite_media TO 'redacteur'@'%';

-- UPDATE
GRANT UPDATE ON vitrine . utilisateur TO 'redacteur'@'%';
GRANT UPDATE ON vitrine . actualite TO 'redacteur'@'%';
GRANT UPDATE ON vitrine . media TO 'redacteur'@'%';
GRANT UPDATE ON vitrine . actualite_media TO 'redacteur'@'%';



-- Création du compte ADMINISTRATEUR
CREATE USER IF NOT EXISTS 'administrateur'@'%' IDENTIFIED BY '1234';

-- Affectation des droits
-- SELECT
GRANT SELECT ON vitrine . *  TO 'administrateur'@'%';

-- INSERT
GRANT INSERT ON vitrine . roles TO 'administrateur'@'%';
GRANT INSERT ON vitrine . media TO 'administrateur'@'%';

-- UPDATE
GRANT UPDATE ON vitrine . roles  TO 'administrateur'@'%';
GRANT UPDATE ON vitrine . utilisateur  TO 'administrateur'@'%';
GRANT UPDATE ON vitrine . actualite  TO 'administrateur'@'%';
GRANT UPDATE ON vitrine . media  TO 'administrateur'@'%';

-- DELETE
GRANT DELETE ON vitrine . *  TO 'administrateur'@'%';

-- Rafraichir les droits de tous les utilisateurs
FLUSH PRIVILEGES;