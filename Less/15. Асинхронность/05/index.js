const url1 = "https://jsonplaceholder.typicode.com/posts/"
const url2 = "https://jsonplaceholder.typicode.com/comments?postId="

const dataContainer = document.querySelector("#data-container")


const createPostEl = (post__title, post__text, ...comments) => {
  //console.log("comments:", comments)
  //console.log("commentsEmail:", comments.email)
  //console.log("comments.body:", comments.body)
  const divEl = document.createElement("div")
  divEl.className = "post"

  const hEl = document.createElement("h1")
  hEl.className = "post_title"
  hEl.textContent = post__title
  divEl.append(hEl)

  const pEl = document.createElement("p")
  pEl.className = "post__text"
  pEl.textContent = post__text
  divEl.append(pEl)

  const bEl = document.createElement("b")
  bEl.className = "post__comments-text"
  bEl.textContent = "Комментарии:"
  divEl.append(bEl)

  ////////////////////////////////////////////////////////

  const divPostComments = document.createElement("div")
  divPostComments.className = "post__comments"

  const divPostComment = document.createElement("div")
  divPostComment.className = "post-comment"
  /////////////////////////////////////////////////////////////////
  //console.log("comments.length", comments.length)
  comments.forEach((emailName, index, arr) => {
    const emailIndex = emailName[index]
    // console.log("emailIndex:", emailIndex)
    //console.log("arr:", arr)
    // console.log("arr[index]:", arr[index])
    // for (i = 0; i <= arr[index].length; i++) {
    //   console.log("arrFor:", arr[index][i])

    // }
    //const arrForEach =
    arr[index].forEach((data, index) => {
      // console.log(`data-${index + 1}`, data)
      // console.log(`data.email:`, data.email)
      // console.log(`data.body:`, data.body)
      const email = data.email
      const body = data.body

      createCommentEl(email, body)

    })

    //console.log("arrForEach:", arrForEach)
    //console.log("arr.len:", arr.length)
    // console.log("arr[index].len:", arr[index].length)
    //console.log("commentsS:", comments.length)
    // console.log("emailName[index].email:", emailName[index].email)
  })


  /////////////////////////////////////////////////////////////////
  function createCommentEl(email, body) {

    //const divPostComment = document.querySelector(".post-comment")
    // console.log("divPostComment :", divPostComment)
    const spanAuth = document.createElement("span")
    spanAuth.className = "post-comment__author"
    spanAuth.textContent = email
    // console.log("spanAuth", spanAuth)
    //spanAuth.appendChild(br)
    const br = document.createElement("br")
    spanAuth.append(br)
    divPostComment.append(spanAuth)

    const spanText = document.createElement("span")
    spanText.className = "post-comment__text"
    spanText.textContent = body
    //console.log("spanText", spanText)
    //const sT = document.querySelector(".post-comment__text")
    // sT.appendChild(br)
    const br2 = document.createElement("br")
    spanText.append(br2)
    const br3 = document.createElement("br")
    spanText.append(br3)

    divPostComment.append(spanAuth)

    divPostComment.append(spanText)


    // код создания разметки коммента
  }
  ////////////////////////////////////////////////

  // const spanAuth = document.createElement("span")
  // spanAuth.className = "post-comment__author"
  // spanAuth.textContent = email
  // divPostComment.append(spanAuth)

  // const spanText = document.createElement("span")
  // spanText.className = "post-comment__text"
  // spanText.textContent = body
  // divPostComment.append(spanText)



  ////////////////////////////////////////////////////////

  divPostComments.append(divPostComment)
  divEl.append(divPostComments)







  return divEl

}
//const x = createPostEl("1", "2", "maxim@gmail.com", "sdfsdfsdfsdfdsfsdfdsfdsf")
//dataContainer.append(x)


const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader")
  let isHidden = loaderHTML.hasAttribute("hidden")

  if (isHidden) {
    loaderHTML.removeAttribute('hidden')
  } else {
    loaderHTML.setAttribute('hidden', '')
  }
}


let valueArrTitle = []
let valueArrBody = []

