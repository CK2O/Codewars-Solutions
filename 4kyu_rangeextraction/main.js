function solution(list){
    
    let cur=0;
    var answer=[];
    for (let i=0;i<list.length;i++){
      if(list[i]+1!=list[i+1]){
        if(cur==0){
            answer.push(list[i]);}
        if(cur==1){
            answer.push(list[i-1]);
            answer.push(list[i]);
            cur=0;}
        if(cur>1){
            answer.push(list[i-cur]+"-"+list[i]);
            cur=0;}
      }
      else{
        cur++;
      }
    }
    return answer.join();
   }
