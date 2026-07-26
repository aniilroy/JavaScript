//Ternary operator

const age = prompt("Enter your age : ");

age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

console.log(drink);

//using if - else

    let drink1;
    if(age >= 18){
        drink1 = 'Wine 🍷';
    }else {
        drink1 = 'Water 💧' ;
    }
    console.log(drink1);

//using template literals

console.log(`I like to drink ${age >=18 ? 'Wine 🍷' : 'Water 💧'}`);
