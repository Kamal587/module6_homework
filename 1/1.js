'use strict'


let arr = [2, 3, 4, 0, 8, 122, 44, 0, 'qwe'];

function getOddEvenNum(){
    let odd = 0;
    let even = 0;
    let zero = 0;
    for(let item of arr){
        if(typeof (item) == 'number' && item !== 'Nan'){
            if(item == 0){
                zero++;
            } else if( item % 2 == 0){
                even++;
            } else {
                odd++;
            }
        }
    }
    console.log(`Нечетных чисел: ${odd}`, `Четных чисел: ${even}`, `Нулевых значений: ${zero}` )
}

getOddEvenNum();