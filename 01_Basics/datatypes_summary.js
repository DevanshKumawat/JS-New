// Primitive Datatypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt


//Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];   //Example of Array
let myObj = {           //Example of Object
    name: "devansh",
    age : 18,
}                   

const myFunction = function(){      //Example of Function
    console.log("Hello World");
    
}




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap Memory

// Stack Memory :- Used in all the Primitive Datatypes (means a copy of datatype is given to you for work if you change it nothing changed in original value)

// Heap Memory :- Used in Non Primitive datatypes (means a reference of datatypes is given to you for work if you change it the original value is changed)


// Example of Stack
let myAccountName = "devanshkumawat"

let newAccountname = myAccountName
newAccountname = "DevilGamerz"

// console.log(myAccountName);   //it doesnt changed
// console.log(newAccountname);  //it is changed (the copy)



// Example of Heap

let userOne = {
    email: "devansh@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Devilgamerz@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);



