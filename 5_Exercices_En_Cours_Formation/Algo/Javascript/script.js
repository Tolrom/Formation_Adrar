// Exercice 1 
let nb1 = 5;
let nb2 = 45;
let temp;

temp = nb1;
nb1 = nb2;
nb2 = temp;
console.log('nb1 = '+ nb1 ,'nb2 = '+nb2);

// Exercice 2

function pos(x){
    x = parseInt(prompt("Rentre un nombre"));
    if(x > 0){
        return 'Le nombre est positif';
    }
    else if(x == 0){
        return 'Le nombre est nul';
    }
    else {
        return 'Le nombre est négatif';
    }
}

// alert(parseInt(addpos()));

// Exercice 3

function addpos(x,y){
    x = parseInt(prompt("Rentre un nombre"));
    y = parseInt(prompt("Puis un autre"));
    let xy = x+y;
    if(xy > 0){
        return 'La somme est positive';
    }
    else if(xy == 0){
        return 'La somme est nulle';
    }
    else{
        return 'La somme est négative';
    }
}

// alert(parseInt(addpos()));

// Exercice 4

function posprod(x,y){
    x = parseInt(prompt("Rentre un nombre"));
    y = parseInt(prompt("Puis un autre"));
    if(x > 0 && y > 0 || x < 0 && y < 0){
        return 'Le nombre est positif';
    }
    else if(x == 0 || y == 0){
        return 'Le nombre est nul';
    }
    else {
        return 'Le nombre est négatif';
    }
}

// alert(posprod());

// Exercice 5

/*
function cat(age){
    age = parseInt(prompt('Quel âge as-tu?'));
    if(age < 6){
        alert('Tu es trop jeune!');
    }
    else {
        switch (age) {
            case 6:
            case 7:
                alert('Tu es un poussin!');
                break;
            case 8:
            case 9:
                alert('Tu es un pupille!');
                break;
            case 10:
            case 11:
                alert('Tu es un minime!');
                break;
            default:
                alert('Tu es un cadet!');
                break;
        }
    }
}

cat();
*/

// Exercice 6

function alpha(mots){
    mots = prompt('Rentre trois mots séparés par une virgule');
    mots = mots.split(',');
    if (mots[0] < mots[1] && mots[1] < mots[2]){
        console.log("Ils sont dans l'ordre alphabétique!");
    } 
    else {
        console.log("Ils ne sont pas dans l'ordre alphabétique!");
    }
}

// alpha();

// Exercice 7

function croissant(){
    let tab = [];
    tab.push(prompt('Entre un nombre'));
    tab.push(prompt('Un autre'));
    tab.push(prompt('Puis un dernier'));
    if(tab[0] < tab[1] && tab[1] < tab[2]){
        console.log('Les valeurs sont triées par ordre croissant');
    }
    else {
        console.log('Les valeurs ne sont pas triées dans l\'ordre croissant');
    }
}

// croissant();

// Exercice 8

function ttc(){
    let tab = [];
    tab.push(prompt('Entre le nom du produit'));
    tab.push(parseFloat(prompt('Entre le prix HT')));
    tab.push(parseInt(prompt('Saisis la quantité')));
    tab.push(tab[1]*1.20*tab[2]);
    console.log(tab[tab.length-1]);
}

// ttc();

// Exercice 9

/*
let users = [];
for(let i = 0 ; i < 5 ; i++){
    let user = {
        'nom': prompt(`Saisir le nom du ${(i+1)}e utilisateur`),
        'prénom': prompt(`Saisir le prénom du ${(i+1)}e utilisateur`),
        'âge': parseInt(prompt(`Saisir l'âge du ${(i+1)}e utilisateur`)),
        'tel': parseInt(prompt(`Saisir le numéro de téléphone du ${(i+1)}e utilisateur`))
    };
    users.push(user);
}
let min = users[0]['âge'];
let minInd;
for(let i = 0 ; i < users.length ; i++){
    if(users[i]['âge'] < min){
        min = users[i]['âge'];
        minInd = i;
    }
}
console.log(`La personne la plus jeune s'appelle ${users[minInd]['prénom'] + ' ' + users[minInd]['nom']}`);
*/

// Exercice 10

/*
let notes = 0;
let effectif = 0;
let eleves = [];
for(let i = 0 ; i < 5 ; i++){
    let eleve = {
        'prenom': prompt('Saisir le prénom de l\'élève'),
        'note'  : parseFloat(prompt('Saisir sa note'))
    }
    eleves.push(eleve);
    notes += eleve.note;
    effectif++;
}
let max = eleves[0]['note'];
let maxInd;
for (let i = 0 ; i < eleves.length ; i++){
    if(eleves[i].note > max){
        max = eleves[i].note;
        maxInd = i;
    }
}
console.log(`La moyenne de la classe est de ${notes/effectif}`);
console.log(`${eleves[maxInd].prenom} a obtenu la meilleure moyenne avec ${eleves[maxInd].note}`);
*/

// Exercice 11

/*
let choco = parseInt(prompt('Saisir le nombre de chocolatines souhaité'));
let prix = 0;
for(let i = 0 ; i < choco ; i++){
    if(i < 10){
        prix += 1.4;
    }
    else if (i < 20){
        prix += 1.3;
    }
    else {
        prix += 1.2;
    }
}

console.log(`Le coût total est de ${prix.toFixed(2)}€`);
*/

// Exercice 12

/*
let nb = Math.floor(100*Math.random());
let reussite = 0;
let essais;
for(let i = 0 ; i < 10 ; i++){
    let tenta = prompt('Tente un nombre');
    if(tenta < nb){
        alert('Eh non c\'est plus!');
    }
    else if(tenta > nb){
        alert('Eh non c\'est moins!');
    }
    else if(tenta == nb){
        reussite++;
        essais = i;
        break;
    }
}
if(reussite == 1){
    alert(`Bravo! Tu as trouvé le nombre en ${essais} essais`);
}
else {
    alert('Tu es un mauvais mentaliste, change de métier!');
}
*/

// Exercice 13

let debanque;
let dejoueur;
let score = 0;
let scorebanque = 0;
for(let i = 0 ; i < 5 ; i++){
    debanque = Math.floor(Math.random()*5)+1;
    dejoueur = Math.floor(Math.random()*5)+1;
    if(dejoueur > debanque){
        score++;
    }
    if(dejoueur == debanque){
        score += 2;
    }
    else {
        scorebanque++;
    }
    console.log(debanque, dejoueur);
}
console.log(scorebanque, score);
if (scorebanque > score){
    console.log(`La banque gagne avec ${scorebanque} points!`);
}
else if (scorebanque == score){
    console.log(`C'est une égalité avec ${score} points!`);
}
else {
    console.log(`Le joueur gagne avec ${score} points!`);
}