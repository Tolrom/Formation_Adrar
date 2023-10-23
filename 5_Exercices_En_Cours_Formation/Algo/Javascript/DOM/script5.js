let compteur = 1;
function addTask(){
    const tasks = document.querySelector('#tasks'),
          texte = document.querySelector('#task').value,
          contain = document.createElement('div'),
          task = document.createElement('p'),
          del = document.createElement('button'),
          update = document.createElement('button');
    del.setAttribute('id', 'delete');
    del.setAttribute('onclick', 'deleteTask(this)');
    del.textContent = 'Supprimer';
    update.setAttribute('id', 'update');
    update.setAttribute('onclick', 'updateTask(this)');
    update.textContent = 'Mettre à jour';
    contain.setAttribute('id', compteur++);
    task.textContent = texte;
    tasks.appendChild(contain);
    contain.appendChild(task);
    contain.appendChild(del);
    contain.appendChild(update);
}

function delAllTask(){
    const tasks = document.querySelector('#tasks');
    while(tasks.lastElementChild){
        tasks.removeChild(tasks.lastElementChild);
    }
}

function reload(){
    location.reload();
}

function deleteTask(tache){
    tache.parentNode.remove();
}

function updateTask(tache){
    const texte = document.querySelector('#task').value;
    tache.parentNode.firstChild.textContent = texte;
}