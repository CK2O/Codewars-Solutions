function factorial(n){
    if(n==0){
      return 1
    }
    else if(n>12||n<0){
      return ValueError
    }
  let sum =1
  for (let i=1;i<=n;i++){
    sum*=i
    }
  return sum
    }