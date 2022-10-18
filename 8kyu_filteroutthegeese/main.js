function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let answer=[]
  for (let i=0;i<birds.length;i++){
        if (geese.filter(el=>el==birds[i]).length>0){
    birds.splice(i,1)
      i-=1
      }
  }
  return birds
  
};
