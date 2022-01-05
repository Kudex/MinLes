////////////////////////////////////InputData//////////////////
const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
];

///////////////////////////////////////////////////////////////
////////////////////////////////////SelectorPart///////////////////

const $createEl = selector => document.createElement(selector);
const $selectEl = selector => document.querySelector(selector);

///////////////////////////////////////////////////////////////

let liComponent = []
/////////////////////////////////WorkingPart////////////////

options.forEach((name, index) => {
    //console.log(`name-${index}:`, name)

    //})
    const objectValObject = Object.values(options)
    //console.log("objectVal:", objectVal[0])
    const objectValue = Object.values(objectValObject[`${index}`])
    //objectValue.forEach((name,index))

    console.log(`objectValue-${index + 1}:`, objectValue)

    const id = `${objectValue[0]}`
    //console.log("id:", id)

    const inText = `${objectValue[1]}`
    //console.log("inText:", inText)
    //////////////////////////////////////////////////////////////

    /////////////////////////////////////Render////////////////////

    //options.forEach((name,index) => { console.log(`name-${index}:`, name) })
    function createMainDiv() {
        const el = $createEl('div')
        el.className = `select-dropdown select-dropdown--${id}`
        return el;
    }

    function makeButton() {
        const el = $createEl('button')
        el.className = `select-dropdown__button select-dropdown__button--${id}`
        return el;
    }

    function makeButtonSpan() {
        const el = $createEl('span')
        el.className = `select-dropdown select-dropdown--${id}`
        el.innerText = "Выберите Элемент"
        return el;
    }
    function makeUl() {
        const el = $createEl('ul')
        el.className = `select-dropdown__list select-dropdown__list--${id}`
        return el;
    }
    ///////////////////////////////////////////////////////////////////

    // for (i = 0; i < options.length; i++) {
    //     console.log(objectValue[0])
    // }
    ////////////////////////////////////////////////////
    liComponent = []
    options.forEach((name, index) => {

        const objectValObject = Object.values(options)
        const objectValue = Object.values(objectValObject[`${index}`])
        //console.log(`objectValue-${index + 1}`, objectValue[0])
        const id2 = `${objectValue[0]}`
        const inText = `${objectValue[1]}`
        //
        const li = makeLi_1()
        //console.log(`li-${index + 1}:`, li)
        function makeLi_1() {
            // liComponent=[]
            const el = $createEl('li')
            el.className = "select-dropdown__list-item"
            el.dataset.value = `${index + 1}`
            el.innerText = `${inText}`
            return el;
        }
        liComponent.push(makeLi_1())
        //console.log(`makeLi_${index + 1}`, makeLi_1())
        //console.log(`liComponentIN:`, liComponent)


    })


    //////////////////////////////////////////////////////////
    // const li = makeLi_1()
    // console.log(`li-${index+1}:`, li)
    // function makeLi_1() {
    //     // liComponent=[]
    //     const el = $createEl('li')
    //     el.className = "select-dropdown__list-item"
    //     el.dataset.value = `${index + 1}`
    //     el.innerText = `${inText}`
    //     return el;
    // }
    // liComponent.push(makeLi_1())
    // console.log(`makeLi_${index + 1}`, makeLi_1())
    // console.log(`liComponentIN:`, liComponent)
    ////////////////////////////////////////////////////////////////////
    // const li = options.forEach((name, index) => {

    //     const objectValObject = Object.values(options)
    //     const objectValue = Object.values(objectValObject[`${index}`])
    //     const id2 = `${objectValue[0]}`
    //     const inText2 = `${objectValue[1]}`

    //     // function makeLi_1() {
    //     //     const el = $createEl('li')
    //     //     el.className = "select-dropdown__list-item"
    //     //     el.dataset.value = `${index + 1}`
    //     //     el.innerText = `${inText2}`
    //     //     return el;
    //     // }
    //     // liComponent.push(makeLi_1())
    //     // console.log(`makeLi_${index + 1}`, makeLi_1())
    //     //console.log(`liComponentIN${index + 1}`, liComponent)


    // })

    //console.log("li",li)




    ////////////////////////////////////////////////createModule///////////////////////////

    function createModule() {
        const el = $selectEl(`.${container}`)
        // const el = $selectEl(".container")
        //console.log("el-moduleContainer", el)
        const mainDiv = createMainDiv()
        //console.log("mainDiv", mainDiv)

        const button = makeButton()
        //console.log("makeButton", makeButton)

        const buttonSpan = makeButtonSpan()
        const ul = makeUl()

        // liComponent.forEach((name, index) => {
        //     ul.appendChild(name)
        //     console.log(`liComponentName-${index + 1}`, name)
        //     console.log(`liComponentIN-${index + 1}:`, liComponent)
        // })


        console.log(`liComponentBeforeUL-${index + 1}`, liComponent)

        function liCompConstr() {
            liComponent.forEach((liComponentName, i) => {
                console.log(`liComponentName-${index + 1}/${i + 1}`, liComponentName)
                ul.appendChild(liComponentName)
            })
        }
        liCompConstr()

        //ul.appendChild(liComponent)


        // for (i = 0; i < options.length; i++) {
        //     ul.appendChild(liComponent)

        //     //ul.appendChild(liComponent[0])
        // }

        //const li_1 = makeLi_1()
        // const li_2 = makeLi_2()
        // const li_3 = makeLi_3()
        // const li_4 = makeLi_4()
        // const li_5 = makeLi_5()

        //ul.appendChild(li)
        // ul.appendChild(li_1)
        // ul.appendChild(li_2)
        // ul.appendChild(li_3)
        // ul.appendChild(li_4)
        // ul.appendChild(li_5)

        button.appendChild(buttonSpan)
        mainDiv.appendChild(button)
        mainDiv.appendChild(ul)
        el.appendChild(mainDiv)
        return el
    }
    console.log(`liComponentOUT:`, liComponent)

    createModule()


})


///////////////////////////////////////////////////////////////////////

const btnTouch = $selectEl('.select-dropdown__button')
btnTouch.addEventListener('click', (event) => {
    //const {target} = event.target
    // if (target.classList.contains(".select-dropdown__button")) {
    //     alert("eeee")
    // }
    btnTouch.className = "select-dropdown__button.active select-dropdown__button--123 "
})




class CustomSelect {
    #id
    #option

    constructor(id, option) {
        this.#id = id,
            this.#option = option
    }

    render(container) {

    }

}



const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
// console.log("objectVal", objectVal[1])
// console.log("objectKeys", objectKeys)



