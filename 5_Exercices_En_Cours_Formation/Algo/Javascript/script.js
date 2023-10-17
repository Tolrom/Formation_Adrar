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