// const calc = ['100', '+', '200']



// let znak = ""
// console.log('typeof', typeof (znak))
// let a = 0
// let b = 0
// let c = 1
// let result = 0
// console.log("a", typeof (a))
// console.log("b", typeof (b))
// console.log("c", typeof (c))
// for (i = 0; i < calc.length; i++) {
//     if (calc[i] != calc[1] && i === 0) {
//         let a = String(calc[i])
//         console.log("a", a)
//     } else if (calc[i] != calc[1] && i === 2) {
//         let b = Number(calc[i])
//         console.log("b", b)
//     } else {
//         znak = calc[1]
//         console.log("znak", znak)
//     }

// }
// if (znak === ">" || znak === "<" || znak === "=" || znak === "+" || znak === "-" || znak === "*" || znak === "/") {
//     let op = "+"
//     // console.log("a", typeOf(a))
//     // console.log("b", typeOf(b))
//     result = a + op + b

//     console.log("result: ", eval(result))
// }

// // }
// function count(el = []) {

// }



// let num1 = 0
//let arr = [4, "/", 2]
// for (i = 0; i < arr.length; i++) {
//     if (i === 0) {
//         num1 = arr[i]
//     }
//     console.log("i", i)
//     console.log("arr[i]", arr[i])

// }
// console.log("num1:", num1)




//function count(num1, mark, num2) {
// function count(arr) {
//     let num1 = 0
//     let num2 = 0
//     let mark

//     for (i = 0; i < arr.length; i++) {
//         console.log("i:", i)
//         if (i === 0) {
//             num1 = arr[i]
//         } else if (i === 1) {
//             mark = arr[i]
//         }
//         else if (i === 2) {
//             num2 = arr[i]
//         }

//         console.log("arr[i]:", arr[i])
//     }
//     console.log("num1", num1)
//     switch (mark) {
//         case "*":
//             return num1 * num2;
//         case ("+"):
//             return num1 + num2;
//         case ">":
//             return num1 > num2;
//         case "<":
//             return num1 < num2;
//         case "=":
//             return num1 === num2;
//         case "-":
//             return num1 - num2;
//         case "/":
//             if (num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return "не делится на нуль";
//             }
//     }
// }

// console.log(count(1, "=", 1))

//let arr = [4, "/", 2]

// const income = ['100', 'hello', 'javascript', 'help200', '+', 4];





function count(income) {
    const ALLOWED_SIGNS = [">", "<", "=", "+", "-", "*", "/"];
    const selectedElements = [];

    const isElementNumber = (e) => {
        const element = Number(e);
        const isNumber = typeof element === 'number' && isFinite(element);
        //  console.log(`Element '${element}' is Number: ${isNumber ? "TRUE" : "FALSE"}`);
        return isNumber;
    }

    const isElementMathSign = (e) => {
        const isMathSign = ALLOWED_SIGNS.includes(e);
        //console.log(`Element '${e}' is is Math Sign: ${isMathSign ? "TRUE" : "FALSE"}`);
        return isMathSign;
    }

    function selectFirstElement(elements) {
        selectedElements[0] = +elements.find(e => isElementNumber(e));
    }

    function selectSign(elements) {
        if (!selectedElements[0]) return console.error('Cant continue without first digit!');

        selectedElements[1] = elements.find(e => isElementMathSign(e));
    }

    function selectLastElement(elements) {
        if (!selectedElements[1]) return console.error('Cant continue without Math sign!');

        const startPoint = elements.indexOf(selectedElements[1]) + 1;
        const lastArrayPart = elements.slice(startPoint);
        selectedElements[2] = +lastArrayPart.find(e => isElementNumber(e));
    }

    const selectElements = array => {
        if (!Array.isArray(array)) return console.error('Elements is not Array!');
        selectFirstElement(array);
        selectSign(array);
        selectLastElement(array);
    }

    selectElements(income);
    console.log(selectedElements)









    let num1 = 0
    let num2 = 0
    let mark

    for (i = 0; i < selectedElements.length; i++) {
        // console.log("i:", i)
        if (i === 0) {
            num1 = Number(selectedElements[i])
        } else if (i === 1) {
            mark = selectedElements[i]
        }
        else if (i === 2) {
            num2 = Number(selectedElements[i])
        }

        // console.log("arr[i]:", arr[i])
    } if (selectedElements.length < 3) {
        console.log("Массив меньше 3")

    } else if (selectedElements.length === 3) {



        if (mark != "+" && mark != "-" && mark != "*" && mark != "/" && mark != ">" && mark != "<" && mark != "=") {
            console.log("Ошибка")
            console.log("mark", mark)
        } else {
            console.log("num1:", num1)
            console.log("num2:", num2)
            console.log("mark:", mark)
            let result
            switch (mark) {
                case "*":
                    result = num1 * num2
                    console.log("result:", result)
                    break
                //         return num1 * num2;
                case ("+"):
                    result = num1 + num2
                    console.log("result:", result)
                    break
                //         return num1 + num2;
                case ">":
                    result = num1 > num2
                    console.log("result:", result)
                    break
                //         return num1 > num2;
                case "<":
                    result = num1 < num2
                    console.log("result:", result)
                    break
                //         return num1 < num2;
                case "=":

                    result = num1 === num2
                    console.log("result:", result)
                    break
                // console.log("result:", result)
                // return num1 === num2;
                case "-":
                    result = num1 - num2
                    console.log("result:", result)
                    break
                //         return num1 - num2;
                case "/":
                    result = num1 / num2
                    console.log("result:", result)
                    if (num2 !== 0) {
                        result = num1 === num2

                    } else {
                        console.log("не делится на нуль");
                        //         }
                    }
            }
        }


    }
}

count(['100', 'hello', 'javascript', , 'help200', '/', 4])


    // // let r = "Artem"
    // console.log("typeof(r)", typeof (r))
    // // r = Number(r)
    // console.log("typeof(r)", typeof (r))
    // // console.log("r", r)
    // if (r != NaN) {
    //     console.log("Not a NaN")
    //     // let
    // }

    // // let tr

    // let ray = ['100', 'hello', 'javascript', , 'help200', '+', 4]


    // console.log("typeof(ray)", typeof (ray))
    // ray = Number(r)
    // console.log("typeof(r)", typeof (r))
    // console.log("r", r)
    // if (r != NaN) {
    //     console.log("Not a NaN")

    // }
