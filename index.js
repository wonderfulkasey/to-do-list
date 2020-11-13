const todo = ["go for a walk", "go to store", "eat human food"]

const list = document.getElementById("list");


document.addEventListener("submit", newElement);

function addData() {
    for(let i = 0; i < todo.length; i++) {
        newElement(todo[i])
    }

}


function newElement(item) {
    const li = document.createElement("li");
    li.innerText = item
    list.appendChild(li)
    
}


addData()