Vue.createApp({

data(){
    return {
        user: {
            image: "./image.jpg",
            name: "Jeff Pizza",
            age: 20+Math.floor(Math.random()*40),
            num: Math.floor(Math.random()*1000000)
        },
        nombre: 0,
        texte1: '',
        texte2: '',
        txt: '',
        userName: '',
        color: 'red',
        game: {
            goal: Math.floor(Math.random()*100),
            num: 0,
            score: 0,
            message: '',
            style: '',
        },
        color1: 'green',
        color2: 'red',
        card: 'card',
        verif1: false,
        verif2: false,
        colorDyn: '',
        helloWorld: '',
        classHello: false,
        classWorld: false,
        displayToggle: '',
        films: [],
        movieType: '',
        textDisplay: 'Masquer le titre',
        courses: [],
        coursesType: '',
        listDisplay: 'Masquer la liste',
        displayToggleCourses: '',
    };
},

methods: {
    ageAdd(){
        return this.user.age + 10;
    },
    downNumber(){
        this.nombre--;
    },
    upNumber(){
        this.nombre++;
    },
    printKey(event){
        if(event.key.length === 1){
            this.texte1 += event.key;
        }
    },
    printKeyEsc(event){
        // console.log(event, event.key);
        if(event.key.length === 1){
            this.txt += event.key;
        }
        if(event.key == 'Escape'){
            this.texte2 = this.txt;
        }
    },
    alertGen(){
        alert("Alerte générale!");
    },
    userNameTest(){
        console.log('La fonction NAME a été exécutée');
        if(this.userName == ''){
            return 'test';
        }
        else{
            return 'Un autre test';
        }
    },
    chaudFroid(){
        let r = 255;
        let g = 0;
        if(this.game.num > 0){
            r = 255 - this.game.num/this.game.goal*255;
            g = this.game.num/this.game.goal*255;
        }
        return 'color: rgb('+r+','+g+',0);';
    },
    selectCard(y){
        switch (y) {
            case 1:
                this.color1 =='green' ? this.color1 = 'turquoise' : this.color1 = 'green';
                break;
            case 2:
                this.color2 =='red' ? this.color2 = 'yellow' : this.color2 = 'red';
                break;
            case 3:
                this.verif1 ? this.verif1 = false : this.verif1=true;
                break;
            case 4:
                this.verif2 ? this.verif2 = false : this.verif2=true;
                break;
            default:
                break;
        }
    },
    display(){
        if(this.displayToggle === ''){
            this.displayToggle = 'hidden';
            this.textDisplay = 'Afficher le titre';
        }
        else{
            this.displayToggle = '';
            this.textDisplay = 'Masquer le titre';
        }
    },
    addMovie(){
        this.films.push(this.movieType);
        this.movieType = '';
    },
    deleteMovie(index){
        this.films.splice(index, 1);
    },
    addCourses(){
        this.courses.push(this.coursesType);
        this.coursesType = '';
    },
    deleteCourses(index){
        this.courses.splice(index, 1);
    },
    displayCourses(){
        if(this.displayToggleCourses === ''){
            this.displayToggleCourses = 'hidden';
            this.listDisplay = 'Afficher la liste';
        }
        else{
            this.displayToggleCourses = '';
            this.listDisplay = 'Masquer la liste';
        }
    },
},
computed: {
    userNameTest2(){
        console.log('La fonction NAME a été exécutée une seule fois');
        if(this.userName == ''){
            return 'test';
        }
        else{
            return 'Un autre test';
        }
    },
},
watch: {
    'game.num': function(num){
        if(num > this.game.goal){
            this.game.message = "Eh non c'était moins";
            setTimeout(() => {
                this.game.num = 0;
            }, 3000);
        }
        else if(num < this.game.goal){
            this.game.message = "Non toujours pas";
        }
        else if(num === this.game.goal){
            this.game.message = "Yes bravo! Ton score est de "+this.game.score;
            setTimeout(() => {
                this.game.num = 0;
                this.game.score = 0;
                this.game.goal = Math.floor(Math.random()*100);
            }, 3000);
        }
    },
    helloWorld(value) {
        if(value === 'hello'){
            this.classHello = true;
        }
        if(value === 'world'){
            this.classWorld = true;
        }
    }

},
}).mount('#app');