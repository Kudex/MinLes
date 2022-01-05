class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name
        this.#words = {}
    }
    get mainName() {
        return this.#name
    }
    set setMainName(name) {
        this.#name = name
    }

    get allWords() {
        return this.#words
    }

    addNewWord(word, description) {
        this.#words[word] = {
            word: word,
            description: description,

        };
    }
    // wordIsInDictionary(word) {
    //     return !!word && this.words[word] !== undefined;
    // }

    add(word, description) {
        // if (this.wordIsInDictionary(word)) return console.error('Слово уже есть в словаре!')

        // this.words[word] = {
        //     word: 'word',
        //     description: 'description',

        // }
        this.addNewWord(word, description)
        // this.#words[word] = {
        //     word: word,
        //     description: description,

        // };

        console.log("this.words:", this.#words)
        // console.log("description:", description)
        // // console.log("word", word)

        // console.log("this.words[word]", this.words[word])
        // console.log("this.words[word].description", this.words[word].description)
        // console.log("description", description)
    }

    remove(word) {

        // console.log("this.words[word]BeforeDel", this.words[word])
        // console.log("word", word)
        delete this.#words[word];

    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        const arrayResult = [];
        let stringResult = '';

        for (let word in this.#words) {
            //console.log("this.#words[word].description", this.#words[word].description)
            arrayResult.push(`${word} - ${this.#words[word].description}`)
            const stringEnd = Object.keys(this.#words).indexOf(word) === Object.keys(this.#words).length - 1 ? '.' : ', ';
            stringResult += `"${word} - ${this.#words[word].description}"` + stringEnd;
        }

        console.log('arrayResult:', arrayResult);
        console.log('stringResult:', stringResult);
    }
}


const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'Язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.add('Кровосток', 'Музыкальный коллектив описывающий чью-то жизнть под музыку');
dictionary.add('Шишка', 'Что-то колючее и приятное, радующее тоскливыми вечерами и особенными днями');

// dictionary.remove('JavaScript');
dictionary.showAllWords();

dictionary.addNewWord("new", "word")


dictionary.showAllWords();

class HardWordsDictionary extends Dictionary {
    #words
    constructor(name) {
        super(name)
        this.isDifficult = this.isDifficult
    }
    // // addNewWord(word, description) {
    // //     this.#words[word] = {
    // //         word: word,
    // //         description: description,

    // //     };
    // }
    // addNewWord(word, description, isDifficult) {
    //     this.#words[word] = {
    //         word: word,
    //         description: description,
    //         isDifficult: isDifficult

    //     };
    // }
    // wordIsInDictionary(word) {
    //     return !!word && this.words[word] !== undefined;
    // }

    add(word, description, isDifficult) {
        // if (this.wordIsInDictionary(word)) return console.error('Слово уже есть в словаре!')
        // console.log("addNewWord", addNewWord)



        this.addNewWord(word, description, isDifficult)



        // this.addNewWord(word, description, isDifficult)

        // this.words[word] = description;
        // console.log("this.words", this.words)
        // console.log("word", word)

        // console.log("this.words[word]", this.words[word])
        // console.log("description", description)
    }

    // remove(word) {
    //     // if (!this.wordIsInDictionary(word)) return console.error('Слово отсутствует в словаре!')
    //     // console.log("this.words[word]BeforeDel", this.words[word])
    //     delete this.#words[word]

    // }

    get(word) {
        return this.words[word]
    }

    showAllWords() {
        const arrayResult = [];
        let stringResult = '';

        for (let word in this.words) {
            arrayResult.push(`${word} - ${this.words[word].description} - ${this.words[word].isDifficult}`)
            const stringEnd = Object.keys(this.words).indexOf(word) === Object.keys(this.words).length - 1 ? '.' : ', ';
            stringResult += `"${word} - ${this.words[word].description}"` + stringEnd;
        }

        console.log('arrayResult:', arrayResult);
        console.log('stringResult:', stringResult);
    }

}


const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

hardWordsDictionary.addNewWord("newOne", "worD")
hardWordsDictionary.showAllWords();


// accumulator.read();

// alert(accumulator.value);

// let obj = {};
// function A() { return obj }
// function B() { return obj }

// let a = new A();
// let b = new B();

// alert(a == b); // true

// class Calculator {
//     // constructor() {

//     // }

//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }

//     sum() {
//         return this.a + this.b;
//     };

//     mul() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());