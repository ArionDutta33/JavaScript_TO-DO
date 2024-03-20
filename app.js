const inputTask = document.querySelector("input")
// const inputValue = inputTask.value
const checkBtn = document.querySelector(".plus")
const taskContainer = document.querySelector(".task-container")
const taskCounter = document.querySelector(".show-task")

checkBtn.addEventListener("click", () => {

    if (inputTask.value === "")
        alert("pls enter a task")
    else {
        const newTask = document.createElement("div")
        newTask.textContent = inputTask.value
        newTask.classList.add("task-show")

        taskContainer.appendChild(newTask)


        //also create the delete btn
        const delBtn = document.createElement("button")
        delBtn.classList.add("delete")
        // delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        delBtn.innerHTML = 'Delete'
        newTask.appendChild(delBtn)

        //creating the check tbn
        const doneBtn = document.createElement("button")
        doneBtn.classList.add("done")
        doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        newTask.appendChild(doneBtn)

        //strike through if a task has been completed
        let flag = 1;
        doneBtn.addEventListener("click", (e) => {
            let target = e.target
            // console.log("hello")
            // console.log(target.parentElement)

            if (flag) {
                target.parentElement.parentElement.style.textDecoration = "line-through"
                flag = 0
            }
            else {
                target.parentElement.parentElement.style.textDecoration = "none"
                flag = 1
            }

        })

        //removing a task 
        delBtn.addEventListener("click", (e) => {

            let target = e.target
            if (target === delBtn)

                target.parentElement.remove()

            console.log("done")
        })
        inputTask.value = ""
    }

})
