function isValidIP(str) {
    if (str.includes(" ")||str.includes("\n")||str.includes("e")){
        return false
        }
    let split=str.split(".")
  
  if(split.length!=4){
    return false;
    }
  for(let i=0;i<split.length;i++){
    if(split[i]/1!=split[i] || 
       split[i].length<1||
       (split[i].charAt(0)=="0" && split[i].length>1)||
       (Number(split[i])>255||Number(split[i])<0)){
      return false
      }
    }
  return true
  }