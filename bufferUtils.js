function stringToBuffer(str){
    return Buffer.from(str,'utf8');
}

function bufferToString(bufferContent){
    return bufferContent.toString();
}

function reverseBuffer(bufferContent){
    return bufferContent.reverse();
}

function bufferToUppercase (bufferContent){
    return bufferContent.toString().toUpperCase();
}

function lengthBuffer(bufferContent) {
    return bufferContent.length;
}

module.exports = {
    stringToBuffer,
    bufferToString,
    reverseBuffer,
    bufferToUppercase,
    lengthBuffer
}

