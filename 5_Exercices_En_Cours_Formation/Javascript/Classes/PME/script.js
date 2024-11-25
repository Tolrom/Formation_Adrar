/**
 * @class
 * @classdesc Représente une PME ainsi que ses revenus, ses frais, son équipe.
 */
class Pme {
//! Paramètres
    /**
     * @constructor
     * @param {string} nom Le nom de la PME
     * @param {Employe[]} equipe Les membres de l'équipe de la PME 
     * @param {number} R Les revenus de la PME
     * @param {number} FF Les frais fixes de la PME
     * @param {number} FA Les frais d'achat de la PME
     */
    constructor(nom, equipe, R, FF, FA ){
        this.nom = nom;
        this.equipe = equipe;
        this.R = R;
        this.FF = FF;
        this.FA = FA;
    }

//!  Méthodes
    /**
     * Calcule le coût total des employés sur une année
     */
    coutEmployes(){
        let total = 0;
        this.equipe.forEach(function(employe){
            total += employe.calculCout();
        })
        return total;
    }
    /**
     * Calcule le bilan compable de l'entreprise et le présente mis en forme dans la console.
     */
    calculBilan(){
        const CA = this.R - (this.FA + this.FF + this.coutEmployes()) 
        console.log(`------------------ Ma Petite Entreprise (ne connaît pas la crise) ------------------ \n
                    ${this.nom} : Coût Initial : ${this.FA + this.FF} € \n
                    ${this.nom} : Coût total des équipes : ${this.coutEmployes()} € \n
                    ${this.nom} : Recettes : ${this.R} € \n
                    ${this.nom} : Chiffre d'affaire : ${CA} €        
            `);
    }
}
/**
 * @class
 * @classdesc Représente un employé de la PME
 */
class Employe {
//! Paramètres
    /**
     * @constructor
     * @param {string} nom Le nom de l'employé
     * @param {string} prenom Le prénom de l'employé
     * @param {number} age L'âge de l'employé
     * @param {number} salaire Le salaire mensuel en € de l'employé
     */
    constructor(nom, prenom, age, salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }

//!  Méthodes

    /**
     * Methode permettant de calculer le coût de revient d'un employé sur l'année
     */
    calculCout(){
        return this.salaire * 12 * 1.9;
    }
}

//?                 Scénario

const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employe("Duval", "Paul", 30, 2000),
    new Employe("Durand", "Alain", 40, 3000),
    new Employe("Dois", "Sylvia", 50, 4000)],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.calculBilan();