const renderPost = (postId) => {
  const requests = [fetch(`${url1}${postId}`), fetch(`${url2}${postId}`)]
  return Promise.all(requests)
    .then((responses) => {
      //console.log("responses", responses)
      // responses.forEach((response)=>{
      //   console.log("response", response)
      // })

      return Promise.all(responses.map((response) => response.json()))

    })
    .then((values) => {
      //console.log("values", values)
      const [postData, commentsData] = values;
      //console.log(postData, commentsData);
      //console.log("postData", postData)
      // console.log("commentsData", commentsData)
      // commentsData.forEach((name, i) => {
      //   const email = name.email
      //   const body = name.body
      //   console.log(`${i + 1} email:`, email)
      //   console.log(`${i + 1} body:`, body)

      // })
      // const createCommentEl = (email, body) => {

      //   //const divPostComment = document.querySelector(".post-comment")
      //   // console.log("divPostComment :", divPostComment)
      //   const spanAuth = document.createElement("span")
      //   spanAuth.className = "post-comment__author"
      //   spanAuth.textContent = email
      //   console.log("spanAuth", spanAuth)
      //   //divPostComment.append(spanAuth)

      //   const spanText = document.createElement("span")
      //   spanText.className = "post-comment__text"
      //   spanText.textContent = body
      //   console.log("spanText", spanText)
      //   //divPostComment.append(spanText)


      //   // код создания разметки коммента
      // }

      const comments = commentsData.map(({ email, body }) => {
        // const a = email.email
        //console.log("a:", a)
        //console.log("email:", email)
        // console.log("body:", body)
        //createCommentEl(email, body)
        return { email, body }

      })
      // console.log(" comments.email:", comments.email)
      //console.log(" comments.body:", comments.body)

      //  console.log("comments:", comments)

      //const comments = commentsData.map(({ name, email, body }) => createCommentEl(name, email, body));

      const html = createPostEl(postData.title, postData.body, comments)
      dataContainer.append(html)
    })





}

function renderPosts(postIds) {
  toggleLoader()
  Promise.all(postIds.map(id => renderPost(id)))
    .then(() => {
      toggleLoader()
    })
}

renderPosts([1]);



// function renderEverything() {
//   toggleLoader()
//   Promise.all([
//     renderPost(1),// renderPost(2), renderPost(49)
//   ])
//     .then(() => {
//       toggleLoader()
//     })
// }

// renderEverything();

  // .then((values_Ids) => {
  //   console.log("values_Id:", values_Ids)
  //   const id_requests = values_Ids.map((id) => fetch(`${url2}${id}`))
  //   console.log("id_requests:", id_requests)
  //   return Promise.all(id_requests)
  // })
  // .then((id_responses) => {
  //   console.log("id_responses:", id_responses)
  //   const id_info = id_responses.map((response) => response.json())
  //   console.log("id_info:", id_info)
  //   return Promise.all(id_info)
  // })
  // .then((comments) => {
  //   console.log("comments:", comments)
  //   //const commentArr = []
  //   comments.forEach((commentsInfo) => {
  //     console.log(" commentsInfo:", commentsInfo)
  //     commentsInfo.forEach((info) => {
  //       console.log("infoEmail:", info.email)
  //       console.log("info.body:", info.body)
  //       //Promise.all(requests)
  //       //console.log("requests2:", requests)

  //       //console.log("commentInfoEmail:", commentInfo.id)
  //       // const commentsInfo = commentsInfo
  //       //console.log("postInfo:", postInfo)
  //       //commentArr.push(commentsInfo)

  //       const html = createPostEl(valueArrTitle, valueArrBody, info.email, info.body)
  //       dataContainer.append(html)
  //     })

  //   })


  // console.log("valueArrTitle:", valueArrTitle)
  //   console.log("valueArrBody:", valueArrBody)
  //console.log("commentArr:", commentArr)
  //return Promise.all(commentArr)
  // })








// const getFastestLoadedPhoto = (ids) => {
//   toggleLoader()
//   const requests = ids.map((id) => fetch(`${url}/${id}`))
//   Promise.all(requests)
//     .then((responses) => {
//       console.log("responses", responses)
//       const dataResults = responses.map((response) => response.json())
//       return Promise.all(dataResults)
//     })
//     .then((photo) => {
//       //let arr = []
//       // console.log("photo", photo)
//       // photo.forEach((name) => {
//       //   arr.push(name)
//       // })
//       console.log("photo", photo)
//       //console.log("arr", arr)
//       Promise.race(photo)
//         .then((value) => {
//           console.log("value", value)
//          const photoHTML = createPhotoElement(value.url,value.title)
//           dataContainer.append(photoHTML)
//         })
//         .catch(()=>{
//           console.error("error",error)
//         })
//         .finally(()=>{
//           toggleLoader()
//         })
//     })
// }
// getFastestLoadedPhoto([560, 12, 550])




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
    // .catch((error) => {
    //   console.error("error", error)
    // })
//     .finally(() => {
//       toggleLoader()
//     })
// }
// getUsersByIds([45, 58, 188, 245, 456, 4000])







