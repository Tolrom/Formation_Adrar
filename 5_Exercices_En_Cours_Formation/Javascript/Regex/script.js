const   form = document.querySelector('form'),
        test = document.querySelector('h1'),
        email = document.querySelector('#email'),
        password = document.querySelector('#password'),
        submit = document.querySelector('#submit'),
        issuesDisplay = document.querySelector('p'),
        issuesList = document.querySelector('#issues'),
        mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        charDec = /\d/,
        charSpe = /[$&@!?%]/;

/**
 * Vérifie la correspondance du mot de passe avec les recommandations et affiche les manquements le cas échéant.
 * @param {string} input 
 * @function
 */
function checkPass(input){
    let check = false;
    issuesList.innerHTML = '';
    if(!input.match(charDec)){
        let dec = document.createElement('li');
        dec.innerText = 'contenir au moins un chiffre';
        issuesDisplay.style.display = 'block';
        issuesList.appendChild(dec);
    }
    if(!input.match(charSpe)){
        let spe = document.createElement('li');
        spe.innerText = 'contenir au moins un caractère spécial (@,$,&,!,?,%)';
        issuesDisplay.style.display = 'block';
        issuesList.appendChild(spe);
    }
    if(input.length < 8){
        let leng = document.createElement('li');
        leng.innerText = 'être plus long (8 caractères minimum)';
        issuesDisplay.style.display = 'block';
        issuesList.appendChild(leng);
    }
    else {
        issuesDisplay.style.display = 'none';
        issuesList.innerHTML = '';
        check = true;
    }
    return check;
}

/**
 * S'assure que le texte reçu est une adresse mail dans sa forme
 * @param {string} input 
 * @function
 */
function checkMail(input){
    if(mailRegex.test(input)){
        email.style.backgroundColor = 'green';
        return true;
    }
    else {
        email.style.backgroundColor = 'red';
        return false;
    }
}

password.addEventListener('keyup', function(){
    issuesList.innerHTML = '';
    checkPass(password.value);
});

submit.addEventListener('click', function(){
    let mail = checkMail(email.value),
        pass = checkPass(password.value);
    if(mail && pass){
        test.innerText = 'BRAVO';
    }
    else{
        test.innerText = 'OUPS';
    }
})