'use strict'


function getPrimeNum (num) {
    if(num < 1000){
        for(let i = 2; i < num; i++){
            if(num % i !== 0) {
                return 'простое число';
            } else {
                return 'непростое число'
            }
        }
    } else {
        return 'данные неверны';
    }
    
}

console.log(getPrimeNum(29))