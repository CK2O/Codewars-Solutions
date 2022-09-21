function titleCase(title, minorWords) {
    if(title==""){return""}
    let split=title.toLowerCase().split(" ")
     
    if(minorWords==undefined){
      for (let i=0;i<split.length;i++){
      split[i]=split[i].replace(split[i].charAt(0),split[i].charAt(0).toUpperCase())
        }
      return split.join(" ")
      }
   
    let minor=minorWords.toLowerCase().split(" ")
      
    for (let i=0;i<split.length;i++){
      if(minor.find(el=>el==split[i])!=split[i]||i==0){  
      split[i]=split[i].replace(split[i].charAt(0),split[i].charAt(0).toUpperCase())
      }
    }
    return split.join(" ")
  }