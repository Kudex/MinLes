
///////////////////////////////////////// 1 //////////////////////////////////////////

//fetch
// GET, POST, DELETE

// const TODO_URL = "https://jsonplaceholder.typicode.com/todos"

// const createTodosElement = (text) => {
//     const todoElement = document.createElement("li")
//     const todoElementAnchor = document.createElement("a")
//     todoElementAnchor.href = "#"
//     todoElementAnchor.textContent = text
//     todoElement.append(todoElementAnchor)
//     return todoElement
// }
// const dataContainer = document.querySelector("#data-container")

// const getAllTodos = () => {


//     const result = fetch(TODO_URL, {
//         method: "GET",
//     })
//     console.log("result", result)
//     result
//         .then((Response) => {
//             if (!Response.ok) {
//                 throw new Error("Ошибка запроса")
//             }
//             return Response.json()
//         })
//         .then((todos) => {
//             console.log("todos", todos)
//             todos.forEach((todos) => {
//                 const todoHTML = createTodosElement(todos.title)
//                 dataContainer.append(todoHTML)
//             })
//         })
//         .catch((error) => {
//             console.log("error", error)

//         })
// }
// getAllTodos()


///////////////////////////////////////// 2 //////////////////////////////////////////

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos"
const todoIds = [43, 56, 88, 98, 108]
const dataContainer = document.querySelector("#data-container")

const createTodosElement = (text) => {
    const todoElement = document.createElement("li")
    const todoElementAnchor = document.createElement("a")
    todoElementAnchor.href = "#"
    todoElementAnchor.textContent = text
    todoElement.append(todoElementAnchor)
    return todoElement
}

const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults)
        })
        .then((todos) => {
            console.log('todos', todos)
            todos.forEach((todo) => {
                const todoHTML = createTodosElement(todo.title)
                dataContainer.append(todoHTML)
            })
        })
}
getTodosByIds(todoIds)