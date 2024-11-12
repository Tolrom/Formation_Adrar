export function calculMoyenne(element){
    let moyenne = 0,
        displayMoy = document.querySelector('#moyenne'),
        notes = document.querySelectorAll('input');

    notes.forEach(function(note){
        moyenne += Number(note.value);
    });

    moyenne /= 6;

    let mention = '';

    if(moyenne < 10){
        mention = ' Vous avez échoué, la honte.';
    }
    else if( moyenne < 12){
        mention = ' Vous l\'avez mais c\'est juste...';
    }
    else if(moyenne < 14){
        mention = ' Vous avez obtenu la mention Assez Bien';
    }
    else if(moyenne < 16){
        mention = ' Vous avez obtenu la mention Bien';
    }
    else if(moyenne < 18){
        mention = ' Vous avez obtenu la mention Très Bien';
    }
    else{
        mention = ' Suceur';
    }
    displayMoy.innerText += ' ' + moyenne.toFixed(2);
    element.innerText +=  mention;
}