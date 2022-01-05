class Developer {
    #age
    constructor(fullName, age, position) {
        this.fullName = fullName,
            this.age = age,
            this.position = position
        this.technology = []
    }
    code() {

    }

    learnNewTechnology(technology) {
        this.technology.push(technology)
    }

}
const dev1 = new Developer("Maks", 20, "Middle")
// console.log("dev1", dev1)
// console.log("SetterDev1:", dev1.ageMult = 10)
// console.log("GetterDev1:", dev1.ageShow)


console.log("dev1: ", dev1)


class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age)
        this.position = "Junior"
    }
    code() {
        console.log("Junior разработчик пишет код...")
    }
}
const jundev1 = new JuniorDeveloper("Evgen", 33)

console.log("jundev1", jundev1)
console.log("jundev1", jundev1.code)
jundev1.learnNewTechnology("HTML")
jundev1.learnNewTechnology("CSS")
jundev1.learnNewTechnology("JS")


class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age)
        this.position = "Middle"
    }
    code() {
        console.log("Middle разработчик пишет код...")
    }
}
const midDev1 = new MiddleDeveloper("Evgen", 35)

console.log("midDev1", midDev1)
console.log("midDev1", midDev1.code)
midDev1.learnNewTechnology("HTML")
midDev1.learnNewTechnology("CSS")
midDev1.learnNewTechnology("JS")
midDev1.learnNewTechnology("React")


class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age)
        this.position = "Senoir"
    }
    code() {
        console.log("Senior разработчик пишет код...")
    }
}
const sinDev1 = new SeniorDeveloper("Evgen", 38)

console.log("sinDev1", sinDev1)
console.log("sinDev1", sinDev1.code)
sinDev1.learnNewTechnology("HTML")
sinDev1.learnNewTechnology("CSS")
sinDev1.learnNewTechnology("JS")
sinDev1.learnNewTechnology("React")
sinDev1.learnNewTechnology("NodeJS")

