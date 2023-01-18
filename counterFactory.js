function counterFactory()
 {
          let counter=100;
          let obj = {
                    increment : function() 
                    {
                      return counter+=1;
                    },
                     decrement : function()
                    {
                       return counter-=1; 
                    }
                  };
    return obj;
 }

export {counterFactory};
      