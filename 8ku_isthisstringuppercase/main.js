String.prototype.isUpperCase = function() {
    let letters=this.split("")
    for(let i=0;i<letters.length;i++){
      if(letters[i]!==(letters[i].toUpperCase())){
         return false
         }
      else continue
    }
    return true
  }