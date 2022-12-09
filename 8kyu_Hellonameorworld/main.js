function hello(name) {
  if (!name||name.length<1){return "Hello, World!"}
  let lcase=name.toLowerCase()
  
  return `Hello, ${lcase.charAt(0).toUpperCase()+lcase.slice(1,lcase.length)}!`;
}
