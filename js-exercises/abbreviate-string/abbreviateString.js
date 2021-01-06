// import { isString } from "util";

function abbreviateString(fullName) {

    if (fullName == null) {
        throw new TypeError(`Expected string but found null`);
    }
    if (typeof(fullName) !== 'string'){
        throw new TypeError(`Expected string but found ${typeof(fullName)}`);
    }
    
    
    const allWords = fullName.split(' ')
    if (allWords.length === 1) {
        return fullName;    
    }else{
        const firstWord = allWords[0]
        const lastWord =  allWords[allWords.length-1]
        return  firstWord+" "+lastWord[0].toUpperCase()+"."
    }
}
export { abbreviateString };
