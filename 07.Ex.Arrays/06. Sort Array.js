function sortArr(arr){
    arr.sort((a,b) => sortByLength(a,b)).forEach(element => console.log(element));


    function sortByLength(a,b){
    return  a.length - b.length || sortByName(a,b);
}
    function sortByName(a,b){
    return a.toLowerCase().localeCompare(b.toLowerCase())
}   
}