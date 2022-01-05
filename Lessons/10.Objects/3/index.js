

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}


function handleObject(obj, key, action) {
    if (action === "get") {

        return obj[key]
    } else if (action === "delete") {
        delete obj[key]
        return obj
    } else if (action === "add") {
        obj[key] = ""
        return obj
    } else if (action) {
        return obj
    }
}
console.log(handleObject(student, 'programmingLanguage', 'asdasdsd'))
// console.log(handleObject(student, 'programmingLanguage', 'delete'))
// console.log(handleObject(student, 'skills', 'add'))