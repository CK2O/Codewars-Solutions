multiplicationTable = function(size) {
    let answer=[]
    for(let i=1;i<=size;i++){
      let cur=[]
      for(let j = 1; j<=size; j++){
      cur.push(i*j)
      }
      answer.push(cur)
    }
    return answer
    }