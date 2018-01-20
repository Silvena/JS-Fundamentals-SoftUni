function squareOfStars(n){
    function stars(count = n){
    console.log("*"+" *".repeat(count-1));
    }
    for (let i = 1; i<= n; i++){
        stars()
    }
}
squareOfStars(5)