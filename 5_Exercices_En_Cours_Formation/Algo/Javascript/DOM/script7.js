const email = document.querySelector('#email'),
    mdp = document.querySelector('#password'),
    regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
email.addEventListener('keyup', ()=> {
    let mail = email.value.split('');
        for(let i = 0 ; i < mail.length ; i++){
            if(mail[i] == regexEmail){
                email.style.border = "2px solid green";
            }
            else {
                email.style.border = "2px solid red";
                break ;
            }
        }
});