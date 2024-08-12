
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (matrix == undefined) return resultArr;
  if (matrix.length === 0) return resultArr;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(i % 2 === 0) {
        resultArr.push(matrix[i][j]);
      } else {
        resultArr.push(matrix[i][matrix[i].length - 1 - j]);
      }
    }
  }
  return resultArr;
}
