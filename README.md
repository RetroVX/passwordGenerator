# Password Generator

Generate custom passwords using window.crypto

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


### Demo

[https://retrovx.github.io/passwordGenerator](https://retrovx.github.io/passwordGenerator)

## Getting Started

### Install

```
git clone https://github.com/RetroVX/passwordGenerator.git
```
Or download from Zip

Then serve on your favourite local web server :)  

### Usage
```javascript
import passwordGenerator from "./passwordGenerator.js";

const password = new passwordGenerator().setOptions({
    passwordLength: 32,
    includeLowerCase: true,
    includeUpperCase: true,
    includeSymbols: false,
    includeNumbers: true
});

password.generate();
```

#### Generate a new password
```javascript
password.generate();
```

#### Edit options for generating a password
You can add/remove symbols, numbers, lowercase and uppercase letters. You can also change the length of the password
```javascript
// these are the default settings
password.setOptions({
    passwordLength: 16,
    includeLowerCase: true,
    includeUpperCase: true,
    includeSymbols: true,
    includeNumbers: true
});
```