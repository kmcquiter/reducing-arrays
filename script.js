/*1) Sum of an array Write a function that will take an array of numbers
 as a parameter and return the sum of those numbers. */


function CalcSum (sArr){

    let sum1 = 0;
    for(let i = 0; i < sArr.length; i++ ){
        
        sum1 += sArr[i];
       
    }

    return sum1;
    
}

console.log(CalcSum([5,10,15,20]));


/* 2) Average of an array
Write code that takes an array of numbers as a parameter and
 returns the average of those numbers*/

function calcAverage(sArr) {

    let sum1 = 0;
    for(let i = 0; i < sArr.length; i++ ){
        
        sum1 += sArr[i];
       
    }

    let avg = sum1 / sArr.length;

   return avg;

}


console.log(calcAverage([10, 20,30]));
