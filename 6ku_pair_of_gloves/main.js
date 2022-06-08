function numberOfPairs(gloves){
    let uniqueGloves={}
       for (var i = 0; i < gloves.length; i++) {
          uniqueGloves[gloves[i]] = 1 + (uniqueGloves[gloves[i]] || 0);
       };
       
    
    let sum=0
    for (const [key, value] of Object.entries(uniqueGloves)) {
         console.log(`${key}: ${value}`);
         if (value>1){
             sum+=Math.floor(value/2)
         }
        }
        return sum
}

