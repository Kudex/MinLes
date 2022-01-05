function checkQuestionAnswer(question, correctAnswer) {

    

    let a = `${correctAnswer}`
        .trim()
        .toLocaleLowerCase()
    console.log(a)



    let answer = prompt(`${question}`)
        .trim()
        .toLocaleLowerCase()
    console.log(answer)
    
    if (question == "Арбуз это фрукт или ягода?" && answer === a) {
        alert("Ответ верный")
    } else if (question == "Сколько в среднем зубов у взрослого человека?" && answer === a) {
        alert("Ответ верный")
    } else if (question == "Как называется самая маленькая птица в мире?" && answer === a) {
        alert("Ответ верный")

    } else {
        alert("Ответ неверный")
    }

}



checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
