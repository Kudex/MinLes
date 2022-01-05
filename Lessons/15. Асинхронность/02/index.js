const url = "https://jsonplaceholder.typicode.com/users"


const createUrlElement = (text) => {

  const urlElement = document.createElement("li")
  const urlElementAnchor = document.createElement("a")
  urlElementAnchor.href = "#"
  urlElementAnchor.textContent = text
  urlElement.append(urlElementAnchor)

  return urlElement

}

const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader")
  let isHidden = loaderHTML.hasAttribute("hidden")

  if (isHidden) {
    loaderHTML.removeAttribute('hidden')
  } else {
    loaderHTML.setAttribute('hidden', '')
  }
}


const dataContainer = document.querySelector("#data-container")
// dataContainer

const getAllUsers = () => {
  toggleLoader()

  const result = fetch(url, {
    method: "GET",
  })
  console.log("result: ", result)
  result
    .then((response) => {
      return response.json()
    })
    .then((users) => {

      console.log("users", users)
      users.forEach((user) => {
        const createHTML = createUrlElement(user.username)
        dataContainer.append(createHTML)
      });


    })
    .catch((error) => {
      console.error("error", error)
    })
    .finally(() => {
      toggleLoader()
    })

}


getAllUsers()