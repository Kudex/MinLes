function palindrome(str) {
    var palin = str.split("").reverse().join("");

    if (palin === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("eye"));g//Succeeds
palindrome("Race car");//Failsgit remote add origin https://github.com/Kudex/homework.git