function partsSums(ls) {
   let sum=0
   let answer=[]
   if(ls.length<1){
     return [0]
   }
  
   for(let i=0;i<=ls.length;i++){
     if(i==0){
       answer.unshift(0)
     }
     else{sum+=ls[ls.length-i]
     answer.push(sum)}
   }
  
  return answer.reverse()
}
