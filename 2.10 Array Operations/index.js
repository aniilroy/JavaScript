// Array Operations methods-push, pop

const friends = ['Anil', 'Mukul', 'Joy', 'Ram'];

//Add elements--->push method
friends.push('Ramesh');
newFriends = friends.push('Mohan');

console.log(friends);
console.log(newFriends)

//insert at beginning
friends.unshift('John');
console.log(friends);

//Remove elements--->pop method
friends.pop(); //From Last
const popped = friends.pop();
console.log(`Removed element is: ${popped}`);
console.log(friends)

//removed from beginning
friends.shift(); //First element
console.log(friends);

//Finde index
console.log(friends.indexOf('Joy'));

//Check element existance
console.log(friends.includes('Anil'));
console.log(friends.includes('Asha'));

if(friends.includes('Mukul')){
    console.log('You have a frined named Mukul');
}


