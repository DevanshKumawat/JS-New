const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indian_heros = ["ram", "shyam", "raju"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)  // Concat merge two different arrays into one single array
// console.log(allHeros);



//another method is Spread 

// const all_new_heros = [...marvel_heros, ...dc_heros, ...indian_heros]  //Spread Method spread every element from a single array

// console.log(all_new_heros);

// FLAT :- Makes a single array from a array that contains many arrays in it

const another_array = [1,2,3,4,5,[6,7],5,6,[7,8,[9,5]]]

const new_another_array = another_array.flat(Infinity)

// console.log(new_another_array);

// console.log(Array.isArray("Devansh"))  // tell us that the given element is array or not 
// console.log(Array.from("Devansh"));   //Convert anything to array
// console.log(Array.from({name: "Devansh"}));  
// INTERESTING :- doesnt convert , returns a empty []


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));

