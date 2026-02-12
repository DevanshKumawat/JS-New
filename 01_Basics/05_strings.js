// Strings :- They are a type of data which is declared with the help of "" or ''

const name = "Devansh"
const paperCount = 50

// console.log(name + paperCount);


// This is a good method but we use a different method which use "Backticks"

// console.log(`My name is ${name} and my papercount is ${paperCount}`);


// New method to declare a string using new keyword

const newName = new String('DevanshKumawat') //check in Inspect

// console.log(newName[0])

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(7));    //to check the character at any index
// console.log(newName.indexOf('K'));  //to check the index of any character


const newString = newName.substring(0, 7) //to divide a string into a substring the 0 is the start value and the 7 is the end value into which the string is divided 
// ----- IMPORTANT ---- The end value is not included into the substring 
// console.log(newString);


//SLICE
const anotherString = newName.slice(-14,7)  //it is similar to substring but it can contain negative value also
// console.log(anotherString);


//TRIM :- Remove any extra spaces around it
const newStringOne = "    Devansh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


//REPLACE
const url = "https://devanshkumawat.com/devansh%50kumawat"

// console.log(url.replace('%50', '_'))  //it replace the first given value with the second value



//SPLIT :- Use to split a string different parts and convert it into an array