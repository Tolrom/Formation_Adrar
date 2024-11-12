import './style.css'
import { commandePizza } from './pizzeria.js';
import { calculMoyenne } from './moyenne.js';

document.querySelector('#app').innerHTML = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
    <div class="bulletin">
      <input type="number" id="maths" placeholder="Note de Mathématiques">
      <input type="number" id="fra" placeholder="Note de Français">
      <input type="number" id="ang" placeholder="Note d'Anglais">
      <input type="number" id="histg" placeholder="Note d'Histoire-Géo">
      <input type="number" id="phychi" placeholder="Note de Physique-Chimie">
      <input type="number" id="eps" placeholder="Note de Sport">
    </div>
    <button id="calcul" type="button">Calculer la moyenne</button>
      <h2 id="moyenne">
      Moyenne : 
      </h2>
      <h2 id="mention">
      Mention :
      </h2>
    </div>
    <h1 id="titre">Me cliquez pas dessus svp</h1>
    <button id="hack" type="button">PIRATER LE SYSTEME</button>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
`

commandePizza(document.querySelector('#counter'));

let calcul = document.querySelector('#calcul');

calcul.addEventListener( "click" , () => calculMoyenne(document.querySelector('#mention'))); 

let lesTxt = document.querySelectorAll('p');
console.log(lesTxt);
let textesTab = Array.from(lesTxt);
console.log(textesTab);

let hack = document.querySelector('#hack');
hack.addEventListener("click", function(){
  textesTab.map((p)=> {
    p.innerText = 'PIRATAGE EN COURS';
  });
})

let title = document.querySelector('#titre'),
  titleState = true;

title.addEventListener("click", function(){
  titleState? title.textContent = 'Ahhhh noooon recliquez recliquez viiiite!!' : title.textContent = 'Me cliquez pas dessus svp';
  titleState = !titleState;
})