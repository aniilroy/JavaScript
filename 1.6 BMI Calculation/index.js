// bmi calculation 
const massAnil = 67;
const heightAnil = 1.80;

const massRiya = 60;
const heightRiya = 1.50;

const BMIAnil = massAnil / (heightAnil * heightAnil);
const BMIRiya =massRiya / heightRiya ** 2;

console.log(BMIAnil, BMIRiya);
console.log(BMIAnil > BMIRiya);
