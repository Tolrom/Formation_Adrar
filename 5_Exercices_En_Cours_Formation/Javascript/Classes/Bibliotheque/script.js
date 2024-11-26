import { Bibliotheque } from "./classes.js";

const   maBibliotheque = JSON.parse(localStorage.getItem('bibliotheque')) || new Bibliotheque("Ma Bibliothèque"),
        ajouter = document.querySelector('#ajouter'),
        titre = document.querySelector('#titre'),
        auteur = document.querySelector('#auteur'),
        emprunter = document.querySelector('#emprunter'),
        rendre = document.querySelector('#rendre'),
        select = document.querySelectorAll('select'),
        bibli = new Bibliotheque(maBibliotheque.nom, maBibliotheque.livres);

localStorage.setItem("bibliotheque", JSON.stringify(bibli));

//          Initialisation des listes du stock
select.forEach(function(list){
    let stock = bibli.livres;
    stock.forEach(function(livre){
        let entree = document.createElement('option');
        entree.innerText = livre.titre;
        list.appendChild(entree);
    })
})
ajouter.addEventListener('click', function(){
    try {
        if(titre.value && auteur.value){
            let livre = {
                "titre" : titre.value,
                "auteur" : auteur.value
            }
            bibli.ajouterLivre(livre);
        }
        else{
            throw new Error("Données incomplètes!")
        }
    } catch (error) {
        console.error(error);
    }
    
})

emprunter.addEventListener('click', function(){
    try {
        if(select[0].value){
            bibli.emprunterLivre(select[0].value);
        }
        else{
            throw new Error("Veuillez choisir un livre!")
        }
    } catch (error) {
        console.error(error);
    }
    
})

rendre.addEventListener('click', function(){
    try {
        if(select[1].value){
            console.log(bibli)
            bibli.retournerLivre(select[1].value);
        }
        else{
            throw new Error("Veuillez choisir un livre!")
        }
    } catch (error) {
        console.error(error);
    }
    
})