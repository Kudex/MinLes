const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    dog.isDomestic = isDomestic
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    console.log(dog)
}
// makeDomestic(true)


const bindedMakeDomestic = makeDomestic.bind(dog)
bindedMakeDomestic(true)

makeDomestic.call(bird, false)

makeDomestic.apply(bird, [true])