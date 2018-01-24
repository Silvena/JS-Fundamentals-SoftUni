function printArrayWithDelimeter(input){
    let delimeter = input[input.length -1];
    input.pop();
    let result = "";
    for(let i = 0; i < input.length; i++){
        if(i == 0){
            result += input[i];
        }else{
            result += delimeter + input[i]
        }
    }
    console.log(result);
}
