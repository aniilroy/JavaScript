//introduction to array
const friend1 = 'Anil';
const friend2 = 'Mukul';
const friend3 = 'Ram';
const friend4 = 'Sham';

const friends = ['Anil', 'Mukul', 'Ram', 'Sham'];
console.log(friends);

const years = new Array(1995, 1997, 2000, 2005, 2007);
console.log(years);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);
friends[2] = 'Mahi';
console.log(friends);

//An Exercise

const findAge = function (birthYear){
    return 2030 - birthYear;
}
const someYears = [1990, 1995, 1997, 2000, 2005, 2010];
const age1 = findAge(someYears[0]);
const age2 = findAge(someYears[1]);
const age3 = findAge(someYears[2]);
console.log(age1, age2, age3);
