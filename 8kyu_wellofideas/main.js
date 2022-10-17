function well(x){ 
  if(x.filter(el=>el=="good").length>2){
    return "I smell a series!"
  }
  else return x.includes("good") ? "Publish!":"Fail!"
}
