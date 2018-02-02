function aggregateTable(array){
    let sum = 0, list = [];

    for (let index = 0; index < array.length; index++) {
        let townData = array[index].split('|').filter(a=>a !== '');
        list.push(townData[0].trim())
        sum += Number(townData[1].trim())   
    }
    console.log(list.join(', ')+'\n'+sum)
}
aggregateTable(['| Sofia           | 300',
'| Veliko Tarnovo  | 500',
'| Yambol          | 275'])