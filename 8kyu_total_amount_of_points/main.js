function points(games) {
  let x=0
  let y=0
 for (let i =0;i<games.length;i++){
  let currentMatch=games[i].split(":")
   if(currentMatch[0]>currentMatch[1]){
     x+=3
   }
   else if(currentMatch[1]>currentMatch[0]){
     y+=3
   }
   else if(currentMatch[1]==currentMatch[0]){
     x+=1
     y+=1
   }
   console.log(`x${x} y${y}`)
   }
return x
}