function disvsTime([v1,v2,t]) {
let dist1 = (v1 / 3.6) * t;
let dist2 = (v2 / 3.6) * t;
console.log(Math.abs(dist1- dist2));
}
disvsTime([0, 60, 3600])