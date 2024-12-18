INSERT INTO users (pseudo, password) VALUES 
('Maxime', 'password1'),
('Romaric', 'password2');

-- Enregistrer les messages dans la mailbox
INSERT INTO mailbox (subject, message) VALUES 
('Première salutation', 'Salut'),
('Réponse', 'Comment ça va ?');

-- Récupération des ID utilisateurs et ID messages pour lier les tables
-- User1 (auteur) envoie le message 1 à User2
INSERT INTO envoyer (id_auteur, id_mailbox) VALUES (1, 1);
INSERT INTO recevoir (id_destinataire, id_mailbox) VALUES (2, 1);

-- User2 (auteur) envoie le message 2 à User1
INSERT INTO envoyer (id_auteur, id_mailbox) VALUES (2, 2);
INSERT INTO recevoir (id_destinataire, id_mailbox) VALUES (1, 2);


SELECT 
    m.id_mailbox,
    m.subject,
    m.message,
    u_auteur.pseudo AS auteur,
    u_dest.pseudo AS destinataire
FROM mailbox m
-- Jointure pour obtenir l'auteur
INNER JOIN envoyer e ON m.id_mailbox = e.id_mailbox
INNER JOIN users u_auteur ON e.id_auteur = u_auteur.id_users
-- Jointure pour obtenir le destinataire
INNER JOIN recevoir r ON m.id_mailbox = r.id_mailbox
INNER JOIN users u_dest ON r.id_destinataire = u_dest.id_users;
