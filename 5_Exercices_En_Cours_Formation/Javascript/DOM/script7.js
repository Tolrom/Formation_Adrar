const email = document.querySelector('#email'),
    mdp = document.querySelector('#password'),
    error = document.querySelector('#erreur');
let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
email.addEventListener('keyup', ()=> {
    console.log(email.value);
    console.log(regexEmail.test(email.value));
    // if(email.value.match(regexEmail)){
    if(regexEmail.test(email.value)){
        email.style.border = "2px solid green";
        email.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
        if(mdp.style.backgroundColor == "rgba(0, 255, 0, 0.5)"){
            error.textContent = 'Valide';
        }
    }else{
        email.style.border = "2px solid red";
        email.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        error.textContent = 'Invalide';
    }
});
mdp.addEventListener('blur', ()=>{
    // if(mdp.value.match(regexPwd)){
    if(regexPwd.test(mdp.value)){
        mdp.style.border = "2px solid green";
        mdp.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
        if(email.style.backgroundColor == "rgba(0, 255, 0, 0.5)"){
            error.textContent = 'Valide';
        }
    }else{
        mdp.style.border = "2px solid red";
        mdp.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        error.textContent = 'Invalide';
    }
});