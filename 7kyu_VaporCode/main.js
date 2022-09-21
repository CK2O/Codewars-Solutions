function vaporcode(string) {
    let split=string.split("")
    let newstring=""
    for (let i=0;i<string.length;i++){
      if(split[i]!=" "){
      newstring+=split[i].toUpperCase()+"  "
        }
    }
    return newstring.trim()
  }