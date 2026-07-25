//Logical Operators
 const hasDriversLicense = true;
 const hasGoodVision = true;

 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
    console.log(`You can drive a car!`);
}else{
    console(`You are not eligible to drive.`);
}

const isBored = true;
console.log(hasDriversLicense && hasGoodVision && isBored);

const hasShirt = true;
const hasShoe = true;
if(hasShirt && hasShoe){
    console.log(`Go for the puja pandal hopping.`);
}else{
    console.log(`May be next year`);
}

const hasBike = true;
const hasGF = false;
if(hasBike || hasGF) console.log(`Go a trip with friends..`);
