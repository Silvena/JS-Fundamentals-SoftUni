function diagonalSums(matrix) {
    let mainSum = 0,secondSum =0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondSum += matrix[row][matrix.length-row-1];
   
    }
     console.log(mainSum+' '+secondSum)
}
diagonalSums([[20,40],[10,60]])