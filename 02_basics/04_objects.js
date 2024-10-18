// here we will learn how to declare object with the help or use of constructor
// const tinderUser = new Object()//this is a singleton object created with the help or use of constructor

const tinderUser = {}//this is the non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{// fullname object is there in regular object and in that fullname object , userfullname object is there and in that userfullname object there are details in the form of key:value pair.
            firstname: "Manav",
            lastname: "Bhatt"
        }
    }
}

// console.log(regularUser.fullname);                           // o/p:-> { userfullname: { firstname: 'Manav', lastname: 'Bhatt' } }
// console.log(regularUser.fullname.userfullname);              // o/p:-> { firstname: 'Manav', lastname: 'Bhatt' }
// console.log(regularUser.fullname.userfullname.firstname);    // o/p:-> Manav
// console.log(regularUser.fullname.userfullname.lastname);     // o/p:-> Bhatt

// here comes a concept of option chaining it says if something doesn't exist then what's the issue..
// console.log(regularUser.fullname?.userfullname);// use of ? here is known as option chaining

//in order to combine the objects just like arrays we can do like this
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}


// by doing the below method , issue of objects inside objects will arise just like issue in arrays arise when we push array in another array and we get array inside array 
// const obj3 = {obj1, obj2}


// we had stored in obj3 since .assign() function always returns something and .assign() is one of the static function of object that copies properties or data's from one or more source objects and stores in one target object
// const obj3 = Object.assign(obj1,obj2)


// by passing {} we make sure that the end result of combined obj1 and obj2 will get stored here {} i.e. {} this is our target object and meaning of using this {} is that all values are going in {} or whatever that has been written in first arguement place in .assign() function . it is not compulsory but for betterment we have to write this {}. 
// const obj3 = Object.assign({}, obj1, obj2)


//.assign() meethod is also rarely used 


// we are mostly gonna use this below method
// const obj3 = {...obj1,...obj2}//best way to combine anything is to use spread operator
// console.log(obj3);

// whenever values will come from database we are gonna use this syntax :


const users = [
    {
        id: 1,
        email: "M@gmail.com"
    },
    {
        id: 1,
        email: "M@gmail.com"
    },
    {
        id: 1,
        email: "M@gmail.com"
    }
]


// we can access in this way too since object is present inside the array.
// console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// .entries(obj_name) this function is very very rarely used and this function makes every key:value pair in form of array i.e. array inside the array
console.log(Object.entries(tinderUser));

// datatype of (Object.keys(tinderUser)) is array and hence we can use loops on it
console.log(typeof (Object.keys(tinderUser)));


// .hasOwnProperty() shows that whether the provided value is present inside the object or not in form of true or false. and in below case ,since isLoggedIn property is present in tinderUser Object and hence we got true in o/p and by this function we got to know that isLoggedIn is there in form of key or value in tinderUser object.
console.log(tinderUser.hasOwnProperty('isLoggedIn')); 


//                                  ******* destructuring of the object *******

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// this is another way of accessing the data from the object
// const {courseInstructor} = course
// console.log(courseInstructor);

// this is another way of accessing the data from the object by decreasing the size of the object
// yehi syntax hai object destructuring ka
const {courseInstructor: instructor} = course
console.log(instructor);

//like objects , destructuring of arrays also takes place but it is very very rare


// API means when you have to caary out your work / make your work done by others 
//menu card is an example of API documentation


// Earlier, values which we are getting from the API now was then available and was coming in XML structure which was very complex 
// now the values that are coming from API are in JSON Structure .


// JSON means an object without a name.
//eg:


// {
//     "name": "Manav",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// not always we get the api in the above format 
// sometime we get the apis in array format
//eg

// [
//     {},
//     {},
//     {}
// ]

//eg of an api

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }






// in react there is a thing called props which we will be using many times while coding in react
// basic syntax of react that include the concept of destructuring of object is as follows:
// const navbar = (props.company) => {

// }

// navbar(company = "Manav")

// const navbar = ({company}) => {//instead of writing props everytime we directly write the variable in {} curly braces

// }

// navbar(company = "Manav")