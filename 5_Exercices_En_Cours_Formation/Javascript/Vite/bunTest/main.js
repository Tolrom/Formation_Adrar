import './style.css'
import { commandePizza } from './pizzeria.js';
import { calculMoyenne } from './moyenne.js';
import collection from 'easter-egg-collection';

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
// console.log(lesTxt);
let textesTab = Array.from(lesTxt);
// console.log(textesTab);

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

let add = document.querySelector('#add'),
    rm = document.querySelector('#rm'),
    tog = document.querySelector('#tog'),
    pizza = document.querySelector('#counter');

add.addEventListener("click", function(){
  pizza.classList.add("chartreuseMode");
});
rm.addEventListener("click", function(){
  pizza.classList.remove("chartreuseMode");
});
tog.addEventListener("click", function(){
  pizza.classList.toggle("chartreuseMode");
});

const body = document.querySelector('body');
body.addEventListener("click", function($event){
  const img = document.createElement('img');
  img.classList.add('randImage');
  img.setAttribute('src', '/roma.png')
  img.style.position = 'absolute';
  let y = $event.clientY+window.scrollY,
      x = $event.clientX+window.scrollX;
  img.style.top = y-100+'px';
  img.style.left = x-150+'px';
  body.appendChild(img);
});

VANTA.WAVES({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})

const scrollbar = document.querySelector('#scrollbar');

addEventListener("scroll", ()=> {
  console.log(`
    Hauteur page : ${document.body.scrollHeight} \n
    Hauteur affichage : ${window.innerHeight} \n
    Scroll Position : ${window.scrollY} \n
    Pourcentage de scroll : ${window.scrollY/(document.body.scrollHeight-window.innerHeight)*100}
    `);
  scrollbar.style.width = window.scrollY/2295*100 + 'svw';
})

const formLink = document.querySelector('#formLink'),
      formBox = document.querySelector('#box'),
      submit = document.querySelector('#send');

formBox.addEventListener("keyup", function($event){
  if($event.key.length == 1){
    formLink.textContent += $event.key;
  }
  if($event.key == 'Backspace'){
    formLink.textContent = formLink.textContent.slice(0, -1);
  }
  if(formLink.textContent.length >= 5){
    submit.setAttribute('disabled',"");
  }
  else{
    submit.removeAttribute('disabled');
  }
});


const storageText = document.querySelector('#storageText');

storageText.value = localStorage.getItem('text');
storageText.addEventListener("keyup", function(){
  localStorage.setItem('text', storageText.value);
});

async function getPokemon(num) {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=0`);
    return await data.json();
  } catch (error) {
    throw new Error;
  }
}

const pokeNum = document.querySelector('#pokeNum'),
      pokeSend = document.querySelector('#pokeSend'),
      pokeList = document.querySelector('#poke');

pokeSend.addEventListener("click", async function() {
  pokeList.textContent = '';
  const num = pokeNum.value,
        list = await getPokemon(num);
  console.log(list, list.results);
  list.results.map((p)=> {
    const poke = document.createElement('li');
    poke.innerText = p.name;
    pokeList.appendChild(poke);
  });
})

