function findMultiples(integer, limit) {
  let ans=[]
  for(let i =1;i<=Math.floor(limit/integer);i++){
      ans.push(integer*i)
    }
  
  return ans
}
