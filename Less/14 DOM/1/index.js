const mainBtn = document.createElement("button")
mainBtn.className = "mainBtn"
const formTeg = document.createElement("form")
formTeg.className = "create-user-form"
formTeg.innerHTML = "<label>Имя <input type = 'text' name = 'userName' placeholder = 'Enter your name'/> </label> <label>Password <input type = 'password' name = 'password' placeholder = 'Create the pass'/></label><button type = 'submit'> Подтвердить</button>"
const a = formTeg.innerHTML = "<label>Имя <input type = 'text' name = 'userName' placeholder = 'Enter your name'/> </label> <label>Password <input type = 'password' name = 'password' placeholder = 'Create the pass'/></label><button type = 'submit'> Подтвердить</button>"
const body = document.querySelector(".body")
const button = document.querySelector(".mainBtn")
button.addEventListener('click', (event) => {
    // body.append(formTeg)
    if (body.classList.toggle(body.append(formTeg))) {
        formTeg.innerHTML = a
    } else {
        formTeg.innerHTML = ""
    }





    // body.classList.toggle(body.remove(formTeg))

})
// button.addEventListener('click', (event2) => {
//     // body.append(formTeg)
//     // body.classList.remove(body.prepend(formTeg))
//     body.classList.toggle(body.remove(formTeg))

// })

