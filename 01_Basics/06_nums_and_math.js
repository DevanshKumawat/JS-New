const score = 400
// console.log(score);

const balance = new Number(100)  //through this we get some functions to work on like a string
// console.log(balance);

// console.log(balance.toString().length);  //converted into string and now string functions can be worked on it



const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) //Puts commas around the ammount like 10,00,000 en-IN helps to put it in indian standard otherwise it use american standards







//+++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); //makes the value positve
// console.log(Math.round(4.7));  //round off the value using the general rule
// console.log(Math.ceil(4.2));  //round off to the greater value
// console.log(Math.floor(4.9));  //round off to the smaller value
// console.log(Math.min(5, 3, 7, 1));  //tell about the minimum value
// console.log(Math.max(5, 3, 7, 1));   //tells about the maximum value



// RANDOM FUNCTION 
// console.log(Math.random());  //Generates a random number between 0-1

// console.log(Math.random()*10);  //It makes it greater than 1 but what if the number is 0.0124 then it becomes 0.124 
// so

// console.log((Math.random()*10) + 1);  //now it always comes greater than 1
// console.log(Math.floor(Math.random()*10) + 1);  // rounded off to the lower number



const min = 10 
const max = 20 

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)