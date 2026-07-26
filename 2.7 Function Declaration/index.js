// function declaration

function calAge(birthYear){
    return 2030 - birthYear;
}

//function expression

const age = calAge(1993);
//console.log(age);

// function expression with annonimous function
const calAge2 = function (birthYear){
    return 2029 - birthYear;
}

const age1 = calAge2 (1991);
console.log(age, age1);
