/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

const input = document.querySelector(".input__input");
const convertBtn = document.querySelector(".input__button");
const lengthOutput = document.getElementById("output-length");
const volumeOutput = document.getElementById("output-volume");
const massOutput = document.getElementById("output-mass");

const feetConversionRate = 3.281;
const gallonConversionRate = 0.264;
const poundConversionRate = 2.204;

function convert(amount) {
    const num = Number(amount);
    const feetConversion = (num * feetConversionRate).toFixed(3);
    const metersConversion = (num / feetConversionRate).toFixed(3);
    const gallonsConversion = (num * gallonConversionRate).toFixed(3);
    const litersConversion = (num / gallonConversionRate).toFixed(3);
    const kilogramsConversion = (num * poundConversionRate).toFixed(3);
    const poundsConversion = (num / poundConversionRate).toFixed(3);
    
    lengthOutput.textContent = `${num} meters = ${feetConversion} feet | ${num} feet = ${metersConversion} meters`;
    
    volumeOutput.textContent = `${num} liters = ${gallonsConversion} gallons | ${num} gallons = ${litersConversion} liters`;
    
    massOutput.textContent = `${num} kilos = ${kilogramsConversion} pounds | ${num} pounds = ${poundsConversion} kilos`;
}

convertBtn.addEventListener("click", () => {
    convert(input.value);
});