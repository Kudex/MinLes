class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    wordIsInDictionary(word) {
        return !!word && this.words[word] !== undefined;
    }

    add(word, description, isDifficult) {
        if (this.wordIsInDictionary(word)) return console.error('Слово уже есть в словаре!')

        // this.words[word] = {
        //     word: 'word',
        //     description: 'description',

        // }

        this.words[word] = {
            word: word,
            description: description,

        };

        // console.log("this.words:", this.words)
        // console.log("description:", description)
        // // console.log("word", word)

        // console.log("this.words[word]", this.words[word])
        // console.log("this.words[word].description", this.words[word].description)
        // console.log("description", description)
    }

    remove(word) {
        if (!this.wordIsInDictionary(word)) return console.error('Слово отсутствует в словаре!')
        // console.log("this.words[word]BeforeDel", this.words[word])
        // console.log("word", word)
        delete this.words[word];

    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        const arrayResult = [];
        let stringResult = '';

        for (let word in this.words) {
            arrayResult.push(`${word} - ${this.words[word].description}`)
            const stringEnd = Object.keys(this.words).indexOf(word) === Object.keys(this.words).length - 1 ? '.' : ', ';
            stringResult += `"${word} - ${this.words[word].description}"` + stringEnd;
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
// dictionary.showAllWords();


class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }
    wordIsInDictionary(word) {
        return !!word && this.words[word] !== undefined;
    }

    add(word, description, isDifficult = true) {
        if (this.wordIsInDictionary(word)) return console.error('Слово уже есть в словаре!')

        this.words[word] = {
            word: word,
            description: description,
            isDifficult: true
        };

        // this.words[word] = description;
        // console.log("this.words", this.words)
        // console.log("word", word)

        // console.log("this.words[word]", this.words[word])
        // console.log("description", description)
    }

    remove(word) {
        if (!this.wordIsInDictionary(word)) return console.error('Слово отсутствует в словаре!')
        // console.log("this.words[word]BeforeDel", this.words[word])
        delete this.words[word];

    }

    get(word) {
        return this.words[word];
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



