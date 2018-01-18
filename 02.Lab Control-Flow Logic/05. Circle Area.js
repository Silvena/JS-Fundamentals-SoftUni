/**
 * Created by Silvena on 01-Aug-17.
 */
function circleArea(r){
   let area = Math.PI *r *r;
   console.log(area);
   let areaRounded = Math.round(area * 100) /100;
   console.log(areaRounded);

}

circleArea(5);