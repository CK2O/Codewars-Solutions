function topThreeWords(text) {
let lText=text.toLowerCase()
              //.replace("'", '')
              //.replace('#', '')
              //.replace(`\` ,'')
              //.replace('/', '')
              //.replace(",", '')         
              //.replace(".", '');
 
let words=lText.split(" "),answers=[], index=[]
let num=3

console.log(lText)

//for(let i=0;i<words.length;i++){
 // if(answers.filter(el=>el==words[i]).length==0&&words[i]!=""){
  //answers.push(words[i]) words.filter(el=>el==words[i]).length)
  //  }
//} let max = Math.max(...answers);
  //let letter=answers.findIndex(el=>el==max)
  //return answers[letter]
  
  let split = lText.split(' ');
  for (let i=0;i<split.length;i++){
    if(split[i].startsWith("//")){
      split[i]="wont"
    }
  }
  
    let map = {};
    split.forEach(word => {
       if(map.hasOwnProperty(word)){
          map[word]++;
       }
      
      else if(word!=""
         &&word!=","
         &&word!="''"
          &&word!=".."
          &&word!="..."      
          &&word!="\'"){
          map[word] = 1;
       }
    });
    
    let count = Object.keys(map).map(key => [key, map[key]]);
    count.sort((a, b) => b[1] - a[1]);
    console.log(count)
    return count.slice(0, num).map(el => el[0]);
  
}
