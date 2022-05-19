'use strict'


function acceptNum (num) {
    return function() {
        return num + num;
    }
}
const resultFunc = acceptNum(3);
console.log(resultFunc())