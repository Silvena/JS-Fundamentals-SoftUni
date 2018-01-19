function compondInt ([principalSum, rateInPercent, periodInMounth,timeSpanYears]) {
    let compondInt = principalSum * 
    Math.pow(1+rateInPercent/(100 * (12 / periodInMounth)),
     12/ periodInMounth *timeSpanYears);

     console.log(compondInt.toFixed(2));
}
compondInt([1500, 4.3, 3, 6]);