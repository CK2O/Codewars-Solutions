function twoSort(s) {
let sorted=s.sort()
let answer=""
for (let i=0;i<sorted[0].length;i++){
  answer+=(sorted[0].charAt(i))
  answer+="***"
    
 
}
  return answer.slice(0, answer.length - 3)
}
