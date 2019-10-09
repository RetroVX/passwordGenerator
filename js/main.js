import passwordGenerator from "./passwordGenerator.js";

// create the password generator
const passGen = new passwordGenerator();

// get all ids

const password = document.getElementById('password');

const passwordLength = document.getElementById('passwordLength');
// set the default value for the password length
passwordLength.value = 16;

// checkboxs
const lowercase = document.getElementById('lowerCase');

const uppercase = document.getElementById('upperCase');

const symbol = document.getElementById('symbols');

const number = document.getElementById('numbers');


const button = document.getElementById('btn');

button.addEventListener('click', function(){
    // update options depending on checkboxs checked value and set password length
    passGen.setOptions({
        passwordLength: passwordLength.value,
        includeLowerCase: lowercase.checked,
        includeUpperCase: uppercase.checked,
        includeSymbols: symbol.checked,
        includeNumbers: number.checked
    });
    // display password
    password.textContent = passGen.generate();
});

// generate password on startup using default options
password.textContent = passGen.generate();
