function num(input){
    let regEx= /\d+/g;
    let result = [];
   for(let line of input){
       let match = line.match(regEx)
       if(match === null){
           continue
       } 
       for(let num of match){
           result.push(num)
       }
   }
    console.log(result.join(' '))
}