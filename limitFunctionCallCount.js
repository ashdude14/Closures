function limitFunctionCallCount(cb, n) {
           let var1= n;
          function king () {
           if(var1-->0){
            return cb()
           }
           else{
           return null;
           }
          }
          return king;
        }
       
export { limitFunctionCallCount }; 