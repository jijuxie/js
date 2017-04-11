'use strict'
var i=1;
var j=2;
function a(num1,num2){
return num1+num2;
}
function b(){
    return a(i,j);
}
module.exports={
    a:a,
    b:b
};