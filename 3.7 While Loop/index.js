//While Loop
let i =0;
while(i<5){
    console.log(`While loop ${i}`);
    i++;
}

//while loop by Math.random() method
let dice = Math.floor(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;
    if(dice === 6) console.log (`You rolled ${dice}, Loop End`);
}

