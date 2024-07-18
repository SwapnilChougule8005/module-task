const {stringToBuffer,bufferToString,reverseBuffer,bufferToUppercase,lengthBuffer} = require('./bufferUtils');

let bufferValue = stringToBuffer("hello");
console.log(bufferValue);

let stringValue = bufferToString(bufferValue)
console.log(stringValue);

let reverse = reverseBuffer(bufferValue);
console.log(reverse);

let UpperCase = bufferToUppercase(bufferValue);
console.log(UpperCase);

let bufferLength = lengthBuffer(bufferValue);
console.log(bufferLength);

