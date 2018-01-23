function solve(numArr){
    let targetSize = numArr[0];
    let opString ='Cut';

    for(let i = 1; i < numArr.length;i++){
        let microns = numArr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns,'Cut',cut);
        microns = executeOperation(microns,'Lap',lap);
        microns = executeOperation(microns,'Grind',grind);
        microns = executeOperation(microns,'Etch',etch);
       
        if (microns + 1 === targetSize){
            microns = xRay(microns);
        }
        console.log(`Finished crystal ${microns} microns`)
    }
    function cut(crystal) {
        return crystal/4; //cuts the crystal in 4
    }
    function lap(crystal) {
        return crystal -= crystal * 0.2; // removes 20% of the crystal’s thickness
    }
    function grind(crystal) {
        crystal -= 20;
        return crystal; //removes 20 microns of thickness
    }
    function etch(crystal) {
        crystal -= 2;
        return crystal; //removes 2 microns of thickness
    }
    function xRay(crystal) {
        console.log("X-ray x1");
        return ++crystal; //increases the thickness of the crystal by 1 micron;
                        // this operation can only be done once!
    }
    function transportAndWashing(crystal) {
        console.log(`Transporting and washing`);
        return Math.floor(crystal);
    }
    function executeOperation(microns,opString,op) {
        let newSize = op(microns);
        let counter = 0;
        while(newSize >= targetSize
        || Math.floor(targetSize - newSize) === 1){
            microns = newSize;
            newSize = op(microns);
            counter++;
        }
        if(counter > 0 ) {
            console.log(`${opString} x${counter}`);
            microns = transportAndWashing(microns);
        }
            return microns;

    }
}