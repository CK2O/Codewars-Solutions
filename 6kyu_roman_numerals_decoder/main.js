function solution (roman) {
  //code not dry will look at other solutions to improve
  let splitRomnan=roman.split("")
  let sum=0
  for (let i=0;i<splitRomnan.length;i++){
    if (splitRomnan[i]==="M"){
      sum+=1000
      if(splitRomnan[i-1]==="C"){
        sum-=200
      }
    }
    else if (splitRomnan[i]==="D"){
      sum+=500
      if(splitRomnan[i-1]==="C"){
        sum-=200
      }
    }
    else if (splitRomnan[i]==="C"){
      sum+=100
      if(splitRomnan[i-1]==="X"){
        sum-=20
      }
    }
    else if (splitRomnan[i]==="L"){
      sum+=50
      if(splitRomnan[i-1]==="X"){
        sum-=20
      }
    }
    else if (splitRomnan[i]==="X"){
      sum+=10
      if(splitRomnan[i-1]==="I"){
        sum-=2
      }
    }
    else if (splitRomnan[i]==="V"){
      sum+=5 
      if(splitRomnan[i-1]==="I"){
        sum-=2
        }
    }
    else if (splitRomnan[i]==="I"){
      sum+=1
    }
    
  }
  
  return sum;
}
