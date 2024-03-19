const inputTask = document.querySelector("input")
// const inputValue = inputTask.value
const checkBtn = document.querySelector(".plus")
const taskContainer = document.querySelector(".task-container")
const taskCounter = document.querySelector(".show-task")

checkBtn.addEventListener("click", () => {
    const newTask = document.createElement("div")
    newTask.textContent = inputTask.value
    newTask.classList.add("task-show")
    taskContainer.appendChild(newTask)


    //also create the delete btn
    const delBtn = document.createElement("button")
    delBtn.classList.add(".dl_clr")
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    taskContainer.appendChild(delBtn)


})