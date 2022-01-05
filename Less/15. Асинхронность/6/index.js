const url1 = "https://jsonplaceholder.typicode.com/posts/"
const url2 = "https://jsonplaceholder.typicode.com/comments?postId="

const dataContainer = document.querySelector("#data-container")

function createCommentEl(email, body) {
  console.log(email, body)
  //////////
  const commentDiv = document.createElement('div')
  commentDiv.className = 'post-comment';
  /////////////

  const spanAuth = document.createElement("span")
  spanAuth.className = "post-comment__author"
  spanAuth.textContent = email
  // console.log("spanAuth", spanAuth)
  //spanAuth.appendChild(br)
  const br = document.createElement("br")
  spanAuth.append(br)

  // divPostComment.append(spanAuth)

  const spanText = document.createElement("span")
  spanText.className = "post-comment__text"
  spanText.textContent = body
  //console.log("spanText", spanText)

  const br2 = document.createElement("br")
  spanText.append(br2)
  const br3 = document.createElement("br")
  spanText.append(br3)

  ///////////
  commentDiv.append(spanAuth)
  commentDiv.append(spanText)

  return commentDiv;
  ////////////
}


const createPostEl = (post__title, post__text, comments) => {
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


  const divPostComments = document.createElement("div")
  divPostComments.className = "post__comments"

  //////////////
  // comments.forEach(comment => {
  //   comment.forEach((com)=>{
  //     console.log("com.email", com.email)
  //     const commentEl = createCommentEl(com.email, com.body);
  //     divPostComments.append(commentEl)
  //   })
  //   console.log("comment", comment)
  //   console.log(comment.length)
  //   console.log("comment2.email", comment.email)


  // })
  ////////////

  const allComments = comments.forEach(comment => {
    const commentEl = createCommentEl(comment.email, comment.body);
    divPostComments.append(commentEl)
  })
  ////////////


  divEl.append(divPostComments)


  return divEl

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


let valueArrTitle = []
let valueArrBody = []

const renderPost = (postId) => {
  const requests = [fetch(`${url1}${postId}`), fetch(`${url2}${postId}`)]
  return Promise.all(requests)
    .then((responses) => {
      //console.log("responses", responses)


      return Promise.all(responses.map((response) => response.json()))

    })
    .then((values) => {
      //console.log("values", values)
      const [postData, commentsData] = values;
      //console.log(postData, commentsData);
      //console.log("postData", postData)
      // console.log("commentsData", commentsData)
      // commentsData.forEach((name, i) => {


      /*       const comments = commentsData.map(({ email, body }) => {
              // const a = email.email
              //console.log("a:", a)
              //console.log("email:", email)
              // console.log("body:", body)
              //createCommentEl(email, body)
              return { email, body }
            
            }) */
      // console.log(" comments.email:", comments.email)
      //console.log(" comments.body:", comments.body)

      //  console.log("comments:", comments)

      ///////////////////////////
      const html = createPostEl(postData.title, postData.body, commentsData)
      ////////////////
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

renderPosts([1, 2, 3, 4]);
