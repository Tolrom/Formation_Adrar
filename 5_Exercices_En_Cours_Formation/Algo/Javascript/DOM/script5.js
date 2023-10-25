let compteur = 1;
localStorage.getItem('tasks') == null ? localStorage.setItem("tasks", ""):false;
let keys = localStorage.getItem('tasks');
keys = keys.split(",");

function addTask(){
    const texte = document.querySelector('#task').value,
          contain = document.createElement('div');
    contain.setAttribute('id', compteur++);
    keys = keys.toString();
    if(keys.length == 0){
        keys += texte;
    }
    else {
        keys += `,${texte}`;
    } 
    console.log(keys);
    keys = keys.split(",");
    localStorage.setItem("tasks", keys);

    // task.textContent = texte;
    // tasks.appendChild(contain);
    // contain.appendChild(task);
    // contain.appendChild(del);
    // contain.appendChild(update);
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

let statut = true;
function updateTask(tache){
    const texte = tache.parentNode.firstChild,
        updated = document.createElement('input');
    updated.setAttribute('type', 'text');
    updated.setAttribute('id', 'updated')
    if(statut == true){
        tache.parentNode.replaceChild(updated, texte);
        statut = !statut;
    }
    else if(statut == false){
        const task = document.createElement('p'),
            newTask = document.querySelector('#updated').value,
            update = document.querySelector('#updated');
        console.log(tache.parentNode, task, update);
        tache.parentNode.replaceChild(task, update);
        task.textContent = newTask;
        statut = !statut;
    }
}

function showAllTasks(){
    const tasks = document.querySelector('#tasks'),
        contain = document.createElement('div');
    console.log(keys);
    for(let i = 0 ; i < keys.length ; i++){
        const task = document.createElement('p'),
            del = document.createElement('button'),
            update = document.createElement('button');
        task.textContent = keys[i];
        console.log(task);
        tasks.appendChild(contain);
        contain.appendChild(task);
        del.setAttribute('id', 'delete');
        del.setAttribute('onclick', 'deleteTask(this)');
        del.textContent = 'Supprimer';
        update.setAttribute('id', 'update');
        update.setAttribute('onclick', 'updateTask(this)');
        update.textContent = 'Mettre à jour';
        contain.appendChild(del);
        contain.appendChild(update);
    }
}