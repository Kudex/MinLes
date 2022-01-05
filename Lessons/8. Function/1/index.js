getName1('Evgen')
function getName1(name) {
    console.log(`Имя равно ${name}`)
}


const getName2 = function (name) {
    console.log(`Имя равно ${name}`)
}
getName2('Dmitriy')



const getName3 = name => {
    console.log(`Имя равно ${name}`)
}
getName3('Oleg')