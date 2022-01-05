
let tasks = [
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
let inText = []
let newInText = []












// let g = []
// let j = []
// tasks.forEach(e => g.push(Object.values(e)))
// //console.log('g', g)
// g.forEach(e => j.push(e[2]))
// console.log('j', j)
// console.log('g', g)







//--addEventListener('submit'--//

let a = "null"
const createTaskBlock = document.querySelector(".create-task-block")
//console.log("createTaskBlock", createTaskBlock)

createTaskBlock.addEventListener('submit', (event) => {
    // console.log(event)
    event.preventDefault()

    const { target } = event
    const taskNameInput = target.taskName
    const inputValue = taskNameInput.value

    const messBlock = document.querySelector(".error-message-block")
    const divOne = document.querySelector(".newDiv")

    const testBlock = document.querySelectorAll(".error-message-block")
    const testBlockLen = testBlock.length
    console.log("-----inTextFirst------:", inText)
    let g = []
    let j = []
    tasks.forEach(e => g.push(Object.values(e)))
    //console.log('g', g)
    g.forEach(e => j.push(e[2]))
    console.log('j', j)
    console.log('g', g)




    a = inputValue.trim()
    a.trim()
    console.log("A", a)


    const checkvalid = (a) => {
        if (!inputValue || j.includes(a)) {
            console.log('checkvalid is falses')
            return false
        }
        console.log('checkvalid is true')
        return true
    }
    console.log("tasks_SUBMIT:", tasks)

    console.log('j', j)
    console.log('g', g)

    checkvalid()

    let isValid = checkvalid(a)
    console.log("isValid", isValid)

    let include = newInText.includes(a)

    console.log("include", include)
    console.log("AInclud", a)




    if (inputValue && include == false) {
        inText = []

        //alert(`Вы создали задачу ${inputValue}`)
        // if (a = inText) {
        //     alert(`Такая задача ${a} уже есть`)
        // }
        console.log("tasks1__if_--addEventListener('submit'--:", tasks)
        let timeId = Date.now()

        const newTaskId = Number(`${tasks.length + 1}`)
        console.log("tasks.length_in_if:", tasks.length)
        console.log("newTaskId//", newTaskId)


        const newTask = {
            // id: `${newTaskId}`,
            id: timeId,
            completed: false,
            text: `${inputValue}`,
        }


        console.log("newcreatedNewTask", newTask)

        console.log("tasksBeforePush:", tasks)

        tasks.push(newTask)

        console.log("tasksAfterPush:", tasks)
        console.log("tasks.length:", tasks.length)

        console.log("a", a)
        console.log("testBlockLen", testBlockLen)
        console.log("testBlock", testBlock)




        inText = []



        toDo()
        //console.log("newArrayTask000000000000000000000000", newArrayTask)
        // messBlock.remove()
        //console.log(messBlock)
        //messBlock.remove()
        document.querySelectorAll(".error-message-block").forEach(e => e.parentNode.removeChild(e));

        // testBlock.remove()

    } else if (!inputValue) {

        document.querySelectorAll(".error-message-block").forEach(e => e.parentNode.removeChild(e));
        const spanEr = document.createElement("span")
        spanEr.className = "error-message-block"
        spanEr.innerText = "Введите данные"
        divOne.append(spanEr)
        console.log("1")



    } else if (include == true) {
        //alert(`Такая задача ${a} уже есть`)
        //divOne.remove()
        //messBlock.remove()
        inText = []
        document.querySelectorAll(".error-message-block").forEach(e => e.parentNode.removeChild(e));
        const spanEr = document.createElement("span")
        spanEr.className = "error-message-block"
        spanEr.innerText = `Такое название задачи: "${a}"  уже есть. `
        divOne.append(spanEr)
        console.log("2")
        console.log("inText", inText)
        console.log("newInText", newInText)
        //console.log("newTask2", newTask)
        console.log("tasks", tasks)
        inText = []
        // newInText = []

    }



})
const enteries = Object.entries(tasks)
//console.log("enteries", enteries)




//--function toDo()--//

function toDo() {
    // alert("toDo()")
    const taskLists = document.querySelector(".tasks-list")
    taskLists.innerText = ''

    inText = []


    newInText = []
    console.log("newInText_to_Do", newInText)
    for (let i = 0; i < tasks.length; i++) {


        let h = tasks[i]
        // console.log("h", h)
        const e = Object.values(h)
        //console.log("inText", inText)
        inText = []
        console.log("e[2]", e[2])
        inText.push(e[2])
        ////
        console.log("newInText1BeforePush", newInText)
        newInText.push(e[2])


        console.log("inText", inText)

        // newInText.forEach((name) => {
        //     if (name == a) {
        //         console.log(`Такая задача ${inText} уже есть`)
        //     } else {
        //         //console.log(`Такой задачи ${a} еще нет`)
        //     }
        // })

        //console.log("newInText", newInText)

        //console.log("e01", e[0][1])
        console.log("newInText2", newInText)


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
        // span.className = "task-item__text"
        span.className = `task-item__text-${e[0]}`
        span.innerText = `${e[2]}`
        mainContent.append(span)

        const button = document.createElement("button")
        button.className = "task-item__delete-button default-button delete-button"
        button.id = "deleteBtn"
        button.dataset.btnTaskId = `${e[0]}`
        button.innerText = " Удалить"
        divTaskItemMainContainer.append(button)

        //const delBtn = document.querySelector("deleteBtn")
        //console.log("delBtn", delBtn)


    }
    //console.log("inText", inText)
    console.log("newInText3", newInText)

    // let include = newInText.includes(a)

    // console.log("include", include)
    // console.log("AInclud", a)

}

toDo()



const delNav = document.querySelector("#deleteBtn")


// //Актуальная ф-ция

// div = Array.from(document.querySelectorAll('#deleteBtn'));
// div.forEach((e) => {
//     e.onclick = function () {
//         const taskToDel = document.querySelector(`[data-task-id="${e.dataset.taskId}"]`)
//         taskToDel.remove();
//         console.log("this.dataset.taskId", e.dataset.taskId)
//     }
// });

const taskList = document.querySelector(".tasks-list")
console.log("taskListYep:", taskList)
let testVar = 0



const modalWindow = document.querySelector(".modal-overlay")
console.log("modalWindow:", modalWindow)

//const modalDeleteBtn = document.querySelector(".delete-modal__button delete-modal__confirm-button")
//console.log("modalDeleteBtn:", modalDeleteBtn)

const modalCancelBtn = document.querySelector("#modalDelBtn-1")
console.log("modalCancelBtn:", modalCancelBtn)


const createBtn = document.querySelector(".create-task-block__button default-button")
console.log("createBtn:", createBtn)

//const btn = document.querySelector(``)

const modalDeleteBtn2 = document.querySelector(`[data-del-btn-id ="2"]`)
const modalDeleteBtn3 = document.querySelector("#modalDelBtn-2")
const modalDeleteBtn1 = document.querySelector(".delete-modal__button delete-modal__confirm-button")
console.log("modalDeleteBtn1:", modalDeleteBtn1)
console.log("modalDeleteBtn2:", modalDeleteBtn2)
console.log("modalDeleteBtn3:", modalDeleteBtn3)


//--Delete Container--//

taskList.addEventListener('click', (event) => {
    const { target } = event
    console.log("target:", target)



    const cont = target.closest(".task-item")
    console.log("cont:", cont)

    const targetDataset = target.dataset
    //console.log("targetDataset", targetDataset)
    //console.log("targetDataset[0]:", targetDataset[0])

    const tarDatOb = Object.values(targetDataset)
    console.log("tarDatOb", tarDatOb)

    const tarDataText = Object.values(targetDataset)
    console.log("tarDatOb", tarDatOb)
    testVar = tarDatOb

    //const btn = document.querySelector(`[data-btn-task-id = "${tarDatOb}"]`)
    const btn = document.querySelector(`[data-btn-task-id = "${tarDatOb}"]`)
    console.log("btn:", btn)



    if (target == btn) {

        modalWindow.className = "modal-overlay"
        modalCancelBtn.addEventListener('click', (event) => {
            modalWindow.className = "modal-overlay modal-overlay_hidden"
        })



        modalDeleteBtn3.addEventListener('click', (event) => {
            const { target } = event

            ////

            tasks.forEach((name) => {
                console.log("name:", name)
                const nameVal = Object.values(name)
                console.log("nameVal:", nameVal)
                console.log("nameVal[0]:", nameVal[0])
                console.log("nameVal[2]:", nameVal[2])




                const idToRemove2 = `${tarDatOb}`;
                //console.log("idToRemove2", idToRemove2)

                const lastIdToRemove = Number(idToRemove2)
                console.log("lastIdToRemove", lastIdToRemove)

                const taskFilter = tasks.filter((item) => item.id !== lastIdToRemove);

                tasks = taskFilter

                console.log("tasks:", tasks)
                console.log("taskFilter", taskFilter)

                //console.log("newInText", newInText)



                console.log("tasksBefore:", tasks)
                console.log("testVar", testVar)
                const taskRem = `${testVar}`;
                console.log("taskRem", taskRem)

                const lastTaskRem = Number(taskRem)
                console.log("lastTaskRem", lastTaskRem)

                let newTaskFilter = tasks.filter((item) => item.id !== lastIdToRemove);

                // tasks = taskFilter
                tasks = newTaskFilter
                console.log("tasksAfter:", tasks)
                console.log("taskFilterAfter", newTaskFilter)






                //
                const spanVal = document.querySelector(`.task-item__text-${lastIdToRemove}`)
                console.log("spanVal", spanVal)
                console.log("spanVal.innerText", spanVal.innerText)


                console.log("newInTextBeforeFilter: ", newInText)
                newInText = newInText.filter((item) => item !== spanVal.innerText)
                console.log("newInTextAfterFilter: ", newInText)
                console.log("tasks: ", tasks)





                let newArrayTask = []
                let tasksClone = tasks
                function taskReindex() {


                    function contRemove() {
                        cont.remove()
                        modalWindow.className = "modal-overlay modal-overlay_hidden"
                    }

                    setTimeout(contRemove, 50)

                    inText = []

                }

                setTimeout(taskReindex, 90)

            })
            /////

            // console.log("modalDeleteBtn:", modalDeleteBtn)
            // console.log("modalCancelBtn:", modalCancelBtn)
        })









        ////////////////////////////////////////////////////////////////////
        // tasksClone.forEach((name, index) => {
        //     //console.log(`taskReindex_index: ${index}`)
        //     console.log(`tasksCloneFirst-${index}`, tasksClone)
        //     console.log(`name #${index}`, name)
        //     console.log(` tasksCloneBefore[${index}]`, tasksClone[index])
        //     let taskId = Object.values(tasksClone[index])
        //     console.log(" tasksCloneIdBeforeChange:", taskId[0])
        //     console.log(" taskId[2]:", taskId[2])
        //     taskId[0] = index
        //     console.log("tasksCloneIdAfterChange:", taskId[0])
        //     let numTask = Number(`${taskId[0] + 1}`)
        //     console.log("numTask:", numTask)

        //     console.log(` tasksCloneAfter[${index}]`, tasksClone[index])

        //     const newTaskFroClone = {
        //         // id: `${newTaskId}`,
        //         id: numTask,
        //         completed: false,
        //         text: `${taskId[2]}`,
        //     }
        //     newArrayTask.push(newTaskFroClone)
        //     console.log("newArrayTask", newArrayTask)


        //     console.log("tasks_before_newArrayTask", tasks)
        //     tasks = newArrayTask
        //     console.log("inText", inText)
        //     //console.log("newInText", newInText)
        //     console.log("newTaskFilterBefore", newTaskFilter)
        //     inText = []
        //     newTaskFilter = tasks

        //     console.log("newTaskFilterAfter", newTaskFilter)
        //     // if (newInText = {}) {
        //     //    // tasks = []
        //     // }
        //     let t = Date.now();
        //     console.log("t:", t)
        // })
        ///////////////////////////////////////////////////////////////////////







    }


})




// const people = [
//     { id: 1, name: 'serdar' },
//     { id: 5, name: 'alex' },
//     { id: 300, name: 'brittany' }
// ];

// const idToRemove = 5;

// const filteredPeople = people.filter((item) => item.id !== idToRemove)
// console.log("filteredPeople", filteredPeople)

// //

// let t = time();
// console.log("t:", t)
let t = Date.now();
console.log("t:", t)



function contRemove() {
    let н = Date.now();
    console.log("н:", н)
}

setTimeout(contRemove, 1563)