const alphabeticShift = string => {

  if (typeof string != 'string'){
     throw 'Invalid input! It must be a string'
  }
  const shiftedString = [];
  for(const char of string){

    if (char === 'z' || char === 'Z') {
      shiftedString.push( String.fromCharCode( (char.charCodeAt() +1) - 26 ))
    }
    else{
      shiftedString.push( String.fromCharCode(char.charCodeAt() +1))
    }
  }
  return shiftedString.join('');
};

export { alphabeticShift };
