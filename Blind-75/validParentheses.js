// Solution 1: Mapping dict
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const mappingDict = {")":"(","}":"{" ,"]":"["}; // Create mapping dict
    let arrayToBePoppedFrom = []; // Stack

    for(let i = 0; s.length > i; i++){

        // If the current itteration has ([{ then append
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){ 
            arrayToBePoppedFrom.push(s[i]);
        } else { // If the peak of the stack === the current value in the itteration then pop
            if(arrayToBePoppedFrom[arrayToBePoppedFrom.length - 1] === mappingDict[s[i]]){
                arrayToBePoppedFrom.pop();
            } else { // return false
                return false;
            }
        }
    }
    
    // If the stack is empty then that means it is valid, otherwise no
    if(arrayToBePoppedFrom.length !== 0){
        return false;
    }
    return true;
};