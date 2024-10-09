let score1 = "manav"

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber = Number(score1)// this line of code will try to convert anything that we pass into the number datatype. 
//conversion of null is 0
//conversion of undefined is NaN
//conversion of true is 1 and false is 0
//conversion of string is NaN

console.log(typeof valueInNumber);
console.log(typeof (valueInNumber));


console.log(valueInNumber);

/*
    i/p         o/p after conversion into number
1.  "33"    =>        33
2.  "33cjd" =>        NaN
3.  true    =>         1
4.  false   =>         0
5.  undefined =>       NaN
*/

let isLoggedIn = "manav"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
    i/p         o/p after conversion into boolean
1.   1    =>                true
2.   0    =>                false
3.   ""   =>                false
4.  "nhs" =>                true 
*/


// ***********************************  OPERATIONS  *****************************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+3); //addition
// console.log(2-3); //subtraction
// console.log(2/3); //division
// console.log(2*3); //multiplication
// console.log(2**3); //exponential
// console.log(2%3); //remainder

// let str1 = "hello"
// let str2 = " manav"
// console.log(str1 + str2);// it will concatenate the strings

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "3");//32

// since it goes from left to right hence if anything comes before the string in upper example then it will be added and then it will be concatenated with the string in the output and also works on the priority in js. String has higher priority then number so once the string is encountered then the property of strings remains


// console.log(1 + 2 + "3" + 2);//332

// console.log(true+);//this line will throw error
// console.log(true);//this line will give the o/p as true
// console.log(+true);//this line will give the o/p as 1
//console.log(+"");//this line will give you the o/p as 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);