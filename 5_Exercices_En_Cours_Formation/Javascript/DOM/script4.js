function ttc(){
    const resultat = document.querySelector("#resultat");
    const quant = document.querySelector("#quantite").value;
    const prixHt = document.querySelector("#prixHt").value;
    let nomProd = document.querySelector("#nomProduit").value + 's';
    let tab = [];
    if(quant <= 0 || quant == '' || isNaN(quant)) {
        if(prixHt <= 0 || prixHt == '' || isNaN(prixHt)){
        resultat.textContent = 'Veuillez saisir une quantité et un prix valides';
        }
        else {
            resultat.textContent = 'Veuillez saisir une quantité valide';
        }
    }
    else if(prixHt <= 0 || prixHt == '' || isNaN(prixHt)) {
        resultat.textContent = 'Veuillez saisir un prix valide';
    }
    else {
        tab.push(nomProd);
        tab.push(parseFloat(prixHt));
        tab.push(parseInt(quant));
        tab.push(tab[1]*1.20*tab[2]);
        resultat.textContent = `Le prix TTC de ${quant+' '+nomProd} est de ${tab[3].toFixed(2)}€`;
    }
}