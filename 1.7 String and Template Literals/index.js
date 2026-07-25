//string and template literals
const firstName = 'Anil';
const myJob = 'programmer';
const birthYear = 2005;
const nowYear = 2030;

const myName = "I'm " + firstName + ', a' + (nowYear - birthYear) + ' years old ' + myJob + ' ! ';

console.log(myName);

//template literals
const anilNew = `I'am ${firstName}, a ${myJob}, ${nowYear - birthYear} years old ${myJob} `;
console.log(anilNew);

console.log(`Just a random string.....`);

console.log(`String with \n\ multiple \n\ lines`);

console.log(`this
    is a
    multiline 
    string...`);
