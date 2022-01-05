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


const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
let isLoading = false
const getPosts = async () => {
    try {
        isLoading = true
        console.log("isLoading", isLoading)

        const response = await fetch(POSTS_URL, {
            method: 'POST',
        })
        console.log("response", response)
        if (!response.ok) {
            throw new Error("Error")
        }
        const posts = await response.json()
        console.log("posts", posts)
    } catch (error) {
        console.log("error", error)
    } finally {
        console.log("Ready!")
        isLoading = false
        console.log("isLoading", isLoading)
    }
}



getPosts()