function reverseLetter(str) {
 let split= str.split(""), string="ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz",answer=[]
 
 for(let i=0;i<split.length;i++){

   if(string.includes(split[i])) { 
     answer.push(split[i])
   }
 }
  return answer.reverse().join("")
  
}
