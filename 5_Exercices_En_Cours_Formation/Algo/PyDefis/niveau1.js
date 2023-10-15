// SW IV : On passe en vitesse lumière

function tatooine(x,y,z){
    while(10*x > y){
        x = (y*z)%10000;
        y = (3*z)%10000;
        z = (7*z)%10000;
    }
    console.log(x+","+y+","+z);
}
console.log("Les Navi-composantes");
tatooine(997,312,663);


// Désamorçage à la Tony Stark

function stark(x){
    let code = 0;
    for(let i = 0 ; i < x ; i++){
        if(i%3 == 0 || i%5 == 0){
            code += i ;
        }
    }
    console.log(code);
}
console.log("Le code de Tony Stark");
stark(1435);

// Désamorçage d'un explosif (I)

function bombe(x){
    let s = x.toString().split("");
    let U = ([s[0]+s[1]+s[2]]).map(Number);
    let N = ([s[3]+s[4]+s[5]]).map(Number);
    N = Number(N);
    for(let i = 0; i < N ; i++){
        U = Number(U);
        U *= 13;
        U = U.toString();
        if(U.length > 3){
            U = U[U.length-3]+U[U.length-2]+U[U.length-1];  
        }
        U.toString();
    }
    console.log("Le code de la bombe est :")
    console.log(U);
}

bombe(797114);


// Le lion de Némée

function nemee(dieu){
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let value = 0;
        for(let i = 0 ; i < dieu.length ; i++){
            value += alpha.indexOf(dieu[i])+ 1;
        }
    return value;
}

function alpha(entry){
    let dieu = entry.split(" "); 
    let dieux = [];
    for(let i = 0 ; i < dieu.length ; i++){
        dieux.push([nemee(dieu[i]),dieu[i]]);
        // console.log( nemee(dieu[i]) + " " + dieu[i] );
    }
    // console.log(dieux);
    dieux.sort();
    for(let i = 0 ; i < 4 ; i++){
        dieux.push(dieux.shift());
    }
    for(let i = 0 ; i < dieux.length ; i++){
        dieux[i].shift();
    }
    dieux.flat();
    dieux = dieux.toString();
    dieux = dieux.replaceAll(',',' ');
    console.log(dieux);
}
console.log("L'ordre des Dieux est le suivant :");

alpha("ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS");

// dieux = [ [x,y] , [x2,y2] , [x3,y3] ];
// dieux[0] = [x,y];
// dieux[0][0] = x

// Herculito IV - Le sanglier d'Érymanthe

function erym(sommets) {
    let cailloux = 0;
    for(let i = 0 ; i < sommets.length ; i++){
        if (sommets[i] > sommets[i-1]){
            cailloux += (sommets[i]-sommets[i-1])/10+1;
        }
    }
    return cailloux;
}
console.log("Le nombre de pierres jetées est de :");

console.log(erym([0, 20, 10, 120, 40, 170, 40, 60, 50, 100, 50, 180, 170, 180, 80, 130, 10, 150, 120, 130, 80, 170, 60, 110, 10, 60, 20, 180, 40, 50, 10, 70, 40, 190, 80, 130, 110, 190, 60, 170, 10, 200, 20, 50, 20, 180, 30, 70, 30, 130, 80, 120, 100, 140, 100, 110, 70, 170, 160, 180, 170, 200, 50, 170, 100, 130, 60, 70, 10, 180, 150, 180, 100, 140, 110, 120, 60, 100, 90, 180, 160, 190, 80, 90, 80, 90, 60, 90, 30, 80, 70, 110, 10, 110, 60, 70, 50, 180, 90, 140, 70, 160, 90, 200, 110, 160, 110, 150, 30, 100, 50, 120, 30, 160, 150, 200, 40, 120, 40, 90, 50, 170, 60, 140, 60, 150, 110, 200, 120, 130, 20, 110, 100, 170, 20, 200, 130, 180, 70, 140, 20, 30, 20, 90, 50, 80, 60, 110, 50, 120, 30, 180, 160, 170, 140, 180, 100, 170, 20, 130, 50, 100, 70, 190, 170, 200, 180, 190, 30, 50, 30, 40, 30, 150, 30, 70, 20, 180, 40, 60, 50, 190, 70, 170, 90, 150, 30, 100, 60, 100, 10, 60, 20, 150, 130, 180, 140, 190, 70, 150, 140, 180, 0]));

// Herculito X - Les boeufs de Géryon

function boeufs(){
    let total = 0;
    for(let b = 0 ; b < 334 ; b++){
        for(let r = b ; r < 334 ; r++){
            for(let n = r ; n < 334 ; n++){
                if (b*n*r == (b+r+n)*777 && n < b*2 ){
                    console.log(b , r , n);
                    total = b+n+r;
                    return total;
                }
            }
        }
    }
}
console.log("Le nombre de boeufs est de :");

console.log(boeufs());

// Herculito XI - Le jardin des Hespérides

function pommes(x){
    let pommes = 0;
    for(let i = 1 ; i < x+1 ; i++){
        if((i*i)%3 == 0){
            pommes += i*i;
        }
    }
    return pommes;
}

console.log("Hercule repartira avec ce nombre de pommes :");
console.log(pommes(50));