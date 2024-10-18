//              ******************************************* Array part 2 ***********************************************

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// here array of dc_heros will entirely become one element in the array of marvel_heros [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] like this
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// by doing this we can print the whole array of dc_heros that is acting like an element in the array of marvel_heros 
// console.log(marvel_heros[3]);


// if we want to display the particular element from the array of dc_heros which is the 3rd element in array of marvel_heros we can do like this.
// console.log(marvel_heros[3][1]);


//****************************************above method is not suitable***********************************


// gives a new array after merging the concat arrays unlike push
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//push method perform operations on existing array only but concat returns a new array


// this line of code below will also give the same result as of concat function but in concat function, a limitation is that we can concat only one array at one time which is not the case in SPREAD . In spread we can concat more than one arrays 
const all_new_heros = [...marvel_heros,...dc_heros]
//Syntax of spread is:->    [...variable_name / array_name,...variable_name / array_name,...variable_name / array_name,....]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [ 4, 5, 6], 7, [ 6, 7, [ 4, 5]]]


// flat function gives me all the arrays present as the elements in the main array as a single - single array that too concatenated in the output and INFINITY value means till how much depth you should solve the array . suggestively give the required depth and not as INFINITY.
const real_another_array = another_array.flat((Infinity))
console.log(real_another_array);


//this function of array given below is highly used in data scrapping


console.log(Array.isArray("manav"))

// .from(element) this function converts the alphabets of string as elements of the array and gives the array of the alphabet as element in o/p
console.log(Array.from("manav"))

//*****************************this is intersting from intervies POV****************************

// we can't directly convert this type of input variable in array and hence an empty array is displayed in the o/p because it will get confused that whether it should make array of keys or values or both
console.log(Array.from({name: "manav"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//.of() returns a new array from set of elements (elements can be variable ,arrays ,etc)