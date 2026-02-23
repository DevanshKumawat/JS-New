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



// Object.freeze(JsUser)
// JsUser.email = "devansh@google.com"


// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS Users")
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "devansh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(instructor);
