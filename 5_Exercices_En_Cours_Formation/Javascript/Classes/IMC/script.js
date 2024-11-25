/**
 * @class
 * @classdesc Classe qui décrit une personne par son nom, sa taille, sa masse et son IMC
 */
class Imc {
    /**
     * Représente une personne ainsi que sa taille et sa masse
     * @constructor
     * @param {string} nom Le nom et prénom de la personne
     * @param {number} masse La masse en kg de la personne
     * @param {number} taille La taille en m de la personne
     */
    constructor(nom, masse, taille){
        this.nom = nom;
        this.masse = masse;
        this.taille = taille;
        this.imc = masse/taille**2;
    }
    /**
     * Permet d'afficher dans la console une phrase présentant la personne ainsi que son IMC
     */
    displayImc(){
        console.log(`Bonjour, ${this.nom}( ${this.masse}kg, ${this.taille}m) a un IMC de: ${this.imc.toFixed(2)}`);
    }
}

let list = [
    new Imc("Sebastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55),
    new Imc("Maxime", 90, 1.83),
];

list.forEach(function(person){
    person.displayImc();
});
