// your implementation

const isObject = (obj) => {
  return typeof(obj) === 'object' &&  !Array.isArray(obj) && obj !== null;
}

const objectType = (obj) => {
  if (Array.isArray(obj)){
    return 'array';
  }
  else if(obj === null){
    return 'null';
  }
  else if(obj === undefined) {
    return 'undefined';
  }else{
    return typeof obj;
  }

}

const map = (object, callback) => {
    
  if (!isObject(object)) {
    throw new TypeError(`Expected object found ${objectType(object)}`)
  }
    const result = {};
    for(const [key,val] of Object.entries(object)){
      
      const [newKey, newVal] = callback([key, val])
      result[newKey] = newVal
    }
    return result;
}

// let l = {a:1, b:2 }
// const res = map('adasd', ([key, val]) => ['xx'+ key, val*2 ] )  

// console.log(res)

// const res = l.map((value, index) => {
//   console.log(value , index)
//   return value;
// })







export {
  map
};
