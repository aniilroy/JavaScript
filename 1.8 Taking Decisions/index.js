// taking decisions if - else control statements
const ageSamira = 12;
const isAdult = ageSamira >= 18;

if(isAdult){
console.log(`Semira is an adult girl!`);
} else{
    const yearLeft = 18 - ageSamira;
    console.log(`Semira is to young , wait another ${yearLeft} years.`);
}

//century determine
const birthYear = 1991;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

