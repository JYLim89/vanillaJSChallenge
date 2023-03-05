const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('.todo__input');
const toDoStart = document.querySelector('.todo__start');
const toDoEnd = document.querySelector('.todo__end');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function handleToDoSubmit(event) {
    event.preventDefault();

    const toDo = toDoInput.value;
    const toDoStartDay = toDoStart.value;
    const toDoEndDay = toDoEnd.value;

    const newToDoObj = {
        id: Date.now (),
        dayStart: toDoStartDay,
        dayEnd: toDoEndDay,
        text: toDo,
    }
    toDos.push(newToDoObj)
    addToDo(newToDoObj);
    saveToDo();
}

function addToDo(newToDoObj) {
    const li = document.createElement('li');
    const spanPeriod = document.createElement('span');
    const spanToDo = document.createElement('span');
    const btn = document.createElement('button');

    li.id = newToDoObj.id;
    spanPeriod.innerText = `${newToDoObj.dayStart} ~ ${newToDoObj.dayEnd}`;
    spanToDo.innerText = newToDoObj.text;
    btn.innerText = '⛔';

    li.appendChild(spanPeriod);
    li.appendChild(spanToDo);
    li.appendChild(btn);    
    toDoList.appendChild(li);

    btn.addEventListener("click", deleteToDo);

}

function deleteToDo(event) {
    console.log(event);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}


