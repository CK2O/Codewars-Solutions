var capitals = function (word) {
	let arr=[]
  for(let i=0;i<word.length;i++){
    if(word.charAt(i)==word.charAt(i).toUpperCase()){
      arr.push(i)
    }
  }
  return arr
};
