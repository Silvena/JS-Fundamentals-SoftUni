function evenPositionEl(arr){
 let result = [];
 for(let i in arr){
     if( i % 2 == 0){
         result.push(arr[i]); 
     }
 }
 return result.join(' ');
}
console.log(evenPositionEl([20,30,40]))