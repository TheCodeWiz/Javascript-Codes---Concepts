//date represents the single moment calculated from or WRT 1st January 1970(epoch).
//dates are calculated in milliseconds from january 1st.
//we use Temporal api to use date and time easily .

//dates

// let myDate = new Date()
// console.log(myDate.toString());                 //o/p:->    Thu Jun 20 2024 23:07:40 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());              //o/p:->    2024-06-20T17:37:40.783Z
// console.log(myDate.toDateString());             //o/p:->    Thu Jun 20 2024
// console.log(myDate.toLocaleDateString());       //o/p:->    20/6/2024
// console.log(myDate.toLocaleString());           //o/p:->    20/6/2024, 11:07:40 pm
// console.log(myDate.toJSON());                   //o/p:->    2024-06-20T17:37:40.783Z

// console.log(typeof myDate);//myDate is of type object in js

//this is one way of declaring the date you want
// let myCreatedDate = new Date(2023, 0, 23)//in javascript , months are starting from 0 and not from 1 i.e. 0 means january

//this is more precise way to declare the time also
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// here format is (YEAR, MONTH, DAY, HOUR, MINUTE, SECONDS)


//another way of taking input of date in js in yyyy-mm-dd
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());//in this format of yyyy-mm-dd month starts from 01 or 1 and not 0

let myCreatedDate = new Date("01-14-2023")//this format is of type mm-dd-yyyy and month starts from one
// console.log(myCreatedDate.toLocaleString());


//this technique of using timestamp is used mainly in quizes
let myTimeStamp = Date.now()
// console.log(myTimeStamp); // this is the time from when i had declared till the time i had ran my code and the time changes everytime when i re-run the code

// console.log(myCreatedDate.getTime());// value of time here will be constant from the time it is declared and no matter how many times I re-run the code it never changes 

//in order to convert it into seconds we can do this which is asked in interviews also
// console.log(Math.floor(Date.now()/1000))// this will convert the milliseconds into seconds 
let newDate = new Date()
// console.log(newDate);                                   //op:-> 2024-07-19T05:50:13.607Z
// console.log(newDate.getDate());                         //op:-> 19

// it counts 0 as january and here 06 means 5 here .
// console.log(newDate.getMonth());                        //op:-> 6

// console.log(newDate.getFullYear());                     //op:-> 2024
// console.log(newDate.getHours());                        //op:-> 11  
// console.log(newDate.getMinutes());                      //op:-> 20
// console.log(newDate.getSeconds());                      //op:-> 13  
// console.log(newDate.getMilliseconds());                 //op:-> 607 
// console.log(newDate.getTimezoneOffset());               //op:-> -330 (difference between UTC and local system time)
// console.log(newDate.getUTCDate());                      //op:-> 19 (gets the day-of-the-month, using UTC)

/*
    //one method of date is very very important and will be used many times which defines properties by the coder and the method is:
    const newDate1 = new Date(); // Get the current date and time
    const formattedDate = newDate1.toLocaleString('default',{
        weekday: "long",
        timeZone: "Asia/Kolkata" // Specify India time zone (IST)
    });
    console.log(formattedDate);
*/

//always do comparison in milliseconds