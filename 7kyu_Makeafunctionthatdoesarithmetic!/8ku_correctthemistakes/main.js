function correct(string){
    let split= string.split("")
    let newword=[]
    for(let i=0;i<string.length;i++){
    
    if (string[i]=="5"){
      newword+="S"}
    else if (string[i]=="0"){
      newword+="O"}
    else if (string[i]=="1"){
      newword+="I"}
    
    else newword+=string[i]
    }
      
  return newword
  }