
function duplicateLetters(args) {
  let char_map = {}
  for(let char of args ) {
    if(Object.keys(char_map).includes(char) ){
      char_map[char] += 1 
    }else{
      char_map[char] = 1
    }
  }
  let max_frequency = Math.max(...Object.values(char_map))
  
  return max_frequency > 1 ? max_frequency : false;
}
export {
  duplicateLetters,
};
