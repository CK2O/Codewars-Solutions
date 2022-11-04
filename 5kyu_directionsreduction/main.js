function dirReduc(arr){
  console.log(arr, arr.length)
 
  
  function cleanDirection(arr){
    console.log("it worked")
  let directions=[]
  for (let i=0;i<arr.length;i++){
    console.log(arr[i],arr[i+1],i) 
    if((arr[i]=="NORTH"&&arr[i+1]=="SOUTH")||
       (arr[i]=="SOUTH"&&arr[i+1]=="NORTH")||
       (arr[i]=="EAST"&&arr[i+1]=="WEST")||
       (arr[i]=="WEST"&&arr[i+1]=="EAST"))
       {
      i+=1
    }
    
    else {
      directions.push(arr[i])
    }
  }
    return directions
 }
     
let firstRound= cleanDirection(arr)    
    
    
    
    

return cleanDirection(firstRound)

  
}
    
