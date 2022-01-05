
////////////////////////////////////SelectorPart///////////////////

const $createEl = selector => document.createElement(selector);
const $selectEl = selector => document.querySelector(selector);

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

class CustomSelect {
    #id
    #option

    constructor(id, option) {
        this.#id = id,
            this.#option = option
    }

    render(container) {

        /////////////////////////////////WorkingPart////////////////
        const c = container

        let liComponent = []
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
                el.innerText = ""
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



            ////////////////////////////////////////////////createModule///////////////////////////

            function createModule(container2) {

                //const el = $selectEl(`.${container}`)
                const el = container2
                //console.log("el-moduleContainer", el)
                const mainDiv = createMainDiv()
                //console.log("mainDiv", mainDiv)

                const button = makeButton()
                //console.log("makeButton", makeButton)

                const buttonSpan = makeButtonSpan()
                const ul = makeUl()




                console.log(`liComponentBeforeUL-${index + 1}`, liComponent)

                function liCompConstr() {
                    liComponent.forEach((liComponentName, i) => {
                        console.log(`liComponentName-${index + 1}/${i + 1}`, liComponentName)
                        ul.appendChild(liComponentName)
                    })
                }
                liCompConstr()

                button.appendChild(buttonSpan)
                mainDiv.appendChild(button)
                mainDiv.appendChild(ul)
                el.appendChild(mainDiv)
                return el
            }
            console.log(`liComponentOUT:`, liComponent)

            createModule(c)

        })
        /////////////////////////////////////////////////////////////////////////////////
        // const newBtn = document.querySelectorAll(".select-dropdown__button ")
        // document.addEventListener('click', (event) => {
        //     const { target } = event
        //     console.log("target:", target)
        //     //console.log("target.className:", target.className)
        //     let targetClassName = target.className
        //     console.log("targetClassName:", targetClassName)
        //     const newBtnArr = []
        //     newBtn.forEach((name) => {
        //         //console.log("name:", name.className)
        //         newBtnArr.push(name.className)
        //     })
        //     //console.log("newBtnArr:", newBtnArr)
        //     if (newBtnArr.includes(targetClassName)) {
        //         //alert("eeee")
        //         // if()
        //         let myClassFirst = target.classList[0];
        //         let myClassSecond = target.classList[1];

        //         if (myClassFirst == "select-dropdown__button") {

        //             let myClassActive = myClassFirst + ".active " + myClassSecond
        //             target.classList = myClassActive

        //         } else if (myClassFirst == "select-dropdown__button.active") {
        //             myClassFirst = "select-dropdown__button "
        //             let myClassDesActive = myClassFirst + myClassSecond
        //             target.classList = myClassDesActive
        //             //alert(myClassDesActive)
        //         }

        //     }

        // })
        /////////////////////////////////////////////////////////////////////
        const allNewBtn = document.querySelectorAll(".select-dropdown__button ")
        allNewBtn.forEach((button) => {
            button.addEventListener('click', (event) => {
                const { target } = event
                //alert(target)
                //console.log("btnTarget:", target)
                const ulClosest = target.closest(".select-dropdown")
                //console.log("ulClosest", ulClosest)
                const nextUl = target.nextSibling
                //console.log("nextUl", nextUl)
                let ulFirstEl = nextUl.classList[0]
                //console.log("ulFirstEl", ulFirstEl)
                let ulSecondEl = nextUl.classList[1]

                if (ulFirstEl == "select-dropdown__list") {
                    // console.log("none")
                    nextUl.classList = ulFirstEl + ".active " + ulSecondEl

                } else if (ulFirstEl == "select-dropdown__list.active") {
                    ulFirstEl = "select-dropdown__list"
                    let myClassDesActive = ulFirstEl + " " + ulSecondEl
                    nextUl.classList = myClassDesActive
                    // console.log(" myClassDesActive:", myClassDesActive)
                    console.log(" nextUlAfter:", nextUl)

                }

                // nextUl.forEach((name) => {
                //     const nextUlFor = name
                //     console.log("nextUlFor:", nextUlFor)
                // })
                //console.log("ulFirstEl", ulFirstEl)



            })
        })
        ///////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////

        // const ulNav = document.querySelectorAll(".select-dropdown__list")
        // console.log("ulNav", ulNav)

        const containerSelect = document.querySelector(".container")
        console.log("containerSelect: ", containerSelect)

        containerSelect.addEventListener('click', (event) => {
            const { target } = event
            console.log("containerSelectTarget: ", target)
            console.log("target.classList: ", target.classList)
            console.log("target.className: ", target.className)
            //const navButtom = target.closest(".select-dropdown__list-item" || ".select-dropdown__list-item.selected")
            if (target.className == "select-dropdown__list-item" || "select-dropdown__list-item.selected") {
                // alert("123")
                console.log("target.className1: ", target.className)
                const navButtom = target.closest(".select-dropdown__list-item")
                const navButtom2 = target

                console.log("target.className2: ", target.className)
                console.log("containerSelectTarget2: ", target)
                const getNewDatasetFromUl = target.dataset
                console.log("getNewDatasetFromUl:", getNewDatasetFromUl)
                const UlID = Object.values(getNewDatasetFromUl).toString()
                console.log("UlID", UlID)



                const UlSelector = document.querySelectorAll(`.select-dropdown__list--${UlID}`)
                console.log(" AAA_UlSelector", UlSelector)
                const UlSelectorChild = UlSelector.childNodes
                console.log(" UlSelectorChild", UlSelectorChild)



                const UlClosest = target.closest(`.select-dropdown__list select-dropdown__list--${UlID}`)
                console.log("UlClosest", UlClosest)
                console.log("navButtom", navButtom)
                console.log("navButtom2", navButtom2)

                const MMM = document.querySelectorAll(".select-dropdown__list")
                //console.log("MMM ", MMM)
                if (navButtom2.className == "select-dropdown__list-item.selected") {

                    const noneactive = "select-dropdown__list-item"
                    //     console.log("noneactive", noneactive
                    navButtom2.classList = noneactive
                    //     //console.log("navButtom", navButtom)
                }


                if (navButtom) {
                    const liDataset = Object.values(navButtom.dataset)
                    // console.log("liDataset", liDataset)

                    const newLi = navButtom
                    console.log("newLi", newLi)

                    if (newLi.className == "select-dropdown__list-item") {

                        const parentNode = navButtom.parentNode
                        console.log("parentNode", parentNode)
                        const childNode = parentNode.childNodes
                        console.log("childNode", childNode)
                        childNode.forEach((name) => {
                            console.log("childNodeNames1:", name)
                            name.classList = "select-dropdown__list-item"
                            console.log("childNodeNames2:", name)
                            const FCH = parentNode.firstChild
                            console.log(" FCH:", FCH)
                            const LCH = parentNode.lastChild
                            console.log(" LCH:", LCH)
                            const ChLen = parentNode.childNodes.length
                            console.log("ChLen:", ChLen)
                            const next = target.nextElementSibling
                            console.log("next:", next)




                        })

                        navButtom.classList = "select-dropdown__list-item.selected"
                        console.log("navButtom", navButtom)
                        console.log("navButtom2", navButtom2)
                        console.log("target", target)



                        // function allLi() {
                        //     const allLi = document.querySelectorAll(".select-dropdown__list-item")
                        //     console.log("allLi", allLi)
                        // }

                        // setTimeout(allLi, 500);



                        // liComponent.forEach((name) => {
                        //     const liCompFor = name
                        //     console.log("liCompFor", liCompFor)
                        //})

                        // nextUl.forEach((name) => {
                        //     const nextUlFor = name
                        //     console.log("nextUlFor:", nextUlFor)
                        // })


                    } else if (navButtom2.className == "select-dropdown__list-item.selected") {
                        alert("faild")
                    }
                    // else { //if (target.classList === "select-dropdown__list-item.selected") {
                    //     target.className
                    //     console.log("target.classNameElse: ", target.className)
                    //     console.log("target", target)
                    //     const noneactive = "select-dropdown__list-item"
                    //     console.log("noneactive", noneactive
                    //     target.className = "select-dropdown__list-item"
                    //     //console.log("navButtom", navButtom)
                    //     alert("faild")
                    // }
                }
            }

        })


    }

}
////////////////////////////////////InputData//////////////////

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' },
];

///////////////////////////////////////////////////////////////

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);

const FFF = document.querySelectorAll(".select-dropdown__list")
console.log("FFF ", FFF)
