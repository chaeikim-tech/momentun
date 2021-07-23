const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo) {
    return toDo.id === 1


}
//filter는 마치 forEach에서 function을 실행하는것 같이 각각의 item과 같이 실행 됨.


const toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toD0) {
        return toDo.id !== parseInt(li.id);
        //parseInt = string -> number
    });
    console.log(cleanToDos);
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

//array가 가진 forEach
//forEach 기본적으로 함수 실행, array에 담겨진 것들을 각각 한번씩 함수를 실행해줌

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (todo) {
            paintToDo(toDo.text);
        });
    }
}
//toDos를 가져온 뒤, 이 라인에서 parse, 즉, 가져온것을 자바스크립트 object로 변환
//각각에 대해서 paintToDo라는 function실행.
//paintToDo는 위에 정의해둠

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
