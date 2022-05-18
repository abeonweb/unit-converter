let amount = 0;
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");


function lengthCalc() {
    let feetAmt = (amount * 0.3048).toFixed(3);
    let meterAmt = (amount * 3.28084).toFixed(3);
    
    length.textContent = amount + " meters = " + feetAmt + " feet | " + amount + " feet = " + meterAmt+" meters";
}

function volumeCalc() {
    let gallonAmt = (amount * 0.219969).toFixed(3);
    let literAmt = (amount * 4.54609).toFixed(3);
    volume.textContent = amount + " liters = " + gallonAmt + " gallons | " + amount + " gallons = " + literAmt+" liters";
}

function massCalc() {
    let poundAmt = (amount * 2.20462).toFixed(3);
    let kiloAmt = (amount * 0.453591830542594).toFixed(3);
    mass.textContent = amount + " kilos = " + poundAmt + " pounds | " + amount + " pounds = " + kiloAmt+" kilos";
}

function update() {
    amount = document.querySelector("#amount").value;
    console.log(amount);
    lengthCalc();
    volumeCalc();
    massCalc();
}