const sequenceSum = (begin, end, step) => {
 if(begin>end){
   return 0
 }
  else {
    let sum=0
    for(let i=begin;i<=end;i++){
      sum+=i
      i+=(step-1)
    }
    return sum
  }
};
