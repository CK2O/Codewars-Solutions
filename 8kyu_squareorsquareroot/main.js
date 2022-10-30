function squareOrSquareRoot(array) {
  let newArr=[]
  for(let i=0;i<array.length;i++){
    let sqrt=Math.sqrt(array[i])
    array[i]%sqrt==0? newArr.push(sqrt):newArr.push(array[i]**2)
  }
  return newArr;  
}
