//Function Expression for reference
const calAge = function (birthYear){
    return 2027 - birthYear;
}

//Arrow Function

const calAge1 = birthYear => 2027 -birthYear;
console.log(calAge1(1997));

//long version
const double = (num) =>{
    return num * 3;
}

//short version
const single = num => num * 4;

const doubleNum = double(25);
const singleNum = single(2);
console.log(doubleNum, singleNum);

//when 2 parameters/ inputs
const add = (a, b)=> a + b;

//log it:

console.log (add (5, 7));
