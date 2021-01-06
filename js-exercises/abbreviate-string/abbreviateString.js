// import { isString } from "util";

function abbreviateString(str) {
    if (typeof str !== 'string'){
        throw 'Invalid argument! it must be a string';
    }
    const allWords = str.split(' ')
    const firstWord = allWords[0];
    const lastWord = allWords[allWords.length-1];

    return firstWord+" "+lastWord[0].toUpperCase()+"."
}

export { abbreviateString };
