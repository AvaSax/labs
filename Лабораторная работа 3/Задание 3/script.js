let array = [[0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
console.log(array);
let newArray = cloneArray(array);
function cloneArray(array) {
    let anotherArray = [];
    for (let i=0; i<array.length; i++) {
        if (Array.isArray(array[i])) {
            anotherArray[i] = cloneArray(array[i]);
            continue; 
        }
        anotherArray[i] = array[i];
    }
    return anotherArray;
}
array[0][0] = 100;
console.log(newArray);
