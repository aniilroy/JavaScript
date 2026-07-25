//Operator Precedence

const yearNow = 2029;
const ageAnil = yearNow - 1999;
const ageSamir = yearNow - 2000;

console.log(yearNow - 2000 > yearNow - 2005); // first - and then > will execute
console.log(25 - 10 -5);

let x , y;
x = y = 30 -10 -7;
console.log(x, y);

//precedence of grouping is high
const averageAge = (ageAnil + ageSamir) / 2;
console.log(averageAge);


