function negativeOrPositive (arr){
let result =[];
for(num of arr){
    if(num< 0){
        result.unshift(num); // insert at start
    }else{
        result.push(num); //append in end
    }
}
console.log(result.join('\n'))
}
negativeOrPositive([7, -2, 8, 9])