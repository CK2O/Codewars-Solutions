function sortArray(array) {
  let oddArr=array
  let indexEven=[]
  
  for (let i=0;i<array.length;i++){
    if(array[i]%2!==0){
      oddArr.push(array[i])
    }
    else (indexEven.push[i])
  }
  let sorted = oddArr.sort((a,b)=> a-b)
  console.log(array)
  for (let i=0;i<array.length;i++){
    if(array[i]%2!==0){
      array[i]=sorted[i]
    }
  }
  return array
}