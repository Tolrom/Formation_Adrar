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

function alpha(dieux){
    let dieu = dieux.split(" "); 
    let dieuxx = [];
    for(let i = 0 ; i < dieu.length ; i++){
        dieuxx.push([nemee(dieu[i]),dieu[i]]);
        // console.log( nemee(dieu[i]) + " " + dieu[i] );
    }
    const byValue = (a,b) => a - b;
    const sorted = dieuxx.sort(byValue);
    console.log(sorted); // [1,1,2,3,5,8,13,21]
    // console.log(dieuxx);
}

alpha("ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS");