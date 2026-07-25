//Truthy and Falsy values
// 5 falsy values: 0, '', undefined, Null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Anil'));
console.log(Boolean({}));
console.log(Boolean(''));

const money= 0; // 0 is a falsy value
if (money) {
    console.log("Don't spend it all now!");
    
} else {
    console.log('You should get a job');
}


let height; // undefined is a falsy value
if (height) {
    console.log('Yeah! height is defined!');
    
} else {
    console.log('Height is Undefined!');
}


let name = 'Anil'; //Defined is truthy value
if (name) {
    console.log('Name is defined!');
    
} else {
    console.log('Name is not defined!');
}