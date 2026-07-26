//Dot vs. Bracket Operator
const myObject = {
    firstName : 'Anil',
    lastName : 'Roy',
    age : 2030 - 1992,
    job : 'programmer',
    friends : ['Mukul', 'Ram', 'Sham']
};

console.log(myObject.age); //Dot
console.log(myObject.lastName); //Dot
console.log(myObject.job); //Dot
console.log(myObject['firstName']); //Bracket

//Why use bracket notation?
const nameKey = 'Name';
console.log(myObject['first' + nameKey]);
console.log(myObject['last' + nameKey]);

//From user
const interestedIn = prompt('What do you want to know about me? write in firstName, lastName, age, job, friends: ');

if (myObject[interestedIn]){
    console.log(myObject[interestedIn]);
}else{
console.log('Wrong Request! Choose between firstName, lastName, age, job and friends');
}

//inserting properties into object
myObject.location = 'Kolkata'; //Dot
myObject['twitter'] = '@anilroy'; //Bracket
console.log(myObject);

//Challenges
//Show in console dynamically this: "Anil has 3 frineds and Mukul is the best"
console.log(`${myObject.firstName} has ${myObject.friends.length} friends  and ${myObject.friends[0]} is the best.` );
