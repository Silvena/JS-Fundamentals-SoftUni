function data(arr) {
    let namePattern = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/gm;
    let phonePattern = /(\+[0-9-]{10})(?= |\t|$)/gm;
    let IDpattern = /(![0-9a-zA-Z]+)(?= |\t|$)/gm;
    let secretBasePattern = /(_[0-9a-zA-Z]+)(?= |\t|$)/gm;

    let result = [];

    arr.forEach(line => {
        line = line
            .replace(namePattern, func)
            .replace(phonePattern, func)
            .replace(IDpattern, func)
            .replace(secretBasePattern, func);

        result.push(line);
    });

    console.log(result.join('\n'));

    function func(match) {
        return '|'.repeat(match.length);
    }
}
