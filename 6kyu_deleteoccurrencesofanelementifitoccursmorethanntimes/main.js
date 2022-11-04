function deleteNth(arr,n){
  let sum=0
  let newArr=[]
  for(let i=0;i<arr.length;i++){
    if (newArr.filter(el=>el==arr[i]).length<n){
    newArr.push(arr[i])
    }
  }
   
  
  return newArr
}
