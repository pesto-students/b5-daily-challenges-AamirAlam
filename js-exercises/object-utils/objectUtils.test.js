import { map, filter, merge, invert, all, Some, isObject, isObjectArray, getObjectType } from './objectUtils';

// write your own test cases


describe('isObject function test', () => {
    it('Should return boolean', () => {
        expect(isObject("hello")).toEqual(false)
        expect(isObject(true)).toEqual(false)
        expect(isObject({})).toEqual(true)
        expect(isObject({a:2,b:3})).toEqual(true)
        expect(isObject({a:2,b:3,c:[1,2]})).toEqual(true)
        expect(isObject([])).toEqual(false)
        expect(isObject([1,2,3])).toEqual(false)
        expect(isObject(null)).toEqual(false)
        expect(isObject(undefined)).toEqual(false)
        expect(isObject(123)).toEqual(false)
        expect(isObject(-1)).toEqual(false)
        expect(isObject(() => {})).toEqual(false)
    })
})

describe('isObjectArray', () => {
    it('Should return flag to false with correct message if input is not an array', () => {
        expect(isObjectArray("hello")).toEqual({flag:false, message:"Expected array of 'objects' found 'string'"})
        expect(isObjectArray({})).toEqual({flag:false, message:"Expected array of 'objects' found 'object'"})
        expect(isObjectArray({a:2,b:3})).toEqual({flag:false, message:"Expected array of 'objects' found 'object'"})
        expect(isObjectArray({a:2,b:3,c:[1,2]})).toEqual({flag:false, message:"Expected array of 'objects' found 'object'"})
        expect(isObjectArray(null)).toEqual({flag:false, message:"Expected array of 'objects' found 'null'"})
        expect(isObjectArray(undefined)).toEqual({flag:false, message:"Expected array of 'objects' found 'undefined'"})
        expect(isObjectArray(123)).toEqual({flag:false, message:"Expected array of 'objects' found 'number'"})
        expect(isObjectArray(-1)).toEqual({flag:false, message:"Expected array of 'objects' found 'number'"})
        expect(isObjectArray(() => {})).toEqual({flag:false, message:"Expected array of 'objects' found 'function'"})
    })
    
    it('Should return correct flag and message if input is an array', () => {
        expect(isObjectArray([])).toEqual({flag:true, message:""})
        expect(isObjectArray([1,2,3])).toEqual({flag:false, message:"Expected array of 'objects' found 'number' in array element"})
    })
} )


describe('getObjectType', () => {
    it('Should return correct object type', () => {
        expect(getObjectType("hello")).toEqual('string')
        expect(getObjectType([])).toEqual('array')
        expect(getObjectType({})).toEqual('object')
        expect(getObjectType({a:2,b:3})).toEqual('object')
        expect(getObjectType(null)).toEqual('null')
        expect(getObjectType(undefined)).toEqual('undefined')
        expect(getObjectType(123)).toEqual('number')
        expect(getObjectType(-1)).toEqual('number')
        expect(getObjectType(() => {})).toEqual('function')
    })

} )