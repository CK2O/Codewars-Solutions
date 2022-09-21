String.prototype.camelCase=function(){
    let split= this.split(" ")
    let camelS=[]
    for(let i=0;i<split.length;i++){
      camelS.push(split[i].replace(split[i].charAt(0), split[i].charAt(0).toUpperCase()))
    }
    return camelS.join("")
  }