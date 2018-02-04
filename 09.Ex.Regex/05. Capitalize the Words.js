function capitalize(text){
    let arr = text.toLowerCase().split(' ');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }

    console.log(arr.join(' '));
}
capitalize('Was that Easy? tRY thIs onE for SiZe!');