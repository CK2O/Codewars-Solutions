function nbDig(n, d) {
    let sum=0
    for (let i=0;i<=n;i++){
      let str= (i**2).toString();
      if (str.includes(d)){
        let calc=str.split("")
        for (let j=0;j<calc.length;j++){
          if(calc[j].includes(d)){  (sum+=1)
          }
          }
        }
    }
  return sum
}