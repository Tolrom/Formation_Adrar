<?php
//                  Import de la connexion à la BDD
include './BddConnect.php';
//                  Récupération des données du formulaire
//                  Tester si le bouton est cliqué
if (isset($_POST["submit"])) {
    //                  Tester si les champs sont bien remplis
    if (
        !empty($_POST["nom_utilisateur"]) and !empty($_POST["prenom_utilisateur"]) and !empty($_POST["email_utilisateur"])
        and !empty($_POST["password_utilisateur"]) and !empty($_POST["password_confirm"])
    ) {
        //                  Tester si les 2 passwords sont identiques
        if ($_POST["password_utilisateur"] === $_POST["password_confirm"]) {
            //                  Nettoyer le mail 
            $email = cleanInput($_POST["email_utilisateur"]);
            //                  Tester si le compte n'existe pas
            if (empty(getUserByMail($bdd, $email))) {
                //                  Nettoyer les entrèes utilisateur
                $nom = cleanInput($_POST["nom_utilisateur"]);
                $prenom = cleanInput($_POST["prenom_utilisateur"]);
                $password = cleanInput($_POST["password_utilisateur"]);
                $phone = cleanInput($_POST["phone_utilisateur"]);
                //                  Hasher le mot de passe
                $hash = password_hash($password, PASSWORD_DEFAULT);
                //                  Ajouter le compte en BDD
                ajouterUtilisateur($bdd, $nom, $prenom, $email, $hash, $phone);
                //                  Afficher un message le compte à été ajouté
            }
            //                  Tester si le compte existe déja
            else {
                //                  Afficher un message erreur
            }
        }
        //                  Les mots de passe sont différents
        else {
            //                  Afficher un message d'erreur
        }
    } else {

    }
}

//                  Fonction pour ajouter un utilisateur en BDD
function ajouterUtilisateur($nom, $prenom, $email, $password, $phone, $bdd)
{
    //                  Bloc pour exécuter le code
    try {
        $requete = $bdd->prepare('INSERT INTO utilisateur(nom_utilisateur,prenom_utilisateur,email_utilisateur,password_utilisateur,phone_utilisateur)VALUE
            (?,?,?,?,?)');
        $requete->bindParam(1, $nom, PDO::PARAM_STR);
        $requete->bindParam(2, $prenom, PDO::PARAM_STR);
        $requete->bindParam(3, $email, PDO::PARAM_STR);
        $requete->bindParam(4, $password, PDO::PARAM_STR);
        $requete->bindParam(5, $phone, PDO::PARAM_STR);
        $requete->execute();
    }
    //                  Bloc pour récupérer les erreurs 
    catch (Exception $e) {
        //                  Affichage de l'erreur
        die("Error : " . $e->getMessage());
    }
}
function getUserByMail($bdd, $email)
{
    try {
        $requete = $bdd->prepare('SELECT id FROM utilisateur WHERE email = ?');
        $requete->bindParam(1, $email, PDO::PARAM_STR);
        $requete->execute();
        $data = $requete->fetch(PDO::FETCH_ASSOC);
        return $data;
    } catch (Exception $e) {
        die('Error : ' . $e->getMessage());
    }
}
function cleanInput(string $value): string
{
    return htmlspecialchars(strip_tags(trim($value)), ENT_NOQUOTES);
}