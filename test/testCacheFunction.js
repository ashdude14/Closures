import * as ash from '../cacheFunction.js'
var funCall=ash.cacheFunction(cb);
console.log(funCall(4));
console.log(funCall(2));
console.log(funCall(4));
console.log(funCall(3));
console.log(funCall(3));
console.log(funCall(3));
function cb(x)
{
          return x*x;
}
