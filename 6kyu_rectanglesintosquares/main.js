function sqInRect(lng, wdth){
  
  let answer=[]
  
  if (lng===wdth){
   return null
 }
for (let i=0;lng > 0 && wdth > 0;i++){
    answer.push(lng > wdth ? wdth : lng)
    lng > wdth ? lng -= wdth : wdth -= lng
  
  }
  
  r
