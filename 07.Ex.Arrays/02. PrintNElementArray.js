function nElmArray(arr){
let step = Number(arr.pop());
for (let index = 0; index < arr.length; index+= step) {
    console.log(arr[index]);
    
}
}
nElmArray([5,20,31,4,20,2])