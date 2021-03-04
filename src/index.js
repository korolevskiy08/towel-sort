
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!(matrix instanceof Array)){return []}
 return matrix.map((a,i)=>{if (i%2==1){return a.reverse()} return a}).flat()
}
