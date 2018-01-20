function wordToUpper([str]){
    let strUpper = str.toUpperCase();

     function extractWords(){
        return strUpper.split(/\W+/);
    }
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
   
}