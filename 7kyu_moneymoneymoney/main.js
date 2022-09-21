function calculateYears(P, I, T, D) {
    let sum=P
    let answer=0
    for (let i=1;i<(D-P);i++){
      sum+=(sum*I-sum*I*T)
      if (sum>=D){
        return answer+=i
      }
      else continue
    }
    return answer
  }