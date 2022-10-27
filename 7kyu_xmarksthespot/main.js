const xMarksTheSpot = (input) => {
 let sum=0
  for(let i=0;i<input.length;i++){ //test for >1 x
   sum+=input[i].filter(el=>el=="x").length
    
 }
   if (sum!=1){
      return []
    }
  for(let i=0;i<input.length;i++){
  
    
    if(input[i].filter(el=>el=="x")==1){
    
      return [i]
    }
    else if(input[i].filter(el=>el=="x").length==1){
   
      return [i,input[i].findIndex(el=>el=="x")]
  }

  }
        if(input.filter(el=>el=="x").length!=1){
    
    return []
  }
 
}
