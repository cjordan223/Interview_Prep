/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const results = [];
    if (matrix.length === 0) return results;

    let top = 0; // top boundry
    let bottom = matrix.length - 1; // bottom boundry
    let left = 0; //left boundry
    let right = matrix[0].length - 1; //right boundry


    while(top <= bottom && left <= right) {
            //traverse from left to right across top row
        for(let i = left; i <= right; i++) {
            results.push(matrix[top][i]);
        }
        //move the top boundry down
        top++;

        //traverse from top to bottom down the right column
        for(let i = top; i<= bottom; i++){
            results.push(matrix[i][right]);
        }
        right--;  //move bottom boundry up
    
        //traverse from right to left across the bottom row, if still valid
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                results.push(matrix[bottom][i]);
            }
            bottom--;
        }
 
    // traverse from bottom to top along the left column, if still valid

        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                results.push(matrix[i][left]);
            }
            left++;
        }

}
    return results;
};


/* 

    Boundaries: Use top, bottom, left, and right variables to define the current boundary of traversal.
    Traversal: Follow the order:
        Traverse the top row from left to right.
        Traverse the right column from top to bottom.
        Traverse the bottom row from right to left (only if the top boundary is still below or equal to the bottom boundary).
        Traverse the left column from bottom to top (only if the left boundary is still to the left or equal to the right boundary).
    Update boundaries: After traversing a row or column, adjust the respective boundary.
    Condition: Ensure the boundaries remain valid during traversal.



*/