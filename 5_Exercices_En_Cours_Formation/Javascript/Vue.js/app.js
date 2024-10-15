//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return {
        tasks: [],
        valeurDeInput: '',
        toto:'LOL TOTO',
        prenoms: [
            "Maxime",
            "Steven",
            "Jean-marie",
            "Quentin",
            "Audrey",
            "Laurie",
            "Farid",
            "Victor",
            "Romaric",
            "Théo",
            "Christopher",
            "Laurie"
        ],
        images: [
            { url: './images/1.jpg', alt: 'Album'},
            { url: './images/2.jpg', alt: 'Album'},
            { url: './images/3.jpg', alt: 'Album'},
            { url: './images/4.jpg', alt: 'Album'},
        ],
        script: "<script>alert('hacked')</script>;",
        obj: {
            name: "cool",
            tel: "06 33 43 96 90"
        }
    };
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    ajouterTask() {
    this.tasks.push(this.valeurDeInput);
    this.valeurDeInput = '';
    },
    afficherLivreRandom() {
        let ran = Math.random();
        if(ran > 0.5){
            return "Le livre de Bobba Fett";
        }
        else {
            return "La biographie de Jean-Luc Mélenchon";
        }
    },
},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');