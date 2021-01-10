// your implementation

/**
 * 
 * @param {*} object
 * @description Utility function to check if provided parameter is a plan javascript object or not 
 */

const isObject = (object) => {
  return typeof(object) === 'object' &&  !Array.isArray(object) && object !== null;
}

/**
 * 
 * @param {*} object
 * @description Utility function to classify provided parameter type among 'object', 'array', 'string', 'number', 'null', 'undefined', 'string'
 */

const objectType = (object) => { 
  if (Array.isArray(object)){
    return 'array';
  }
  else if(object === null){
    return 'null';
  }
  else if(object === undefined) {
    return 'undefined';
  }else{
    return typeof object;
  }

}

/**
 * 
 * @param {*} object 
 * @param {*} callback 
 * @description Emulate key value pair of an object based on the provided callback function
 */

const map = (object, callback) => {
    
  if (!isObject(object)) {
    throw new TypeError(`Expected 'object' found '${objectType(object)}'`)
  }
    const result = {};
    for(const [key,val] of Object.entries(object)){
      
      const [newKey, newVal] = callback([key, val])
      result[newKey] = newVal
    }
    return result;
}

/**
 * 
 * @param {*} object 
 * @param {*} callback 
 * @description Filter out object properties based on callback condition on object key or value
 */

const filter = (object, callback) => {
  if (!isObject(object)) {
    throw new TypeError(`Expected 'object' found '${objectType(object)}'`);
  }
  const result = {}
  for( const [key, value] of Object.entries(object)){

    if(callback([key, value])){
      result[key] = value;
    }
  }
  return result;

}

/**
 * 
 * @param {*} object 
 * @description Invert object key:value onto value:key
 */

const invert = (object) => {
  if(!isObject(object)) {
    throw new TypeError(`Expected 'object' found '${objectType(object)}'`);
  }
  const result = {};
  for( const [key, value] of Object.entries(object)){
      result[value] = key
  }
  return result;
}


/**
 * 
 * @param {*} objects 
 * @description Utility function to check if an array is of objects or not
 */

const isObjectArray = (objects) => {
  let res = {flag:true,message:''}
  for (const object of objects) {
    if(!isObject(object)){
      res = {flag:false, message:`Expected 'objects' found '${objectType(object)}' in array element`}
      break;
    }
  }
  return res;
}

const merge = (objects) => {
  
  if (!isObjectArray(objects).flag){
    throw new TypeError(isObjectArray(objects).message);
  }

  let result = {};
  const allObjectProperties = []
  for (const object of objects) {
    allObjectProperties.push(...Object.entries(object));
  }

  for (const [key,value] of allObjectProperties) {
    result[key] = value;
  }

  return result;
  
}


/**
 * 
 * @param {*} object 
 * @param {*} callback
 * @description  - Return 'true' if callback condition met true for all keys or values present in the object
 *               -  'all' is implementation of Array.prototype.every for objects instead of arrays
 * 
 */

const all = (object, callback) => {

  if (!isObject(object)) {
    throw new TypeError(objectType(object));
  }
  let result = true;
  for (const [key,val] of Object.entries(object)) {
      if( !callback([key, val])){
        result = false;
        break;
      }
  }
  return result;
}

/**
 * 
 * @param {*} object 
 * @param {*} callback
 * @description  - Return 'true' if callback condition met 'true' for at least one key or value present in the object
 *               - 'Some' is implementation of Array.prototype.some for objects instead of arrays
 * 
 */

const Some = (object, callback) => {

  if (!isObject(object)) {
    throw new TypeError(objectType(object));
  }
  let result = false;
  for (const [key,val] of Object.entries(object)) {
      if(callback([key, val])){
        result = true;
        break;
      }
  }
  return result;
}


export {
  map,
  filter,
  merge,
  invert,
  all,
  Some
};
