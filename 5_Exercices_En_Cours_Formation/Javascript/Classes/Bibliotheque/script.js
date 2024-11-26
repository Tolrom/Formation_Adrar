
/**
 * Représente un livre dans le contexte de la bibliothèque, ainsi que sa disponibilité.
 * @class
 */
class Livre {
    /**
     * @constructor
     * @param {string} titre Le titre de livre
     * @param {string} auteur L'auteur du livre
     * @param {boolean} disponible La disponibilité du livre
     */
    constructor(titre, auteur, disponible = true) {
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = disponible;
    }

    /**
     * Cette methode matérialise l'emprunt du livre à la bibliothèque.
     * @method
     */
    emprunter() {
        if(this.disponible){
            this.disponible = false;
        }
        else{
            throw new Error("Livre déjà emprunté!");
        }
    }
    /**
     * Cette methode matérialise le retour du livre emprunté à la bibliothèque.
     * @method
     */
    retourner() {
        if(!this.disponible){
            this.disponible = true;
        }
        else{
            throw new Error("Livre non emprunté!");
        }
    }
}

/**
 * Représente la bibliothèque ainsi que son stock de livre.
 * @class
 */
class Bibliotheque {
    /**
     * @constructor
     * @param {string} nom Le nom de la bibliothèque
     * @param {Livre[]} livres Le stock de livres de la bibliothèque
     */
    constructor(nom, livres = []) {
        this.nom = nom;
        this.livres = livres;
    }
    /**
     * Méthode permettant d'ajouter un livre au stock de la bibliothèque
     * @method
     * @param {Livre} livre 
     */
    ajouterLivre(livre) {
        this.livres.push(livre);
    }
    /**
     * Méthode permettant d'emprunter un livre de la bibliothèque
     * @method
     * @param {string} livre Le nom du livre à emprunter
     */
    emprunterLivre(livre) {
        const find = this.livres.find(({ titre }) => titre === livre);
        if (!find) {
            console.error("Livre introuvable!");
            return;
        }
        try {
            find.emprunter();
            console.log(`Livre '${livre}' emprunté avec succès.`);
        } catch (error) {   
            console.error(error);
        }
    }
    /**
     * Méthode permettant de rendre un livre de la bibliothèque
     * @method
     * @param {string} livre Le nom du livre à rendre
     */
    retournerLivre(livre) {
        const find = this.livres.find(({ titre }) => titre === livre);
        if (!find) {
            console.error("Livre introuvable!");
            return;
        }
        try {
            find.retourner();
            console.log(`Livre '${livre}' retourné avec succès.`);
        } catch (error) {   
            console.error(error);
        }
    }
}


// Exemple d'utilisation scénario
const maBibliotheque = new Bibliotheque("Ma Bibliothèque");
const livre1 = new Livre("1984", "George Orwell");
const livre2 = new Livre("Le Gros Petit Prince", "Steven Seagal");
console.log(maBibliotheque, livre1, livre2)

maBibliotheque.ajouterLivre(livre1);
maBibliotheque.ajouterLivre(livre2);
console.log(maBibliotheque)

maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
maBibliotheque.emprunterLivre("1984"); // Déclenche exception livre n'est plus disponible.
maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
maBibliotheque.emprunterLivre("198999"); // Déclenche exception livre n'existe pas.