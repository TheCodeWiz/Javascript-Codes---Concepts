//objects and events are important in javascript
/*
1. objects in js can be declared in two ways either in literals form or in constructor form
2. SINGLETON means if you create from any constructor then a singleton / single object is created since this object created in single of its type i.e. this is an object of a type in itself
3. if you cretae object from differnet type then it is not singleton uss object ke various instances ban jate hai
*/


// so in interview you just say ki
// --> if we declare the object in the form of literals then they doesn't form singleton / are not singleton .
// --> if we declare the object in the form of constructor then they always form singleton / of form singleton / are singleton
 

//in object we declare the values in the form of key:value pair.
//declaration of object in literal form


// mostly asked question in the interview that declare a symbol and add it in the key of object and then print, then this is the solution : 
const mySym = Symbol("key1")

const JsUser = {
    name: "Manav", // no matter whether you take the name as a key but system consider it as a string like ("name")
    "full name": "Manav Bhalchandra Bhatt",// when you decalre the values in this type / style then there is no chance that you can access the values using dot operator.
    age: 19,
    // mySym: "mykey1", // this is incorrect declaration since detatype of mySym must be symbol and in this type of declaration the datatype of mySym is string which is incorrect here.
    [mySym]: "mykey1",// this is the only and correct type of declaring the symbol and using as a key
    location: "Mumbai",
    email: "manav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}


//this is the traditional way of accessing the data from the object
// console.log(JsUser.email);

//this is the another/modern way of accessing the data from the object since keys are stored as strings in the memory
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof (JsUser[mySym]));

//how to change the value inside the object
// JsUser.email = "manav@chatgpt.com"
// console.log(JsUser.email);

//if i want to freeze the object in case of avoiding the manipulation i can use Object.freeze(object_name) 
// Object.freeze(JsUser)

// this change will not get reflected since the object is freezed
// JsUser.email = "manav@microsoft.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User,${this.name} `); // in order to refernece in/the same object use this keyword.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());