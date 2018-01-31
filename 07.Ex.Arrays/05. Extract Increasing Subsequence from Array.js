function ExtactIncrease(input){
    input = input.map(Number);
    let currentBigNum = Number.NEGATIVE_INFINITY;
    let arrSize = input.length;

    for (let index = 0; index < arrSize; index++) {
        let currentNum = input.shift();
        if(currentNum >= currentBigNum){
            currentBigNum = currentNum;
            console.log(currentNum);
        }
 }
}
ExtactIncrease([1,3,8,4,10,12,3,2,24])