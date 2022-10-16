function diamond(n){
    let string=""
    let star="*"
    let space=" "
    let stars=""
    if (n < 1 || n % 2==0){ // n is negative or even
          return null
    }
    for(let i=0;i<n;i++){
      
      
      if (i <= n/2){      //build up the stars on top of diamond
        stars = star.repeat(i*2 + 1) 
        console.log(`${string}`)
      } 
      else if(i>n/2) {  // diamond taper  
          stars = star.repeat((n-i)*2 - 1);
      }   
      string += space.repeat((n-stars.length)/2) + stars + '\n';
    };
  
    return string
  }
