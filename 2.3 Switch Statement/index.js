// switch statements
const userInput = prompt('Enter a name of day');
switch(userInput.toLowerCase()){
    case 'monday':
        console.log('Toady is the 1st day of the week.');
        console.log('Start practicing coding today.');
    break;
    case 'tuesday':
        console.log(`Prepare your NIMCET exam.`);
    break;
    case 'wednesday':
        console.log(`Write code examples and practice.`);
    break;
    case 'thursday':
    case 'friday':
        console.log('Records tutorial videos.');
    break;
    case 'saturday' :
        console.log('Practice Your JECA exam');
    break;
    case 'sunday':
        console.log('Enjoy a weekend !');
        break;
    default:
        console.log('Enter a valid day name.')

}

//using if -else
const day = 'monday';

if (day === 'monday'){
    console.log('Its Monday bro!');
     
}else if(day === 'tuesday'){
    console.log('Its Tuesday bro!');

}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Its a holidays for you.');

}else if(day ===  friday){
    console.log('Its your birthday name.');

}else if(day === 'saturday' || day === sunday){
    console.log('Its a weekend day');

}else{
    console.log('Enter a valid day name');
}

