function OddOrEvent(number) {
    if(number % 2 == 0){
        console.log("even")
    }else if ((number % 2) == Math.round(number % 2)){
        console.log("odd")
    }else{
        console.log("invalid")
    }
}
OddOrEvent(2.5);