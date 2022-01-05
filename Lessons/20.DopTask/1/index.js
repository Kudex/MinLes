// const mathTest = createMathTest(-100, +100)



// function createMathTest(minNum = 0, maxNum = 10) {
//   // your code here...
// }

function createMathTest(minNum, maxNum) {

  let a = Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));
  console.log("minNum:", a)

  let b = Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));
  console.log("maxNum", b)

  let items = Array("+", '-', '*', '/')

  let item = items[Math.floor(Math.random() * items.length)]
  console.log("item:", item)
  const exc = `${a} ${item} ${b}`



  let d = eval(a + item + b)


  let quastion = prompt(`Exercise: ${exc}`);
  console.log("quastion", quastion)


  if (item === "/") {
    //alert(d.toFixed(2))
    d = d.toFixed(2)
    let resultObject = {
      excercise: exc,
      result: d
    }
    console.log(resultObject)

  } else {
    let resultObject = {
      excercise: exc,
      result: d
    }
    console.log(resultObject)

  }
  if (quastion == d) {
    alert("Вы правильно решили задание")
  } else {
    alert(`Вы решили задачу неправильно! Правильный ответ: ${d}`)
  }


  //console.log("d: ", d)
  //console.log('typeof d: ', typeof 'd')
  //const result2 = a  `${item}` b
  //console.log("result", exc)
  //console.log(result2)



}

createMathTest(1, 10)



function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let c = Math.floor(min + Math.random() * (max + 1 - min));
  let d = Math.floor(min + Math.random() * (max + 1 - min));

  return c, d;
}

//console.log("rand", randomInteger(1, 9));



//alert(`Тебе ${age} лет!`); // Тебе 100 лет!