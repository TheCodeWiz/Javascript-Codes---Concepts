//this is one way of declaring the string
const name = "Manav"
const repoCount = 50
// console.log(name + repoCount + " Value");//this way of concatinating the string and things are not recommended
//we are going to use backticks and this provides STRING INTERPOLATION
//In String Interpolation we create placeholders cand can directly inject the variable in the placeholder.

//eg:
console.log(`Hello , my name is ${name} and my repocount is ${repoCount}`);//this syntax is much much better and widely used syntax in backend

//another way of declaring the string is by using new keyword i.e. making an object os it
const gameName = new String('Manav-Bhatt-com')
//in memory it will be stored like array but it is not array it is object
/*
0: M
1: a
2: n
3: a
4: v
5: -
6: B
7: h
8: a
9: t
10: t
*/

//there are many methods in the string but some important methods are :
// console.log(gameName[0])//accessing the 0th key i.e. M
// console.log(gameName.__proto__)//__proto__ is for displaying the object

// console.log(gameName.length);//gives the length of the string
// console.log(gameName.toUpperCase());//convert the string to upper case 
// console.log(gameName.charAt(6));//gives the character present at that provided position.
// console.log(gameName.indexOf('t'));//gives the index where the alphabet is occured for the first time
// console.log(gameName.toLocaleLowerCase());//it is same as to lower case just the name is different due to some turkish reasons

//we cant provide negative values to the substring method
// const newString = gameName.substring(0,4)//it will slice from 0 to 3 and 4 is excluded
// console.log(newString);

// //we can provide negative values to the slice method
// const anotherString = gameName.slice(-10,4)//it will slice from 0 to 3 and 4 is excluded
// console.log(anotherString);

// const newString1 = "    Manav    "
// console.log(newString1);
// console.log(newString1.trim());//this will remove the white spaces before and after the string

// const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20','-'));
// console.log(url.includes('hitesh'));//whii give true if given string is present in the url variabale

// console.log(gameName.split('-'));//this will convert my string into an array of elements that are seperated based on the - provided inside the bracket of split function

//for more information on strings open console in chrome and write this two line i.e. 
// const gameName  = new String('manav')
// gameName and you can see all the methods of the string.