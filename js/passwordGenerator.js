/**
 * @author Conor Irwin <https://github.com/RetroVX> 
 * @license {@link http://opensource.org/licenses/MIT|MIT License}
 * @class passwordGenerator
 * @classdesc
 * Generate custom passwords using window.crypto
 * @version 1.0.0
 * @example
 * 
 * const css = new passwordGenerator().generate();
 */
export default class passwordGenerator {
    constructor() {

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        this.alphabetArray = alphabet.split('');
        this.alphabetToUpperCaseArray = alphabet.toUpperCase().split('');
        this.symbolsArray = '@#$%&!?-+='.split('');
        this.numberArray = '0123456789'.split('');

        this.pickArray = [];

        // default options
        this.setOptions({
            passwordLength: 16,
            includeSymbols: true,
            includeLowerCase: true,
            includeUpperCase: true,
            includeNumbers: true,
        });

        return this;

    }


    /**
     * @name passwordGenerator.generate
     * @type {function}
     * @returns Returns the new password
     * Generates a new password depending on the options set
     */
    generate() {
        const options = this.options;
        const characterList = this.setCharacterList();
        const pick = [];

        for(let i = 0; i < options.passwordLength; i++) {
            // get a random symbol, number, lowercase or uppercase letter
            // depending on which options have been set
            const randomPick = this.randomPickFromArray(characterList);
            // get a random character
            const getPick = this.randomPickFromArray(randomPick);
            pick.push(getPick);
        }

        return pick.join('');
    }


    /**
     * @name passwordGenerator.randomPickFromArray
     * @type {function}
     * @param {Array} array - array to get a random item from
     * @returns Returns the random pick from the array
     * Gets a random item from an array using window.crypto
     */
    randomPickFromArray(array) {
        // Use window.crypto
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        let randomNumber = randomBuffer[0] / (0xffffffff + 1);

        return array[Math.floor(randomNumber * array.length)];
    }


    /**
     * @name passwordGenerator.setOptions
     * @type {function}
     * @param {Object} newOptions - new options object to pass in
     */
    setOptions(newOptions) {
        if(newOptions === undefined || newOptions === null) { newOptions = {}; }

        this.options = {
            passwordLength: newOptions.passwordLength,
            includeSymbols: newOptions.includeSymbols,
            includeLowerCase: newOptions.includeLowerCase,
            includeUpperCase: newOptions.includeUpperCase,
            includeNumbers: newOptions.includeNumbers,
        }

        return this;
    }


    /**
     * @name passwordGenerator.setCharacterList
     * @type {function}
     * @returns Returns characters to use when generating a password
     */
    setCharacterList() {
        const options = this.options;
        const characterArray = [];

        if(options.includeLowerCase) {
            characterArray.push(this.alphabetArray);
        }
        if(options.includeUpperCase) {
            characterArray.push(this.alphabetToUpperCaseArray);
        }
        if(options.includeSymbols) {
            characterArray.push(this.symbolsArray);
        }
        if(options.includeNumbers) {
            characterArray.push(this.numberArray);
        }

        return characterArray;
    }
}