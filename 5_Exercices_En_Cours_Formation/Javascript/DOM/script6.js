const bouton = document.querySelector('#bt'),
    resultat = document.querySelector('#resultat');
let verif = 0;
let tab = [];

bouton.addEventListener('click', ()=> {
    const nom = document.querySelector('#nom').value,
        nomBox = document.querySelector('#nom'),
        prixHt = document.querySelector('#prixHt').value,
        prixBox = document.querySelector('#prixHt'),
        quantite = document.querySelector('#quantite').value,
        quantiteBox = document.querySelector('#quantite');
    if(nom == "" || nom == undefined){
        nomBox.style.border = "2px solid red";
    }
    else{
        nomBox.style.border = "2px solid green";
        verif++;
    }
    if(prixHt == "" || prixHt == undefined || isNaN(prixHt)){
        prixBox.style.border = "2px solid red";
    }
    else{
        prixBox.style.border = "2px solid green";
        verif++;
    }
    if(quantite == "" || quantite == undefined || isNaN(quantite)){
        quantiteBox.style.border = "2px solid red";
    }
    else{
        quantiteBox.style.border = "2px solid green";
        verif++;
    }
    if (verif == 3){
        tab.push(nom);
        tab.push(parseFloat(prixHt));
        tab.push(parseInt(quantite));
        tab.push(tab[1]*1.20*tab[2]);
        resultat.textContent = `Le prix TTC de ${quantite+' '+nom+'s'} est de ${tab[3].toFixed(2)}€`;
    }
});

