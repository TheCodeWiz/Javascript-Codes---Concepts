//******************Interview perspective se datatype pe summary**********************

// 1.there are two types of categorization of data on the basis of storing and accessing the data in the memory i.e. primitive and non-primitive (reference types)



/*
*************there are 7 categories of primitive datatypes i.e.**********************
all primitive datatypes are call by value types i.e. we dont get refernce of address rather we directly get the data copied and all the changes we make happens in the copied data we got and not in the data that is stored in the memory

1.  String
2.  Number
3.  Boolean
4.  null (null means empty and not 0 not empty string)
5.  Undefined (variable , memory is declared but value is not declared)
6.  Symbol (used to make the value unique)
7.  bigInt
*/


const outsideTemp = null
console.log( typeof outsideTemp);// o/p will be null but typeof object will be object and not null
const scoreValue = 100.3
console.log(typeof scoreValue);// o/p of this will be number

/*
javascript is Dynamically typed language
*/


/*
************Another type of datatype is known as Reference datatype also called as non-primitive datatype
1.  Arrays
2.  Objects
3.  Functions
*/

//how to declare Symbol ->  const Id = Symbol('123')
//how to declare Symbol ->  const anotherId = Symbol('123')
//Id is not equal to anotherId here in above example

/*how to declare the bigint number -->*/ const bigNumber = 25631478936565563256333n

const anotherId = Symbol('123')
console.log(typeof anotherId);// o/p of this will be symbol
const heros = ["Shaktiman","naagraj","doga"]
let myObj = {
    // here we write the objects in key:value pair in curly braces
    name:"hitesh",
    age: 22,
}

// how to declare a function in the form of variable
const myFunction = function(){
    console.log("hello World");
}

console.log(typeof bigNumber);// o/p will be bigint
console.log(typeof myFunction);//o/p will be function

// all the non-primitive datatypes have return type / typeof as object 


//*********************** memory types and its discussion related to the interview perspective***************************


/*
here in js also we have two types of memories i.e. Stack memory and heap memory

1.  stack memory is used where primitives datatypes are used.
2.  heap memory is used where non-primitive datatype are used.
3.  whenever you use stack memory you get a copy of your data 
4.  whenever you use heap memory you get refernce of the original value.

*/

//example of stack memory
// let myYoutubeName = "manavBhatt"// this will go in stack memory
// let anotherName = myYoutubeName// here we are getting the copy and not the reference 
// anotherName = "mbb"
// console.log(anotherName);
// console.log(myYoutubeName);


//example of heap memory
let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne//here you get the reference from where the userOne is getting from the heap

userTwo.email = "manav@google.com"

console.log(userOne.email);
console.log(userTwo.email);