function high(x){
    let newarr=[]
    let finalNum=0
    let sorted=x.split(" ")
    for(let i=0;i<sorted.length;i++){
      let sum=0
      let splitWord=sorted[i].split("")
      
      for(let j=0;j<splitWord.length;j++){
        sum+= parseInt(splitWord[j], 36) - 9;  
            if(j==splitWord.length-1){
             newarr.push(sum)
            
            } 
        } 
    }
    for(let i=0;i<newarr.length;i++){  
      if (finalNum < newarr[i]) {
          finalNum = newarr[i];
          }
    }
    
    return sorted[newarr.findIndex(el => el ==finalNum)]
}