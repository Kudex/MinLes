
const tasks = [
    {
        id: 1,
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: 2,
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: 3,
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
    {
        id: 4,
        completed: false,
        text: 'Выполнить ДЗ после урокааааааа',
    },
]


let a = "null"
const createTaskBlock = document.querySelector(".create-task-block")
//console.log("createTaskBlock", createTaskBlock)
createTaskBlock.addEventListener('submit', (event) => {
    // console.log(event)
    event.preventDefault()
    const { target } = event
    const taskNameInput = target.taskName
    const inputValue = taskNameInput.value

    a = inputValue
    console.log("a", a)

    if (inputValue) {
        //alert(`Вы создали задачу ${inputValue}`)
        const newTask = {
            id: `${tasks.length + 1}`,
            completed: false,
            text: `${inputValue}`,
        }
        console.log("newTask", newTask)
        tasks.push(newTask)
        console.log("tasks:", tasks)
        console.log("tasks.length:", tasks.length)

        console.log("a", a)
        toDo()



    } else if (!inputValue) {
        alert("Введите правильные данные")
        const spanEr = document.createElement("span")
        spanEr.className = "error-message-block"
        spanEr.innerText = "Error: Название задачи не должно быть пустым"
        createTaskBlock.append(spanEr)
    }
    //console.log("taskNameInput", taskNameInput)


})

//console.log("a2", a)




const enteries = Object.entries(tasks)
//console.log("enteries", enteries)

let inText = []
let newInText = []

function toDo() {
    // alert("toDo()")
    const taskLists = document.querySelector(".tasks-list")
    taskLists.innerText = ''


    for (let i = 0; i < tasks.length; i++) {


        const h = tasks[i]
        // console.log("h", h)
        const e = Object.values(h)
        console.log("inText", inText)
        inText = []
        // console.log("e0", e[2])
        inText.push(e[2])


        inText.forEach((name) => {
            //console.log("a2", a)
            //console.log("name", name)
            if (name === a) {
                console.log(`Такая задача ${a} уже есть`)
            } else {
                newInText.push(e[2])
            }
        })


        //console.log("e01", e[0][1])
        const taskItem = document.createElement("div")
        taskItem.className = "task-item"
        taskItem.dataset.taskId = `${e[0]}`
        // console.log("taskItem", taskItem)
        taskLists.append(taskItem)

        const divTaskItemMainContainer = document.createElement("div")
        divTaskItemMainContainer.className = "task-item__main-container"
        taskItem.append(divTaskItemMainContainer)
        // console.log("div2", divTaskItemMainContainer)

        const mainContent = document.createElement("div")
        mainContent.className = "task-item__main-content"
        divTaskItemMainContainer.append(mainContent)

        const checkForm = document.createElement("form")
        checkForm.className = "checkbox-form"
        mainContent.append(checkForm)
        //console.log("checkForm", checkForm)

        const input = document.createElement("input")
        input.className = "checkbox-form__checkbox"
        input.type = "checkbox"
        input.id = `task-${e[0]}`
        checkForm.append(input)
        // console.log("input", input)



        const label = document.createElement("label")
        label.htmlFor = `task-${e[0]}`
        checkForm.append(label)
        // console.log("label", label)

        const span = document.createElement("span")
        span.className = "task-item__text"
        span.innerText = `${e[2]}`
        mainContent.append(span)

        const button = document.createElement("button")
        button.className = "task-item__delete-button default-button delete-button"
        button.innerText = " Удалить"
        divTaskItemMainContainer.append(button)

    }
    console.log("inText", inText)
}
toDo()
console.log("newInText", newInText)






