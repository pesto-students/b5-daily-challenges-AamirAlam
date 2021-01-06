const alphabeticShift = string => {
  const shiftedString = [];
  for(let char of string){
    shiftedString.push( String.fromCharCode(char.charCodeAt() +1))
  }
  return shiftedString.join('');
};

export { alphabeticShift };
