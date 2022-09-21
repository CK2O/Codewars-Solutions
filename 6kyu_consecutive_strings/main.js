function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
  let answer = ''
  let tempStr = ''
  for (let i = 0; i < strarr.length; i++){
    tempStr = strarr.slice(i, i+k);
    if (tempStr.join('').length > answer.length ){
      answer = tempStr.join('');
    }
  }
  return answer;
  }