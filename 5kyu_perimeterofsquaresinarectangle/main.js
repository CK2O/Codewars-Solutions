function perimeter(n) {
    if (n<1){
      return 4
    }
    
    var curVal = [1,1];
    var num = 0;
    var sum = 2;
    for(var i = 0 ; i < n-1 ; i++){
      num = curVal[i] + curVal[i+1];
      curVal.push(num);
      sum+=num
    }
    return sum*4
  }