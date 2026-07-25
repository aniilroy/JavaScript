//Type conversion
const inputYear = '1991';
console.log(inputYear + 18); //output: 199118, concatenate
console.log(Number(inputYear) , inputYear); //covert to number
//Try to convert a string to number
console.log(Number('Anil'));
console.log(typeof NaN); //NaN is an invalid number

//convert number to string
console.log(String(100), 100)

//Type coercion, number to string automatic
console.log(`I am ` + 26 + ` years old`); 

//string to number automatic

console.log('50' - '15' - 5); // - operator treat string as number
console.log('2' ** '3');


let x = '1' + 1; //string 11, plus makes concatenate
x = x - 1; // 11 - 1
console.log(x); //11 - 1 = 10

console.log(5 + 3 + 1 + '7');
console.log('10' - '4' - '3' - 2 + '5');







