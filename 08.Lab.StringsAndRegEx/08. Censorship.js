function censor(text,words){
    for(let current of words){
        let replaced = '-'.repeat(current.length);
        while(text.indexOf(current)> -1) {
            text = text.replace(current,replaced);
        }
    }
    return text;
}