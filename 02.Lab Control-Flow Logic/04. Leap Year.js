/**
 * Created by Silvena on 01-Aug-17.
 */
function lapYear(year){
    "use strict";
    let leap = (year % 4 == 0 && year %100 !=0) || (year % 400 == 0);
    console.log(leap ? "yes" : "no");
}
lapYear(1900);