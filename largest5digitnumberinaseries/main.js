function solution(digits){
  //console.log(digits.indexOf("99890"))
  let numArr=[]
  digits.split("").forEach(el=>numArr.push(parseInt(el)))
  let max =0, curMaxV=0, maxT="",previ=0

  for(let i=0;i<1000;i++){  
    curMaxV = Number(numArr.slice(i-5,i).join(""));
    if(curMaxV>max){ 
                    max=curMaxV
                  }
  }
  return max
}
