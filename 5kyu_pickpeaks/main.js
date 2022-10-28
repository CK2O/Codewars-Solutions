function pickPeaks(arr){
  
  
  let obj={
    peaks:[],
    pos:[]
  }
  
  for(let i=0;i<arr.length;i++){
  
    if ((arr[i]>arr[i-1]&&arr[i+1]<arr[i])){
      
      obj.pos.push(i);
      obj.peaks.push(arr[i]);
      
    }
    else if(arr[i]==arr[i+1]&&arr[i-1]<arr[i]){
            
          if(arr[i+2]==arr[i]&&arr[i+3]<arr[i]){
              console.log("dong")
              obj.pos.push(i);
              obj.peaks.push(arr[i])
            }
        else {
          
          let section=arr.slice(i,arr.length);
          
          for (let j=0;j<section.length;j++){
            
            if (section[j]==arr[i]&&section[j+1]>arr[i]){
             
              break
            }
            else if (section[j]==arr[i]&&section[j+1]<arr[i]){
             
               obj.pos.push(i);
              obj.peaks.push(arr[i])
              i+=j
              break
            }
          }
        }
  }
}
  
  return obj
}
