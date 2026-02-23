function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

let result = addTwoNumbers(1,9)
// console.log(result);


function handleObjects(anyObject){
    console.log(`My username is ${anyObject.username} and price is ${anyObject.price}`);    
}

handleObjects({
    username: "Devansh",
    price : 999
})