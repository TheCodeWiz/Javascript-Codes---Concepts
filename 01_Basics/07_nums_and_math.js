//this will give just the data without any information about the datatype
// const score = 400
// console.log(score);
//this will give the data with the datatype . Here in example given below it will show data of datatype number since we have created the variable of datatype number
// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());//converts the number into string
// console.log(balance.toString().length);//this will give the length of the balance
// console.log(typeof (balance.toString()));//this will give us the confirmation of string datatype after converting the number into string
// console.log(balance.toFixed(2));//this will give decimal upto 2 points like here if i give 2 inside the toFixed() then it will give answer or data in 2 decimal points . Basically provides precision.

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));// return the string and can provide the number between range 1 to 21 in toPrecision() and priority is given before the decimal

// const hundreds = 10000000
// console.log(hundreds.toLocaleString());// this .toLocaleString() function helps in counting the number of zeros . it is based on US standards and hence if I pass the number 1000000 then the o/p will be 10,00,000

//to use it in indian standard we uses 'en-IN'
// const hundreds1 = 10000000
// console.log(hundreds1.toLocaleString('en-IN'));



            //************************************************ Maths **************************************************

       
//Math library itself is of type object
//console.log(Math);

//.abs() method in maths changes the negatives number into positive number thats it.
//console.log(Math.abs(-4));

//.round() method in maths rounds off the decimal number into integer number
//console.log(Math.round(4.7)); 

//.ceil() will chose the topmost number i.e. if I pass the number like 4.0001 then to the .ceil() function will give the o/p as 5.
//console.log(Math.ceil(4.0001));

//.floor() pe bottomost number o/p aayega i.e. if I pass the number like 4.99999 then to the .floor() function will give the o/p as 4
// console.log(Math.floor(4.99999));

//.sqrt() will give the square root of the provided number
//console.log(Math.sqrt(9));

//.min() will give the minimum number in the provided array
//console.log(Math.min(4,2,6,8));

//.max() will give the maximum number in the provided array
//console.log(Math.max(4,2,8,6));

//.random() will give the random number everytime you run the program
// console.log((Math.random()*10) + 1);  

// this will give me single number and in decimal between 1 to 9
// console.log(Math.floor((Math.random()*10) + 1));

/*most inportant concept of creating or generating the random number between the provided range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
*/
