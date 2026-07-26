//Functions for reuse the codes

function logger(){
    console.log('My name is Anil');
}

//Calling /running/invoking the functions

logger();
logger();
logger();
logger();

function fruitProcessor( apples , oranges){
const juice = `Juice with ${apples} apples and ${oranges} oranges,`;
return juice;
}

const fruitJuice = fruitProcessor( 5, 3);
console.log(fruitJuice);

//function calling other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}
function juiceMachine(apples, oranges){
const applesPieces = cutFruitPieces(apples);
const orangesPieces = cutFruitPieces(oranges);

const juice = `Juice with ${applesPieces} apples pieces and ${orangesPieces} oranges pieces.`;

return juice;
}
console.log(juiceMachine(2, 3));
