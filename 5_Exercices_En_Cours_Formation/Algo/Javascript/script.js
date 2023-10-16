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
    mots = prompt('Rentre trois mots séparés par un espace');
    mots = mots.split(' ');
    let tri = mots;
    tri = tri.sort();
    console.log(tri);
    console.log(mots);
    if (tri == mots){
        console.log("Ils sont dans l'ordre alphabétique!");
    } 
    else {
        console.log("Ils ne sont pas dans l'ordre alphabétique!");
    }
}

alpha();