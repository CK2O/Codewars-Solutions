function toWeirdCase(string){
    let splitString=string.split(" ")
    let weirdString=""
    for(let j=0;j<splitString.length;j++){
      let currentWord=splitString[j].split("")
      for(let i=0;i<currentWord.length;i++){
        if(i%2==0 || currentWord[i-1]===" "){
        weirdString += currentWord[i].toUpperCase()
        }
        else weirdString += currentWord[i]
       }
      if(splitString.length>1 && j!=splitString.length){
        weirdString+=" "
      }
    }
  
    return weirdString.trim()
  }