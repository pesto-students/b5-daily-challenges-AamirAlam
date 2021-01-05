
function duplicateLetters(letters) {
  const charMap = {}
  for(let char of letters ) {
    if(Object.keys(charMap).includes(char) ){
      charMap[char] += 1 
    }else{
      charMap[char] = 1
    }
  }
  const maxFrequency = Math.max(...Object.values(charMap))
  
  if (maxFrequency > 1) {
    return maxFrequency;
  }else{
    return false;
  }
}
export {
  duplicateLetters,
};
