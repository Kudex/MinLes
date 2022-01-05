const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOID_URL = "https://jsonplaceholder.typicode.com/todos"


const getTodosWithUserData = async () => {

    const response = await fetch(USERS_URL)
    console.log("response", response)
    const users = await response.json()
    console.log("users", users)
    //const userId = users[0]?.id
    const userId = []
    userId.forEach((user,index) => {
user[index].id.push(userId)        
    });

    console.log("userId", userId)
    const todosResp = await fetch(`${TODOID_URL}?userId=${userId}`)
    const todos = await todosResp.json()
    console.log("todos", todos)

}

const promise = getTodosWithUserData()
console.log("promise", promise)