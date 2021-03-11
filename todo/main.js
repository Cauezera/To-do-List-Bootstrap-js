const buttonAddTask = document.querySelector("#button-add-task")
const buttonEdit = document.querySelector("#btn-check-edit")
const inputTask = document.querySelector("#input-task")
const alertAlter = document.querySelector("#alert-alter")


buttonAddTask.addEventListener("click", () => {
    // const response = await fetch 
})

let bool = 2;

buttonEdit.addEventListener("click", () => {
    if (bool%2 == 0) {
        inputTask.removeAttribute("disabled")
        bool++
    } else {
        inputTask.setAttribute("disabled", "disabled")
        bool--
        alertAlter.classList.remove("d-none")
        setTimeout(function(){alertAlter.classList.add("d-none")}, 2000 )
    }
})  

        