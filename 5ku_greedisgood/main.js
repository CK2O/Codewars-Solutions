function score( dice ) {
    const count = {}
    let sum=0
    dice.forEach(el => {
    count[el] = (count[el] || 0) + 1;
    });
  
  for (const [key, value] of Object.entries(count)) {
    if (key==1 &&(value<3)){
    sum+=100*value
    }
    else if(key==5 && (value<3)){
    sum+=50*value
      }
    
    if (value==3){
      if (key==1){sum+=1000}
      else {sum+= key*100
        }
      }
    else if (value>3){
      if (key==1){sum+=1000+100*(value-3)}
      else if (key==5) {sum+= 50*(value-3)
        }
      else (sum+=key*100)
      }
    }
  return sum
  }
    