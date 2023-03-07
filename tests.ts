import { hgid } from "./index.js";

const testArray: Array<string> = [];
let start = Date.now();
let iteration = 0;
let testTime = Date.now();

while(true) {
    
    const item: string = hgid();

    if(testArray.includes(item)) {
        console.log(`Repeat found in: ${Date.now() - start}ms`)
        break;
    }

    if(iteration % 1000 == 0) {
        const testTime_current: number = Date.now() - testTime;
        console.log(`Testing #${iteration} for ${item}. Test took: ${testTime_current}ms (per 1000). Average per 1: ${testTime_current / 1000}ms`);
        testTime = Date.now();
    }

    testArray.push(item);
    iteration++;
}