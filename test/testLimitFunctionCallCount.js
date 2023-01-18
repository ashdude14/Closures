import * as ash from "../limitFunctionCallCount.js"
var callFun = ash.limitFunctionCallCount(cb, 2);
var x1=callFun();
var x2=callFun();
var x3=callFun();
console.log(x1);
console.log(x2);
console.log(x3);
function cb()
{
    return (`invoked cb `);
}



