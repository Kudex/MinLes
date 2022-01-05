// var str1 = "ansar@#//1";
// var str2 = "@#//sanra1";

// // str1.length === str2.length && str1.split("").sort().join() == str2.split("").sort().join();
// // console.log(str1.length)

// var str1 = "ansar@#//1";
// var str2 = "@#//sanra12";

// s1 = str1.split('');

// s2 = str2.split('');

// console.log(s2)
// // var i = s1.length + 1;
// // while (i--) {
// //     if (s2.indexOf(s1[i]) >= 0)
// //         s2.splice(s2.indexOf(s1[i]), 1);
// // }

// // console.log(s2)


function hasSameCharacter(str1, str2) {
    let a = Array.prototype.every.call(str1, (char) => str2.indexOf(char) > -1, this);
    if (a) return Array.prototype.every.call(str2, (char2) => str1.indexOf(char2) > -1, this);
    else return false;
}

console.log(hasSameCharacter("#3", "#3"));