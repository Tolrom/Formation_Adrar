function nth(x){
    let suite = [0,1];
        for(let i = 1 ; i < x ; i++){
            suite.push(suite[i]+suite[i-1]);
        }
    console.log(suite[suite.length-1]);
}

nth(prompt("Choisissez un nombre"));