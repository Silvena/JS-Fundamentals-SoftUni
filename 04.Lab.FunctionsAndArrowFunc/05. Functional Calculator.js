function Calc(a,b,char){
   
    switch(char){
    case '+':return a + b;
    case '-': return a - b;
    case '/':return a / b;
    case '*': return a * b;
    
      default:  return 'error';
    }
}
console.log(Calc(2,3, '+'))