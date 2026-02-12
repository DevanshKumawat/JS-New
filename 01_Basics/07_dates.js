//DATES :-Defined form January 1 , 1970

const date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString()); //only gives date
// console.log(date.toISOString());  //gives date in YY-MM-DD format
// console.log(date.toLocaleDateString()); //gives date in MM-DD-YY format
// console.log(date.toJSON());       //same as ISO string
// console.log(typeof date);  //type of date is OBJECT


//to create own date 

let myCreatedDate = new Date(2026,1,11)
// console.log(myCreatedDate);




//to create Time Stamp

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()

// console.log(newDate.getMonth()+1);
// console.log(`Date is ${newDate.getDate()}`);


//Customising a date format 

newDate.toLocaleString('default',{
    weekday : "long"
})
console.log(newDate);
