function cacheFunction(cb) {
          var cache = new Object();
          function oneTime(a) {
                    if (!cache.hasOwnProperty(a)) { cache[a] = cb(a);
                    //console.log("CallBack Invoked");
                    return cb(a); }
                    else { return cache[a]; }
          }
          return oneTime;
}



export { cacheFunction };