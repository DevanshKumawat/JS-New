//+++++++++++++++++OBJECT LITERALS +++++++++++++++++++

const mySym = Symbol("key1")  //declaring a symbol


const JsUser = {
    name : "Devansh",
    "full name" : "Devansh Kumawat",
    [mySym] : "myKey1",   //when we use it as [] then it is declared as a symbol
    age : 18,
    location: "Jaipur",
    email : "devanshkumawat@google.com",
}

// console.log(JsUser.email);  //first method
// console.log(JsUser["email"]);  //second method 
//the first one is good but if the key is declared as a string then the problem happens 
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser);



JsUser.email = "devansh@google.com"
Object.freeze(JsUser)

JsUser.greetings = function(){
    console.log("Hello JS Users")
}

console.log(JsUser.greetings());
