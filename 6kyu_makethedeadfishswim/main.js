// Return the output array, and ignore all non-op characters
function parse( data )
{
  let inputs=data.split("")
  let ans=0
  let retarr=[]
  for(let i=0;i<inputs.length;i++){
    if(inputs[i]=="i"){
      ans+=1
    }
    else if(inputs[i]=="d"){
      ans-=1
    }
    else if(inputs[i]=="s"){
      ans=ans**2
    }
    else if(inputs[i]=="o"){
      retarr.push(ans)
    }
  }
  return retarr
}
