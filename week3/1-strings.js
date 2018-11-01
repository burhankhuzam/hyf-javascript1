let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
var space = /,/gi;
console.log(myString.replace(space, ' '));