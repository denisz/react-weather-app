// Convert from Kelvin to Fahrenheit	℉=((K-273.15)*1.8)+32
// Convert from Kelvin to Celsius	    ℃=K-273.15

const Kelvin2F = (k) => ((k-273.15)*1.8)+32;
const Kelvin2C = (k) => k-273.15;

export { Kelvin2F, Kelvin2C }
