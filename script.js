/*1) Sum of an array Write a function that will take an array of numbers
 as a parameter and return the sum of those numbers. */


function calcSum (sumArr){

    let sum = 0;
    for(let i = 0; i < sumArr.length; i++ ){
        
        sum += sumArr[i];
       
    }

    return sum;
    
}

console.log(calcSum([5,10,15,20]));


/* 2) Average of an array
Write code that takes an array of numbers as a parameter and
 returns the average of those numbers*/

function calcAverage(sumArr) {

    let sum = 0;
    for(let i = 0; i < sumArr.length; i++ ){
        
        sum += sumArr[i];
       
    }

    let avg = sum / sumArr.length;

   return avg;

}

console.log(calcAverage([3,4,5]));

/*Bonus 1: Refactor your code to re-use a function
Now, rewrite your average function so it calls
 your sum function  to add the numbers up. This is an example of using a function to reuse code.*/

 function average(arr){

   return (calcSum(arr)/ arr.length);

    
}

console.log(average([10, 5, 9]));

/*Write a function that takes an array of numbers and returns the largest number.

Examples:

max([7,10, 30, 1]); // returns 30
*/

function largestNum(arr){

     let max = arr[0];

    for(let i = 1; i < arr.length; i++){

        if (arr[i] > max){
            max = arr[i];
        }
    }
    
    return max;
}

console.log(largestNum([7,10,30,1]));

/*Write a function that takes two different arrays
 as parameters, finds the largest number 
 in each array and returns 
 the sum of those two numbers.
 */


function largestNum2(arr1,arr2){

    let largestArr1 = largestNum(arr1);
    let largestArr2 = largestNum(arr2);

    return largestArr1 + largestArr2;
    
   
}   
 
console.log(largestNum2([3,2,8],[4,9,1]));