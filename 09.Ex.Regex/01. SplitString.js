function splitStringDelimeter(input, delimeter){
  let result = input.split(delimeter);
  console.log(result.join('\n'))
}
splitStringDelimeter('One-Two-Three-Four-Five' , '-')