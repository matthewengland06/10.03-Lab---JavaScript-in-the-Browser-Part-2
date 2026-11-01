function addTask(task){
    let newList = document.createElement('li');
    newList.innerHTML = `<span class="tasks">${task}</span><button class="doneButton">&#128473;</button>`;

    let olNode = document.querySelector('ol');

    olNode.appendChild(newList)

    let doneButtons = document.querySelectorAll('.doneButton');
    let lastDoneButton = doneButtons[doneButtons.length-1];
    lastDoneButton.addEventListener('click', removeTask);
}

function addBtnClick(){
    let input = document.getElementById('task-input');
    let text = input.value;

    if(text!=""){
        addTask(text);
    }
    

    input.value = "";
    input.focus();
}

function removeTask(event){
    let li = event.target.parentNode;
    let ol = li.parentNode;
    ol.removeChild(li);
}

function domLoaded(){
    let addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addBtnClick);

    let input = document.getElementById('task-input');
    input.addEventListener('keyup', function(event){
        if(event.key === "Enter"){
            addBtnClick();
        }
    })

    let defaultDoneButtons = document.querySelectorAll('.doneButton');
    defaultDoneButtons.forEach(function(button){
        button.addEventListener('click', removeTask);
    });
}

window.addEventListener('DOMContentLoaded', domLoaded);