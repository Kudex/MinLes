
let student = []

function giveJobToStudent(student, jobName) {

    student = {

        fullName: 'Максим',

        experienceInMonths: 12,

        stack: ['HTML', 'CSS', 'JavaScript', 'React'],

    }
    student.jobName = jobName
    return alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)


}
console.log(giveJobToStudent(student, "веб-разработчик"))


// let obj = {}

// var getProperty = function (propertyName) {
//     return obj[propertyName];
// };

// getProperty("key1");
// getProperty("key2");
// getProperty("key3");
// console.log(obj)


// var obj1 = {
//     key1: "value1",
//     key2: "value2"
// };


// //console.log(obj1)

