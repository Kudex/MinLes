let student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        student.level += 1
        if (student.level === 2) {
            student.stack.push("CSS")
        } else if (student.level === 3) {
            student.stack.push("JavaScript")
        } else if (student.level === 4) {
            student.stack.push("React")
        } else if (student.level === 5) {
            student.stack.push("NodeJS")
        } else if (student.level > 5) {
            alert("Студент выучил все технологии!")
        }
        console.log("studentLevel", student)
        return this
    }
}

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

// let student = {
//     stack: ["HTML"],
//     level: 1,

// }

// student.level = 2
// console.log("student", student)