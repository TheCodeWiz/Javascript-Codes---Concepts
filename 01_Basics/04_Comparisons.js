console.log("2" > 1);
console.log("02" > 1);
//typescript doesn't allow us to compare two different datatype
console.log(null > 0);
console.log(null == 0);
//the reason is that an equity check (==) and comparisons (>,<,>=,<=) works differently .
//comparisons convert null to a number , treating it as 0
//hence null >= 0 is true and null > 0  is false.
console.log(null >= 0);

//all will give o/p as false.
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// === is different then ==
//=== is stric checks
// === not only checks the value rather it strictly checks the value i.e. checks its datatype also.

console.log("2" == 2); //here it will check the value only
console.log("2" === 2); //here it checks the values as well as its datatype

/*
*****this type of conversion will always confuse you and we AVOID such type of code******
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
*/