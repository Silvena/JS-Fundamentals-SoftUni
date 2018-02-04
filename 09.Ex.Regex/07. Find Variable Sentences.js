function find(input){
 let regEx = /\b(?:_)([a-zA-Z0-9]+)\b/g;
 let result =[];
 let match = regEx.exec(input);
 while(match !== null){
     result.push(match[1]);
     match=regEx.exec(input);
 }
 console.log(result.join(','))
}
find('The _id and _age variables are both integers.')
