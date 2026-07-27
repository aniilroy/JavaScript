// Debugging the code using console and breakpoints

const measureKelvin = function (){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //FIX here by adding 'Number'
        value: Number(prompt ('Enter in Degree Celsius : '))
    };

    console.log(measurement);
    console.table(measurement);

    //console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());