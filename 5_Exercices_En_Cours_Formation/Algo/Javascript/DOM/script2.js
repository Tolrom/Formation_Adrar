const user = {
    'id' : 1,
    'nom': 'Morlot',
    'prenom': 'Maxime',
    'age': '26 ans',
    'image' :'./logo.jpg'
};

const image = document.querySelector('img');
const para = document.querySelectorAll('p');
const bloc = document.querySelector("div");

bloc.setAttribute('id', user.id);
bloc.style.display = 'flex';
bloc.style.flexDirection = 'column';

para.forEach((element) => {
    element.style.fontSize = '11px';
    element.style.color = 'blue';
});

para[0].textContent = user.nom ;
para[1].textContent = user.prenom ;
para[2].textContent = user.age ;

image.setAttribute('src', user.image);
image.style.width = '100px';
image.style.top = '0';
image.style.right = '0';
image.style.margin = '10px';
image.style.alignSelf = 'flex-end';

bloc.style.backgroundColor = 'rgb(220,220,220)';