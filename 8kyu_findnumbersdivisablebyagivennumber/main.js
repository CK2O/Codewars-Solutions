function divisibleBy(numbers, divisor){
    let newarr=[]
    for(let i=0;i<numbers.length;i++){
      if(numbers[i]%divisor==0){
        newarr.push(numbers[i])
        }
      }
    return newarr
  }