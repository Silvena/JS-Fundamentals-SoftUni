function AddAndRemoveElement(arr) {
    let result = [];
    let num = 1;
 for (let command of arr) {
    if(command == "add") { 
        result.push(num)
    }else{
     result.pop()
    }
    num++;
 }
 if (result.length == 0){
     console.log("Empty")
 }else{
     result.forEach(el => console.log(el))
 }

}
