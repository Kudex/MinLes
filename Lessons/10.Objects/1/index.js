const users = [

    {

        username: 'David',

        status: 'online',

        lastActivity: 10

    }, {

        username: 'Lucy',

        status: 'offline',

        lastActivity: 22

    }, {

        username: 'Bob',

        status: 'online',

        lastActivity: 104

    }

]

console.log(users)


let onlineUsers = []
let onlineUsersName = []
for (i = 0; i < users.length; i++) {
    if (users[i]?.status === "online") {
        onlineUsers.push(users[i])
    }

}
console.log("onlineUsers", onlineUsers)


for (i = 0; i < onlineUsers.length; i++) {
    console.log(onlineUsers[i].username)
    onlineUsersName.push(onlineUsers[i].username)


}





// onlineUsersName = ["David", "Bob"]
let userNames = '';

onlineUsersName.forEach((name, i) => {
    const endString = i < onlineUsersName.length - 1 ? ', ' : '.';
    userNames = userNames + name + endString
})
console.log(userNames);

console.log("onlineUsersName: ", userNames)
alert(`Сейчас в онлайн следующие пользователи: ${userNames}`)






// console.log(Object.keys(users[0]))
// console.log(Object.values(users[0]))
// console.log(Object.entries(users[0]))


// console.log(Object.values(users[1]))

// if (users[1]?.status) {
//     console.log("Обьект найден")
//     console.log(users[1].status)
// } else {

//     console.log("Обьект НЕ найден")
// }


// const ob = {
//     username: 'David',

//     status: 'online',

//     lastActivity: 10

// }

// let values = Object.values(ob)
// console.log("values", values)
// console.log("values", users[1].status)
