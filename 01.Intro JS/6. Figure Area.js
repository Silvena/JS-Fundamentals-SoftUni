/**
 * Created by Silvena on 01-Aug-17.
 */
function getArea(w,h,W,H){
    let[s1,s2,s3]= [w*h,W*H, Math.min(w,W)* Math.min(h,H)];
    return s1 + s2 - s3;
}
console.log(getArea(2,4,5,3));