

const $createEl = selector => document.createElement(selector);
const $selectEl = selector => document.querySelector(selector);


const URL = "https://jsonplaceholder.typicode.com/albums"

//////////////////////////////////////////////////////////////////////////
const toggleLoader = () => {
    const loaderHTML = document.querySelector("#loader")
    let isHidden = loaderHTML.hasAttribute("hidden")

    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}
///////////////////////////////////////////////////////////////////////

const ol = $selectEl("#data-container")
//console.log(ol)

function makeLi(item, index) {
    const el = $createEl('li')
    el.className = "title"
    el.id = `title_${index + 1}`
    el.innerText = `${index + 1}: ` + item
    return el
}

function makeErr() {
    const el = $createEl('span')
    el.className = "errorSpan"

    el.innerText = "Произошла ошибка в получении данных об альбомах..."
    return el
}


// const li = makeLi(text)
// console.log("li:", li)
// ol.appendChild(li)

const renderAlbums = async () => {
    toggleLoader()
    try {
        const responses = await fetch(URL)
        if (!responses.ok) {
            throw new Error("Error")
        }
        // console.log("responses", responses)
        const jsonResp = await responses.json()
        // console.log("jsonResp", jsonResp)
        let titles = []
        jsonResp.forEach((post) => {

            titles.push(post.title)
        })
        titles.forEach((title, index) => {
            const html = makeLi(title, index)
            //console.log("html", html)
            ol.appendChild(html)
        })
    } catch (error) {
        console.log("error", error)
        const htmlError = makeErr()
        ol.appendChild(htmlError)
    } finally {
        toggleLoader()
    }

}

renderAlbums()

// ___________



// const createTaskBlock = $selectEl(".create-task-block");
// const tasksListBlock = $selectEl('.tasks-list');

// function makeTaskItemText(item) {
//     const el = $createEl('span');
//     el.className = 'task-item__text';
//     el.innerText = item.text;

//     return el;
// }

// function makeTaskItemButton(item) {
//     const el = $createEl('button');
//     el.className = 'task-item__delete-button default-button delete-button';
//     el.innerText = 'Удалить';

//     el.dataset.btnTaskId = item.id;

//     return el;
// }

// function makeTaskItemForm() {
//     const el = $createEl('form');
//     el.className = 'checkbox-form';

//     return el;
// }

// function makeTaskItemContainer() {
//     const el = $createEl('div');
//     el.className = 'task-item__main-container';

//     return el;
// }

// function makeTaskItemLabel(item) {
//     const el = $createEl('label');
//     el.htmlFor = `task-${item.id}`;

//     return el;
// }

// function makeTaskItemCheckbox(item) {
//     const el = $createEl('input');
//     el.type = 'checkbox';
//     el.id = `task-${item.id}`;
//     el.dataset.taskId = item.id;

//     el.checked = !!item.completed;
//     el.className = 'checkbox-form__checkbox';

//     return el;
// }

// function makeTaskItem(item) {
//     const el = document.createElement('div');
//     el.className = 'task-item';
//     el.dataset.taskId = item.id.toString();
//     const container = makeTaskItemContainer();
//     const form = makeTaskItemForm();
//     const text = makeTaskItemText(item);
//     const deleteButton = makeTaskItemButton(item);
//     const label = makeTaskItemLabel(item);
//     form.appendChild(makeTaskItemCheckbox(item));
//     form.appendChild(label);
//     container.appendChild(form);
//     container.appendChild(text);
//     container.appendChild(deleteButton);

//     el.appendChild(container)

//     return el;
// }

// function renderList() {
//     tasksListBlock.innerHTML = "";
//     tasks.forEach(item => {
//         const taskItem = makeTaskItem(item);

//         tasksListBlock.appendChild(taskItem)
//     })
// }

// createTaskBlock.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const inputValue = event.target.querySelector('.create-task-block__input').value;
//     const errorBlock = $selectEl('.error-message-block');

//     const existingTaskName = tasks.find(task => task.text === inputValue);

//     if (!existingTaskName) {
//         tasks.push({
//             id: Date.now(),
//             completed: false,
//             text: inputValue,
//         });

//         renderList();
//         errorBlock.innerText = "";
//     } else {
//         errorBlock.innerText = `Такое название задачи: "${inputValue}" уже есть.`
//     }
// });

// document.addEventListener('click', (event) => {
//     const eventTarget = event.target;

//     if (eventTarget.classList.contains('task-item__delete-button')) {
//         const deletedTaskId = eventTarget.dataset.btnTaskId;

//         tasks = tasks.filter(task => {
//             return task.id != deletedTaskId
//         });

//         renderList();
//     }
// });

// document.addEventListener('input', (event) => {
//     const eventTarget = event.target;

//     if (eventTarget.classList.contains('checkbox-form__checkbox')) {
//         const checkedTaskId = eventTarget.dataset.taskId;
//         tasks = tasks.map(task => {
//             const newTask = {
//                 ...task
//             }
//             if (newTask.id == checkedTaskId) {
//                 newTask.completed = !task.completed;
//             }
//             return newTask;
//         });

//         renderList();
//     }
// });

// renderList();
