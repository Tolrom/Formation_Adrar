const bouton = document.querySelector('#bt'),
    ville = document.querySelector('#ville'),
    nom = document.querySelector('#nom'),
    temps = document.querySelector('#temps') ,
    temperature = document.querySelector('#temperature'),
    tout = document.querySelectorAll('p'),
    erreur = document.querySelector('#error');

bouton.addEventListener('click', ()=> {
    const adresse = `https://api.openweathermap.org/data/2.5/weather?q=${ville.value}&appid=6f88826d767f323ad19cd282444924e9`,
    meteo = fetch(adresse).then(async response => {
        const json = await response.json();
        if(json.cod == 404) {
            tout.forEach((para) => 
                para.textContent = ''     
            );
            erreur.textContent = `La ville de ${ville.value} n'existe pas dans notre base de données` 
        }
        else {
            erreur.textContent = '';
            temperature.textContent = `Il fait actuellement ${(json.main.temp-273.15).toFixed(2)}°C`;
            nom.textContent = `à ${json.name}`;
            temps.textContent = `Weather : ${json.weather[0].main} `;
        }
    });
});