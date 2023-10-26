
let tabl = [10,158,940,154,22,15,785,159,658,253,105,12,3,157,896,3,3,3,3];
// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.

function positionBiggest(tab){
    let max = tab[0];
    let maxPos = 0;
    for(let i = 1 ; i < tab.length ; i++) {
        if (tab[i] > max){
            max = tab[i];
            maxPos = i;
        }
    }
    return maxPos;
}
console.log("La pos du biggest");
console.log(positionBiggest(tabl));
console.log(positionBiggest([4,7,5,5,6]));
console.log(positionBiggest([150,120,130]));

// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.


// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.