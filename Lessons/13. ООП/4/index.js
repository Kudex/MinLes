class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    wordIsInDictionary(word) {
        return !!word && this.words[word] !== undefined;
    }

    add(word, description) {
        if (this.wordIsInDictionary(word)) return console.error('Слово уже есть в словаре!')

        this.words[word] = description;
        // console.log("this.words", this.words)
        // console.log("word", word)

        // console.log("this.words[word]", this.words[word])
        // console.log("description", description)
    }

    remove(word) {
        if (!this.wordIsInDictionary(word)) return console.error('Слово отсутствует в словаре!')
        console.log("this.words[word]BeforeDel", this.words[word])
        delete this.words[word];

    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        const arrayResult = [];
        let stringResult = '';

        for (let word in this.words) {
            arrayResult.push(`${word} - ${this.words[word]}`)
            const stringEnd = Object.keys(this.words).indexOf(word) === Object.keys(this.words).length - 1 ? '.' : ', ';
            stringResult += `"${word} - ${this.words[word]}"` + stringEnd;
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
