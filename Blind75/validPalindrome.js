// Helper function
function alphaNum(character) {
    return (
      ("A".charCodeAt() <= character.charCodeAt() && character.charCodeAt() <= "Z".charCodeAt()) ||
      ("a".charCodeAt() <= character.charCodeAt() && character.charCodeAt() <= "z".charCodeAt()) ||
      ("0".charCodeAt() <= character.charCodeAt() && character.charCodeAt() <= "9".charCodeAt())
    );
}

// Solution 1: While loop, keeping on increasing or decreasing until we are at alpha numeric values and then compare
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let leftPointer = 0;
    let rightPointer = s.length - 1;
  
    while (leftPointer < rightPointer) {
      while (leftPointer < rightPointer && !(alphaNum(s[leftPointer]))) {
        leftPointer += 1;
      }
      while (rightPointer > leftPointer && !(alphaNum(s[rightPointer]))) {
        rightPointer -= 1;
      }
      if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
        return false;
      }
      leftPointer += 1;
      rightPointer -= 1;
    }
  
    return true;
};