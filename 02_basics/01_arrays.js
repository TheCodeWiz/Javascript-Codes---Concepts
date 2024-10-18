// arrays
//() -> paranthesis     [] -> brackets      {} -> breces
//Array is an object. It is an collection of different as well as similar datatypes . arrays are generally static i.e. cannot be resized
// in Javascript , arrays are resizable and stores mixed datatype as well . we access the elements of the array using this syntax i.e. arr_name[index of the required element in the array]
// from interview POV is whenever we perform copy operation on arrays it creates shallow operations .

// SHALLOW COPY of an object means a copy whose properties shares the same references (point to the same underlying values) as those from the source object from which the copy was made. it means that SHALLOW COPY is that copy of the object which refers to the original object (remember the example of heap storage) i.e. my SHALLOW COPY and original object refers to the same spot/place where my data's are stored and if i change anything in the shallow copy the changes will be deflected in the original one too..  

// DEEP COPY of an objet means is a copy whose properties do not share the same reference (point to the same underlying values) as those from the source object from which the copy was made. it means that DEEP COPY and original object both refers to different place/spot where the data's of DEEP COPY and original object is present respectively and if i change anything in the deep copy the changes will be not be deflected in the original one.


const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktimaan", "naagraj"]
const myArr2 = new Array(1,2,3,4)// this type of array creation doesn't require square brackets .directly while creating the new object ,values that we need in the array , we have to pass it directly in the parenthesis and it will apply the square brackets by itself during the display of the array

// console.log(myArr[1]);

//  ************************************* methods of arrays ************************************************

// .push() method is used to add the element
// myArr.push(6)  
// myArr.push(7)  

// .pop() method is used to remove the element
// myArr.pop(7) 

// this function adds the element in the start of the array but this method is not suitable for arrays with large number of elements
// myArr.unshift(9)

//we dont pass the parameter in this method i.e. .shift() method and this removes the element from the starting in the array that to only one time
// myArr.shift()

// this are some questionaire functions of array which will answer in true or false

// .includes() gives answer in true or false
// console.log(myArr.includes(9));

// .indexof() gives indes of the element if present in the array or gives -1 if not present in the array
// console.log(myArr.indexOf(3));


// .join() function copies all the element from original array into strings
// const newArr = myArr.join() 
// console.log(myArr);

// type of myArr is object
// console.log(typeof myArr);
// console.log(newArr);

// type of newArr is string 
// console.log(typeof newArr);



//**************slice and splice method of array which is most commonly asked and interviewer's favourite question*************



console.log("A ",myArr);

// from 1st position to 3rd position slice the array and o/p will consist 1st element, 2nd element but not the 3rd element
const myn1 = myArr.slice(1,3)

console.log(myn1);

// by using the slice function my original array will remain intact and no changes will be done there
console.log("B ",myArr);

// from 1st position to 3rd position slice the array and o/p will consist 1st element, 2nd element and  3rd element also.
const myn2 = myArr.splice(1,3)
console.log(myn2);

// by using splice function 1st, 2nd, 3rd element are moved from the original array to myn2 and the remaining 0th, 4th, 5th element is there in the original array. conclusion is that by using splice function my original array gets affected and does not remain intact.
console.log("C ",myArr);

//*****basically mere original array ke hisse hogye splice use krne se jabki slice use krne se mera original array intact reh raha tha******
//splice function array ko manipulate krta hai 
//slice function array ko manipulate nhi krta
