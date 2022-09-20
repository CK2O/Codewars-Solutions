function dontGiveMeFive(start, end){
    let count=0
    for (let i=start;i<=end;i++){
      let string=i.toString()
      if(string.includes(5)!=true){
        count+=1
      }
    }
    return count;
  }