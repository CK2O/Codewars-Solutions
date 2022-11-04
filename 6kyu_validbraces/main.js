function validBraces(braces){
    let arr= braces.split("")
    let oBracks=["(","[","{"], cOBracks=[],cBracks=[")","]","}"];
    
    if ((arr.filter(el=>el==`[`).length!=arr.filter(el=>el==`]`).length)||
        (arr.filter(el=>el==`(`).length!=arr.filter(el=>el==`)`).length)||
        (arr.filter(el=>el==`{`).length!=arr.filter(el=>el=="}").length)){
        return false
                      }
    for(let i=0;i<arr.length;i++){
     // console.log(i,"open Bracket?",arr[i],oBracks.includes(arr[i]))
     // console.log(i,"closed Bracket?",arr[i],cBracks.includes(arr[i]))
      
      

      if(oBracks.includes(arr[i])){
        cOBracks.push(arr[i])
       // console.log("open bracket add to the list",cOBracks)
      }   //if the current element is the same index as the last element of the open bracket in oBracks
      
    
      
      else if((cBracks.includes(arr[i]))&&(cBracks.findIndex(el=>el==arr[i])===oBracks.findIndex(el=>el==cOBracks[cOBracks.length-1]))){
       //   console.log("CLOSED BACKET LOOOP BBBEEEEP")
         // console.log(`${cOBracks[cOBracks.length-1]} pairs with ${arr[i]} is ${(cBracks.findIndex(el=>el==arr[i])===oBracks.findIndex(el=>el==cOBracks[cOBracks.length-1]))}`)
         // console.log(cOBracks)
        cOBracks.pop()
        //console.log("becomes",cOBracks)
       }
      

      
      }
  
      if(cOBracks.length==0){
        return true
      }
      else return false
    
     
  }
