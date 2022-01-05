function showSuccessMessage(message) {
    console.log(message)
}


function showErrorMessage(message) {
    console.error(message)
}



function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {


    let absentNumber = 0
    for (let i = 0; i < text.length; i++)

        if (text[i] === errorSymbol) {

            errorCallback = showErrorMessage(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)

        } else if (text[i] != errorSymbol) {
            absentNumber += 1

        }
    if (absentNumber === text.length) {
        successCallback = showSuccessMessage("В данном тексте нет запрещенных символов")
    }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)










