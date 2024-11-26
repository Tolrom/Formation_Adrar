/**
 * Représente un livre dans le contexte de la bibliothèque, ainsi que sa disponibilité.
 * @class
 */
export class Livre {
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
export class Bibliotheque {
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
        const find = this.livres.find(({ titre }) => titre === livre.titre);
        try {
            if (find) {
                throw new Error("Livre déjà présent!");
            }
            this.livres.push(livre);
            alert(`Livre '${livre.titre}' de ${livre.auteur} ajouté avec succès.`);
        } catch (error) {   
            console.error(error);
        }
        localStorage.setItem("bibliotheque", JSON.stringify(this));
    }
    /**
     * Méthode permettant d'emprunter un livre de la bibliothèque
     * @method
     * @param {string} livre Le nom du livre à emprunter
     */
    emprunterLivre(livre) {
        const find = this.livres.find(({ titre }) => titre === livre);
        try {
            if (!find) {
                throw new Error("Livre introuvable!");
            }
            console.log(find)
            find.emprunter();
            alert(`Livre '${livre}' emprunté avec succès.`);
        } catch (error) {   
            console.error(error);
        }
        localStorage.setItem("bibliotheque", JSON.stringify(this));
    }
    /**
     * Méthode permettant de rendre un livre de la bibliothèque
     * @method
     * @param {string} livre Le nom du livre à rendre
     */
    retournerLivre(livre) {
        const find = this.livres.find(({ titre }) => titre === livre);
        try {
            if (!find) {
                throw new Error("Livre introuvable!");
            }
            find.retourner();
            alert(`Livre '${livre}' retourné avec succès.`);
        } catch (error) {   
            console.error(error);
        }
        localStorage.setItem("bibliotheque", JSON.stringify(this));
    }
}
