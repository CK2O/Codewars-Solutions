Script:
// write the function isAnagram
var isAnagram = function(test, original) {
  let sortedTest=test.toLowerCase().split("").sort((a,b)=>a.localeCompare(b))
  let sorterdOriginal=original.toLowerCase().split("").sort((a,b)=>a.localeCompare(b))
  for(let i=0;i<test.length;i++){
    if(sortedTest[i]!=sorterdOriginal[i]){
      return false
    }
    
  }
  return true
};
