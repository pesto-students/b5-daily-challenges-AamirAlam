// import { isString } from "util";

function abbreviateString(str) {

    if (typeof str !== 'string'){
        throw new TypeError('Invalid argument! it must be a string');
    }
    
    str = str.trim()
    if (str.indexOf(' ') < 0 ) {
        return str;    
    }else{
        const firstWord = str.slice(0,str.indexOf(' '))
        const lastWord =  str.slice(str.lastIndexOf(' ')+1, str.length )
        return  firstWord+" "+lastWord[0].toUpperCase()+"."
    }
}

export { abbreviateString };
