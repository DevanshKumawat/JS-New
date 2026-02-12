//ARRAY :- To store similar datatypes into a single place

const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr[4]);




//+++++++++++++ Array Methods +++++++++++++++++

//++ myArr.push(8)  //Adds 6 in array
//++ myArr.pop()    //Removes the last one from a array
// console.log(myArr);


// console.log(myArr.includes(7)); //checks that 7 is in the array or not
// console.log(myArr.indexOf(4));  //tell about index of 4


const newArr = myArr.join()  //joins and convert it to string
// console.log(typeof newArr);


//++++++++++++++ Slice or Splice ++++++++++++++++++++

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)  //3 is not included 
// console.log(myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)  //3 is included here

// console.log(myn2);

// console.log("C", myArr);


//IMPORTANT 
//The main difference between slice and splice are as follows :-
//1) In slice the last index is not included but in splice the last index is included 
//2) ++ In splice the original array is changed means the index splice(1,3) is splited from the main array