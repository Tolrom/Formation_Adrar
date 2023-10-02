let tab1 = [12,2,75,43,65,11];
let tab2 = [10,158,940,154,22,15,785,159,658,253,105,12,3,157,896,3,3,3,3];

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

function tabLastDisp(tab) {
    console.log(tab[tab.length-1]);
}
console.log("Le dernier");
tabLastDisp(tab1);
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function tabLastRet(tab) {
    return(tab[tab.length-1]);
}
console.log(tabLastRet(tab1));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

// function tabMin(tab){
//     let min;
//     for(let i = 0 ; i < tab.length ; i++){
//         for(let j = 0 ; j < tab.length ; j++) {
//             if (tab[i] > tab[j] || tab[i] > min) {
//                 break;
//             }
//             min = tab[i];
//         }
//     }
//     return min;
// }

function tabMin(tab){
    let min = tab[0];
    for(let i = 1 ; i < tab.length ; i++) {
        if (tab[i] < min){
            min = tab[i];
        }
    }
    return min;
}

console.log("Le minimum");
console.log(tabMin(tab2));
console.log(tabMin([15,12,13]));
console.log(tabMin([150,120,130]));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function tabMax(tab){
    let max = tab[0];
    for(let i = 1 ; i < tab.length ; i++) {
        if (tab[i] > max){
            max = tab[i];
        }
    }
    return max;
}
console.log("Le maximum");
console.log(tabMax(tab2));
console.log(tabMax([15,12,13]));
console.log(tabMax([150,120,130]));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

function tabMax(tab){
    let max = tab[0];
    for(let i = 1 ; i < tab.length ; i++) {
        if (tab[i] > max){
            max = tab[i];
        }
    }
    return max;
}
console.log("Le deuxième maximum");
console.log(tabMax(tab2));
console.log(tabMax([15,12,13]));
console.log(tabMax([150,120,130]));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

function tabOccur(tab, x){
    let occur = 0;
    for(let i = 0 ; i < tab.length ; i++){
        if (tab[i] == x) {
            occur++;
        }
    }
    return occur;
}
console.log("Les occurences");
console.log(tabOccur(tab2, 3));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function tabPres(tab, x){
    for(let i = 0 ; i < tab.length ; i++){
        if (tab[i] == x) {
            return true;
        }
    }
    return false;
}
console.log("La présence");
console.log(tabPres(tab2, 10));
console.log(tabPres(tab2, 999));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// On peut peut-être définir les règles du tri pour avoir la valeur recherchée en début ou en fin de tableau.

// Créer un tableau qui contient [1,2,3,...,7777].

let tab3 = [];
for (let i = 1 ; i < 7778 ; i++) {
    tab3.push(i);
}
console.log("Génération de tableaux");
console.log(tab3[tab3.length-1]);

// Créer un tableau qui contient [10,20,30,...,77770].

let tab4 = [];
for (let i = 10 ; i < 77771 ; i+=10) {
    tab4.push(i);
}
console.log(tab4[tab3.length-1]);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

let tab5 = [];
for (let i = 0 ; i < tab4.length ; i++){
    tab5.push(tab4[i]/2);
}
console.log(tab5[tab5.length-1]);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]

function tabSuppr(tab) {
    while (tab[tab.length-1] < 50){
        tab.pop();
    }
    return tab;
}
console.log("Suppression des dernières valeurs");
console.log(tabSuppr([1,45,88,54,23,-100,12]));