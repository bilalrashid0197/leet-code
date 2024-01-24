// Solution 1
/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
};

// Solution 2
/**
 * 
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
var isAnagram = function(s, t) {
    
    // Check if the lenght of the two string matches
    if(s.length != t.length){
        return false;
    }

    // Create HashMap
    let frequencyTableS = {};
    let frequencyTableT = {};
    for(let i = 0; s.length > i; i++){

        if(!(s[i] in frequencyTableS)){
            frequencyTableS[s[i]] = 1; // create a key-value pair based of s[i]
        } else {
            frequencyTableS[s[i]] += 1; // add one to the key-value pair
        } 

        if(!(t[i] in frequencyTableT)){
            frequencyTableT[t[i]] = 1; // create a key-value pair based of s[i]
        } else {
            frequencyTableT[t[i]] += 1; // add one to the key-value pair
        }
    }
    
    // loop over one of the objects to find out if we have an anagram or not
    for(let key in frequencyTableS){
        if(frequencyTableS[key] !== frequencyTableT[key]){
            return false;
        }
    }
    return true;
};