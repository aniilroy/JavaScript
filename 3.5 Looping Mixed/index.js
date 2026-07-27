//Looping mixed
const myArray = [
    'Anil',
    'Roy',
    2026-1999,
    'programmer',
    ['Mukul', 'Raj', 'Nidhi']
];
const typesArray = []; //new array for catching the types of elements 

for(let i =0; i < myArray.length; i++){
    console.log(myArray[i], typeof myArray[i]);

    //Inserting typesArray: method 1

    //typesArray[i] = typeof myArray[i]

    //Inserting typesArray : method 2
    typesArray.push(typeof myArray[i]);
}
console.log(typesArray);

//calculate ages from array and store age in array
const yearsArray = [1991, 2000, 2005, 2007, 2010];
const agesArray = [];
const currentYear = new Date().getFullYear(); //get the current year method
console.log(`Current Year: ${currentYear}`);

for (i = 0 ; i< yearsArray.length; i++){
    agesArray.push(currentYear - yearsArray[i]);
}

console.log(agesArray);

//continue and break
console.log('-----ONLY STRING----');
for (i = 0; i < myArray.length; i++){
    //continue is for SKIP
    if(typeof myArray[i] !== 'string') continue;
    console.log(myArray[i]);
}

console.log('----BREAK WITH NUMBER---');
for (i = 0; i < myArray.length; i++){
    //break is for STOP the loop
    if(typeof myArray[i] === 'number') break;
    console.log(myArray[i]);
}


