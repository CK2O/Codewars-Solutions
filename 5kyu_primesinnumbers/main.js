function primeFactors(n){
  const primeF = [];
  let div = 2;
  while (n >= 2) {
    if (n % div == 0) {
      primeF.push(div);
      n = n / div;
    } else {
      div++;
    }
  }
  let ans =""
  for (let i=0;i<primeF.length;i++){
    let x =primeF[i]
    if(primeF.filter(el=>el==x).length>1 && x!=primeF[i-1]){
       ans+=`(${x}**${primeF.filter(el=>el==x).length})`
      }
    else if(primeF.filter(el=>el==x).length==1 && x!=primeF[i-1]){
      ans+=`(${x})`}
    }
  return ans;


}
