var maxSequence = function(arr){
  
  let sum=0
  if(arr.every(el=>el<0)||arr.length==0){
    return 0
  }
  if(arr.every(el=>el<0)){
    sum = arr.reduce((tV, cV) => tV + cV)
    
    }
  else {
    let maxSum=0
    for(let i=0;i<arr.length;i++){
      
      for(let j=i+1;j<=arr.length;j++){
      let testSum=arr.slice(i,j).reduce((tV, cV) => tV + cV)
      
        if(testSum>maxSum) { 
          maxSum=testSum; 
      
        }
      }
    }
    return maxSum
  }    
    
    
  

  
  return sum
  
}// ...
