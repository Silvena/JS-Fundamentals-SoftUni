function GardsToRad(number) {
    number = Number(number);
    let degree = number * 3.6 /4;
    degree = degree %360;
    if(degree < 0) degree = 360 +degree;
    console.log(degree);
}
GardsToRad(100);