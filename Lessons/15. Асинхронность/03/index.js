const url = "https://jsonplaceholder.typicode.com/users"
const urlIds = [5, 6, 2, 1]
const dataContainer = document.querySelector("#data-container")

const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader")
  let isHidden = loaderHTML.hasAttribute("hidden")

  if (isHidden) {
    loaderHTML.removeAttribute('hidden')
  } else {
    loaderHTML.setAttribute('hidden', '')
  }
}




const createUrlElement = (text) => {

  const urlElement = document.createElement("li")
  const urlElementAnchor = document.createElement("a")
  urlElementAnchor.href = "#"
  urlElementAnchor.textContent = text
  urlElement.append(urlElementAnchor)

  return urlElement

}

const getUsersByIds = (ids) => {
  toggleLoader()
  const requests = ids.map((id) => fetch(`${url}/${id}`))
  Promise.all(requests)
    .then((response) => {
      console.log("response:", response)
      response.forEach((res) => {
        //console.log("res", res)
        if (!res.ok) {
          console.log("ERRROR")
          throw new Error("Ошибка запроса!")
        }




      })
      const dataResults = response.map((respons) => respons.json())
      return Promise.all(dataResults)




    })
    .then((users) => {
      console.log("users: ", users)
      users.forEach((user) => {
        const userHTML = createUrlElement(user.name)
        dataContainer.append(userHTML)
      })
    })
    .catch((error) => {
      console.error("error", error)
    })
    .finally(() => {
      toggleLoader()
    })
}
getUsersByIds([5, 6, 2, 1, 6, 12])







// dataContainer

// const getAllUsers = () => {
//   toggleLoader()

//   const result = fetch(url, {
//     method: "GET",
//   })
//   console.log("result: ", result)
//   result
//     .then((response) => {
//       return response.json()
//     })
//     .then((users) => {

//       console.log("users", users)
//       users.forEach((user) => {
//         const createHTML = createUrlElement(user.username)
//         dataContainer.append(createHTML)
//       });


//     })
//     .catch((error) => {
//       console.error("error", error)
//     })
//     .finally(() => {
//       toggleLoader()
//     })

// }


// getAllUsers()

//const a = "ABC"
setTimeout(() => {
  console.log("ABC")
}, 3000)