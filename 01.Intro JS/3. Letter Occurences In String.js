/**
 * Created by Silvena on 27-Jul-17.
 */

function countLetter(str,letter) {
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }
    return count;
}
countLetter('Hello');