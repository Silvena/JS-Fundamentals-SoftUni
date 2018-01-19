function rounding ([value,precision]){
    precision = Number(precision);
    if (precision > 15) precision = 15;
    value = Number(value.toFixed(precision))
    console.log(value)
}
rounding([10.5, 3])