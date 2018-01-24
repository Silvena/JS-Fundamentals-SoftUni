function lastNumSequence(n,k){
    [n,k] = [n,k].map(Number);

    let result =[1];
    for (let current = 1;current<n;current++){
        let start = Math.max(0,current-k);
        let currentElem = result.slice(start,start +k).reduce((a,b)=>a+b,0);
        result.push(currentElem)
    }
    console.log(result.join(' '))
}
lastNumSequence(6,3)