// Solution 1:
var searchMatrix = function(matrix, target){
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let topRow = 0;
    let bottomRow = ROWS - 1;
    
    while (topRow <= bottomRow) {
        let currentRow = Math.floor((topRow + bottomRow) / 2);
        if (target > matrix[currentRow][COLS - 1]) {
            topRow = currentRow + 1;
        } else if (target < matrix[currentRow][0]) {
                bottomRow = currentRow - 1;
        } else {
            // The target is in the current row, break the loop to perform binary search in it.
            break;
        }
        }
        // If the target is not within the range of the matrix, return false.
        if (topRow > bottomRow) {
            return false;
        }
    // Perform a binary search in the current row.
    let currentRow = Math.floor((topRow + bottomRow) / 2);
    let left = 0;
    let right = COLS - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (matrix[currentRow][middle] > target) {
            right = middle - 1;
        } else if (matrix[currentRow][middle] < target) {
            left = middle + 1;
        } else {
            return true;
        }
    }

    return false;
    };