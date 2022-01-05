
const date = new Date()
console.log("date:", date)
let hours = date.getHours()
console.log("hours:", hours)

class CarService {

    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }

    constructor(name, workingHours) {
        this.name = name
        this.workingHours = workingHours || CarService.DefaultWorkingHours
    }

    // constructor(name, workingHours) {
    //     if (!name) throw new Error('Вы должны выбрать название для автосалона!');

    //     this.salonName = name;
    //     this.workingHours = workingHours || CarService.DefaultWorkingHours;
    //   }




    setTime(time) {
        const hours = time.split(':')[0];
        const minutes = time.split(':')[1];

        return `${hours}:${minutes}`;
    }


    repairCar(carName) {
        if (!carName) throw new Error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        if (!this.isWorkingNow()) throw new Error(`Автосервис "${this.salonName}": К сожалению, мы сейчас закрыты. Приходите позже или завтра`);

        console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
    }
    isWorkingNow() {
        const currentTime = new Date().getHours();
        const {
            from,
            till
        } = this.workingHours;
        const workingFrom = from.split(':')[0];
        const workingTo = till.split(':')[0];

        return currentTime >= workingFrom && currentTime < workingTo;
    }


}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');

const AudiService = new CarService('Audi FIX');
AudiService.repairCar('Audi');


// let from = CarServise.DefaultWorkingHours.from
// // console.log("from", from)

// let till = CarServise.DefaultWorkingHours.till
// // console.log("till", till)
// let splFrom = from.split(':')
// let splFromNum = Number(splFrom[0])
// // console.log("splFrom:", splFrom)
// // console.log("splFromNum", splFromNum)


// let splTill = till.split(':')
// let splTillNum = Number(splTill[0])
// // console.log("splTill:", splTill)
// // console.log("splTillNum", splTillNum)



// // console.log("hours:", hours)

// if (hours > splFromNum && hours < splTillNum) {
//     console.log("Рабочее время")
// } else {
//     console.log("Не рабочее время")
// }