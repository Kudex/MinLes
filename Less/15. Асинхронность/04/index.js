const url = "https://jsonplaceholder.typicode.com/photos/"

const dataContainer = document.querySelector("#data-container")


const createPhotoElement = (link,text)=>{
const liEl = document.createElement("li")
liEl.className = "photo-item"
const imgEl = document.createElement("img")
imgEl.className="photo-item__image"
imgEl.src = link
liEl.append(imgEl)

const hEl = document.createElement("h3")
hEl.className="photo-item__title"
hEl.textContent=text
liEl.append(hEl)

return liEl

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





const getFastestLoadedPhoto = (ids) => {
  toggleLoader()
  const requests = ids.map((id) => fetch(`${url}/${id}`))
  Promise.all(requests)
    .then((responses) => {
      console.log("responses", responses)
      const dataResults = responses.map((response) => response.json())
      return Promise.all(dataResults)
    })
    .then((photo) => {
      //let arr = []
      // console.log("photo", photo)
      // photo.forEach((name) => {
      //   arr.push(name)
      // })
      console.log("photo", photo)
      //console.log("arr", arr)
      Promise.race(photo)
        .then((value) => {
          console.log("value", value)
         const photoHTML = createPhotoElement(value.url,value.title)
          dataContainer.append(photoHTML)
        })
        .catch(()=>{
          console.error("error",error)
        })
        .finally(()=>{
          toggleLoader()
        })
    })
}
getFastestLoadedPhoto([560, 12, 550])




// const urlIds = [5, 6, 2]
// const dataContainer = document.querySelector("#data-container")

// const toggleLoader = () => {
//   const loaderHTML = document.querySelector("#loader")
//   let isHidden = loaderHTML.hasAttribute("hidden")

//   if (isHidden) {
//     loaderHTML.removeAttribute('hidden')
//   } else {
//     loaderHTML.setAttribute('hidden', '')
//   }
// }




// const createUrlElement = (text) => {

//   const urlElement = document.createElement("li")
//   const urlElementAnchor = document.createElement("a")
//   urlElementAnchor.href = "#"
//   urlElementAnchor.textContent = text
//   urlElement.append(urlElementAnchor)

//   return urlElement

// }

// const getUsersByIds = (ids) => {

//   toggleLoader()
//   const requests = ids.map((id) => fetch(`${url}/${id}`))
//   Promise.all(requests)
//     .then((response) => {
//       console.log("requests:", requests)
//       console.log("response:", response)
//       response.forEach((res) => {
//         //console.log("res", res)
//         if (!res.ok) {
//           console.log("ERRROR")
//           throw new Error("Ошибка запроса!")
//         }




//       })
//       const dataResults = response.map((respons) => respons.json())
//       return Promise.all(dataResults)




//     })
//     .then((users) => {
//       console.log("users: ", users)
//       users.forEach((user) => {
//         const userHTML = createUrlElement(user.title)
//         dataContainer.append(userHTML)
//       })
//     })
//     .catch((error) => {
//       console.error("error", error)
//     })
//     .finally(() => {
//       toggleLoader()
//     })
// }
// getUsersByIds([45, 58, 188, 245, 456, 4000])







