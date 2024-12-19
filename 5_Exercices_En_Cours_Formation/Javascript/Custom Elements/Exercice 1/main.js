class UserCard extends HTMLElement {
    constructor() {
        super();
        const   name = this.getAttribute('name'),
                surname = this.getAttribute('surname'),
                mail = this.getAttribute('mail'),
                age = this.getAttribute('age'),
                pic = this.getAttribute('pic'),
                title = document.createElement('h3'),
                img = document.createElement('img'),
                infos = document.createElement('h4');

        title.innerText = `${ name } ${ surname }`;
        infos.innerText = `mail : ${ mail } \n \n ${ age } ans`;
        img.setAttribute('src', pic);
        this.appendChild(img);
        this.appendChild(title);
        this.appendChild(infos);
    }
};

customElements.define('user-card', UserCard);