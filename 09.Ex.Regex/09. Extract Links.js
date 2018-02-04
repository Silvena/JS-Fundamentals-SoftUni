function extrLink(arr) {
    let pattern = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/gm;

    let result = [];

    for (let line of arr) {

        let match = pattern.exec(line);

        while (match !== null) {
            result.push(match[0]);
            match = pattern.exec(line);
        }
    }

    console.log(result.join('\n'));
}
