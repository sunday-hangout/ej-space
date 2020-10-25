/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    let length = matrix[0].length;

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    for (let i = 0; i < length; i++) {
        matrix[i].reverse();
    }

    return matrix;
};

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);