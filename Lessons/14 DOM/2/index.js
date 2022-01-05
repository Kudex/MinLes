
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
]
const enteries = Object.entries(tasks)
// console.log("enteries", enteries)

for (let i = 0; i < tasks.length; i++) {
    const h = tasks[i]
    // console.log("h", h)
    const e = Object.values(h)
    // console.log("e", e)

    // console.log("e0", e[0])

    // console.log("e01", e[0][1])




    const taskLists = document.querySelector(".tasks-list")


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
    console.log("checkForm", checkForm)

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

