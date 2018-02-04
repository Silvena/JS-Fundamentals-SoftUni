function word(text,occurence){
 let regEx = new RegExp('\\b' + occurence + '\\b', 'gi');
 let match = regEx.exec(text)
 let count =0;
 while (match !== null) {
    counter++;
    match = regEx.exec(text)
}

console.log(counter);
}
