function productFib(prod){
    let fibArr=[0,1,1]
    let result=[]
    for(let i=2;fibArr[i]<prod;i++){
      fibArr.push(fibArr[i]+fibArr[i-1])
      if(fibArr[i]*fibArr[i-1]===prod){
        result.push(fibArr[i-1],fibArr[i],true)
        return result
        }
      else if (fibArr[i]*fibArr[i-1]>prod){
        result.push(fibArr[i-1],fibArr[i],false)
        return result
      }
    }
  }