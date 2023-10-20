function calculer(){
    const resultat = document.querySelector("#resultat");
    let choco = document.querySelector("#quantite").value;
    let prix = 0;
    console.log(choco);
    if(choco == undefined || choco == 0){
        resultat.textContent = "Veuillez choisir un nombre de chocolatine";
    }
    else {
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
        resultat.textContent = `Le coût total est de ${prix.toFixed(2)}€`;
    }
}