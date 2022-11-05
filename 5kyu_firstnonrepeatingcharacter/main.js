function firstNonRepeatingLetter(s) {
  if(!s){return""}
  let split=s.toLowerCase().split("")
  
  for(let i=0;i<split.length;i++){
    if(split.filter(el=>el==split[i]).length<2){
      return s.charAt(i)
    }
 
}
  return ""
}
