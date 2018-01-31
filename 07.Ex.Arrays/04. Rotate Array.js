function rotate(input){
    let rotations = Number(input.pop());
    rotations %= input.length; 

    for (let i = 0; i < rotations; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '))
}
console.log(rotate(1,2,3,4,2))