// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
// let isLoading = false;
// const createNewPost = () => {
//     isLoading = true;
//     fetch(POSTS_URL, {
//         method: 'POST',
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log('result', result)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//         .finally(() => {
//             isLoading = false;
//         });
// };
// createNewPost();


// const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
// let isLoading = false
// const getPosts = async () => {
//     try {
//         isLoading = true
//         console.log("isLoading", isLoading)

//         const response = await fetch(POSTS_URL, {
//             method: 'POST',
//         })
//         console.log("response", response)
//         if (!response.ok) {
//             throw new Error("Error")
//         }
//         const posts = await response.json()
//         console.log("posts", posts)
//     } catch (error) {
//         console.log("error", error)
//     } finally {
//         console.log("Ready!")
//         isLoading = false
//         console.log("isLoading", isLoading)
//     }
// }



// getPosts()


// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//             console.log("allTasks",allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }

// getTodosByIds([43, 21, 55, 100, 10]);

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds = async (ids) => {

    try {
        const requests = await ids.map((id) => fetch(`${TODOS_URL}/${id}`))
        //console.log("requests:", requests)
        let responses = await Promise.all(requests)
        const dataResults = responses.map((data) => data.json())
        //  console.log("dataResults:", dataResults)
        const newData = await Promise.all(dataResults)
        console.log("newData:", newData)
        newData.forEach((name) => {
            console.log("name:", name)


        })

    } catch (error) {
        console.log("error", error)
    }


}

getTodosByIds([43, 21, 55, 100, 10]);