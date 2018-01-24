function biggestEl(matrix){
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(el => el.forEach(
        c => biggestNum = Math.max(biggestNum, c)));
        return biggestNum
}