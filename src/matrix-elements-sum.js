const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   let sum = 0;
   /*let sum1 = 0;
   for (let i = 0; i < matrix.length; i++) {
    let rowNumber =0;
   let column =0;
    for (let j = 0; j < matrix[i].length; j++) { 
      if (matrix[i][j] === 0) {
        rowNumber = i;
        column = j; 
      }  
      sum1 = sum1 + matrix[i][j];
      console.log (rowNumber);
      console.log (column);
      ///*if (matrix[i][j] !== matrix[rowNumber + 1][column]) {
        sum1 = sum1 + matrix[i][j];
      }
    //}  
    
    console.log (sum1);
     sum = sum1;
   } console.log(matrix);
   console.log (sum)
   return sum;*/
   let sum1 = 0;
   let column =[];
   let column2 =[];
   let column3 =[];
   let rowNumber = 0;
   for (let j=0; j<matrix[0].length; j++) {
    sum1 = sum1+ matrix[0][j];
    if (matrix[0][j] === 0) {
      rowNumber = 0;
      column.push(j); 
    } 
   }
   //console.log(sum1)
   let sum2 = 0;
   for (let j=0; j<matrix[1].length; j++) {
      sum2 = sum2+ matrix[1][j];
      if (rowNumber = 0 /*&& column !== null*/) {
          for (let n = 0; n < column.length; n++) {
            sum2 = sum2 - matrix[1][n];
          }
      }
      //console.log(sum2)
    if (matrix[1][j] === 0) {
      rowNumber = 1;
      column2.push(j); 
    } 
   }

   let sum3 = 0;
   for (let j=0; j<matrix[2].length; j++) {
      sum3 = sum3+ matrix[2][j];
      //console.log(sum3)
      if (rowNumber = 1 /*&& column !== null*/) {
          for (let n = 0; n < column.length; n++) {
            sum3 = sum3 - matrix[2][n];
          }
      }
      //console.log(sum3)
    if (matrix[2][j] === 0) {
      rowNumber = 2;
      column3.push(j); 
    } 
   }
}

getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])//, 15);

module.exports = {
  getMatrixElementsSum
};
