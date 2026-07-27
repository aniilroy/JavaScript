// looping backward and loops inside loops
const anil = [
    'Anil',
    'Roy',
    20,
    'programmer',
    ['disha', 'uttora', 'panchali'],
    true
];

for (let i = anil.length-1; i>= 0; i--){
    console.log(i , anil[i]);
}

//Nested loop
for (let chapter = 1; chapter < 5; chapter++){
    console.log(`📒 Chapter Number ${chapter}`);

    for(let exercise =1; exercise<5; exercise++){
        console.log(`-----Exercise No ${exercise

        }`);
    }

}