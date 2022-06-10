function twoSum(numbers, target) {
    let answer=[]
    for(let i=0;i<numbers.length;i++){
      if(numbers.includes(target-numbers[i])&&((2*numbers[i])!==target)){
        answer.push(i)
        }
      else if(((2*numbers[i])==target) && numbers.filter(el=>el==numbers[i]).length>1){
        answer.push(i)
      }
    }
    return answer
  }