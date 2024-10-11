<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter un utilisateur</title>
    <link rel="stylesheet" href="./style/style.css">
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
    <script src="./script/script.js" async></script>
</head>

<body>
    <!-- La nav en burger -->
    <nav style="transform : translateX(-60vw)">
        <svg id="croixNav" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <line x1="31.0607" y1="1.06066" x2="2.06066" y2="30.0607" stroke="black" stroke-width="3" />
            <line y1="-1.5" x2="41.0122" y2="-1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 3 0)"
                stroke="black" stroke-width="3" />
        </svg>
        <ul>
            <li><a href="./shop.html">Les paniers</a></li>
            <li><a href="./aboutUs.html">Notre production</a></li>
            <li><a href="./contact.html">Nous contacter</a></li>
            <li><a href="./user.html">Espace client</a></li>
            <span class="separateur"></span>
            <li><a href="./mentions.html">Mentions légales</a></li>
            <li><a href="./cgv.html">CGV</a></li>
        </ul>
        <a href="#" class="bouton">Connexion <br> Inscription</a>
    </nav>
    <!-- Le menu panier déroulant -->
    <div id="shop" style="transform : translateX(60vw)">
        <svg id="croixShop" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <line x1="31.0607" y1="1.06066" x2="2.06066" y2="30.0607" stroke="black" stroke-width="3" />
            <line y1="-1.5" x2="41.0122" y2="-1.5" transform="matrix(0.707107 0.707107 0.707107 -0.707107 3 0)"
                stroke="black" stroke-width="3" />
        </svg>
        <div class="bouton">Passer commande</div>
    </div>
    <header>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="25" viewBox="0 0 42 25" fill="none"
            class="burgerBouton">
            <line y1="1.5" x2="41.25" y2="1.5" stroke="#F39200" stroke-width="3" />
            <line y1="12.5" x2="41.25" y2="12.5" stroke="#F39200" stroke-width="3" />
            <line y1="23.5" x2="41.25" y2="23.5" stroke="#F39200" stroke-width="3" />
        </svg>
        <a href="./index.html"><img src="./images/logo.png" alt="Le logo de Léguman" id="logo"></a>
        <img src="./images/shopColor.svg" alt="Logo de panier" id="cartLogo" class="cartBouton">
    </header>
    <form action="./inscription.php" method="post">
        <label class="required" for="nom_utilisateur">Nom :</label>
        <input type="text" name="nom_utilisateur">
        <label class="required" for="prenom_utilisateur">Prénom :</label>
        <input type="text" name="prenom_utilisateur">
        <label class="required" for="email_utilisateur">Email :</label>
        <input type="email" name="email_utilisateur">
        <label for="phone_utilisateur">Téléphone :</label>
        <input type="tel" name="phone_utilisateur" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}">
        <label class="required" for="password_utilisateur">Mot de passe :</label>
        <input type="password" name="password_utilisateur">
        <label class="required" for="password_confirm">Confirmer :</label>
        <input type="password" name="password_confirm">
        <input class="bouton" type="submit" value="Ajouter" name="submit">
    </form>
    <footer>
        <p>
            Vente directe aux particuliers sur site <br>
            du Lundi au Samedi de 13h à 18h
            <br>
            <br>
            Lieu-dit Lagasse, <br>
            31310 Montesquieu-Volvestre<br>
            Tél. 06 31 31 31 31
            <br>
            Mail : <a href="mailto:">contact@leguman.fr</a>
        </p>
        <span class="separateur"></span>
        <p>
            <a href="./mentions.html">Mentions légales</a> - <a href="./cgv.html">CGV</a>
        </p>
    </footer>
    <?php
    //                  Import de la connexion à la BDD
    include '/bddConnect.php';
    var_dump($bdd);
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
            $requete = $bdd->prepare('SELECT id_utilisateur FROM utilisateur WHERE email = ?');
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
    ?>
</body>

</html>