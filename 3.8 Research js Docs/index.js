//research the js documets from mdn, google and stackoverflow

// Make a smart home thermometer. 
//Task: Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error

const temperatures = [3, -5, -7, -2, -6, 'error', 5, 12, 13, 19, 17, 9, 11, 5, 10];

const calTempAmplitude = function (temps){
    let max = temps [0];
    let min = temps [0];

    for (let i = 0 ; i < temps.length ; i++){
        const curTemp = temps [i];
        if (typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max , min);
    return max - min;
}


const amplitude = calTempAmplitude (temperatures);

console.log(amplitude);

// Now concate two arrays
 const fistArray = [10, 1, 5, 3 , 9, 2];
 const secondArray = ['cat', 'dog', 'rabbit', 'fish'];
 const mergeArray = fistArray.concat(secondArray);
 console.log(mergeArray);