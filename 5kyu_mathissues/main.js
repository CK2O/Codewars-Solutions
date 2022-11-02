

Math.round = function(number) {
  let absNum=number.toFixed(0)
  return Number(absNum); // TODO: fix this
};

Math.ceil = function(number) {
  let absNum=number.toFixed(0)
  
  let remainder=number%1
  if(remainder==0){return number}
  if(remainder>=.5){
    return Number(number.toFixed(0))
  }
  else if(remainder<0.5){
    return Number(absNum)+1;
  }
  
};

Math.floor = function(number) {
  let absNum=number.toFixed(0)
 
  
  let remainder=number%1
  if(remainder==0){return number}
  if (remainder >0){
 
    return Number((number-remainder).toFixed(0))
  }
  else return Number((number).toFixed(0)); // TODO: fix this

};
