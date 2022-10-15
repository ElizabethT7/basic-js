const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!");}
 if (arr.length === 0) return [];
  console.log(arr)
  let transformedArray = [];
  /*for (let i = 0; i < arr.length; i++) {
    console.log (arr[i]); 
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] !== '--discard-prev' || arr[i][j] !== '--double-prev' || arr[i][j] !== '--double-next' || arr[i][j] !== '--discard-next') { arr[i] = transformedArray};
        if ()
      }
  }
console.log*/
let newArray = [];
    
for(let j = 0; j < arr.length; j++ ){
//console.log(arr[j]);
  for (let i = 0; i < arr[j].length; i++) {
    if (arr[j][i] === '--discard-next') {
        let result = arr[j].slice(0, i) + "," + arr[j].slice(i + 2);
        newArray = result;
        //return newArray;
    } else if (arr[j][i] === '--discard-prev') {
        let index = i;
        if (index == 0) index = 1
        //if (arr[j][i-1] !== undefined) {
        let result = arr[j].slice(index, index) /*+ "," */+ arr[j].slice(i + 1);
       
         newArray = result.split(',')
         //console.log (arr[j]);
         //console.log(result)// }
        //return newArray;
        //console.log(newArray)
    } else if (arr[j][i] === '--double-next') {
        let result = arr[j].slice(0, i) + "," + arr[j][i + 1] + "," + arr[j].slice(i + 1);
        newArray = result;
        //return newArray;
    } else if (arr[j][i] === '--double-prev') {
        let result = arr[j].slice(0, i) + "," + arr[j][i - 1] + "," + arr[j].slice(i + 1);
        newArray = result;
        console.log (arr[j])
        //return newArray;
        console.log(result)
      }   
      console.log(newArray);
      transformedArray.push(newArray);
      console.log(transformedArray)
    }

    


  //console.log(arr[i]); 
/*switch(arr[i]){
  
  case '--discard-next':
    transformedArray.splice(i,2);
    break;
  case '--discard-prev':
    if (transformedArray[i-1] !== undefined ) {
    transformedArray.splice(i-1,2);
    }
    break;
  case '--double-next':
    if (transformedArray[i-1] !== undefined ) {
    transformedArray.splice(i,0,transformedArray[i+1]);
    }
    break;
  case '--double-prev':
    if (transformedArray[i-1] !== undefined ) {  
    transformedArray.splice(i-1,0,transformedArray[i-1]);
    }
  break;
}
return arr*/
 } 
 
    console.log(transformedArray);

}


transform([
  ['--discard-prev', 1, 2, 3],
  ['--double-prev', 1, 2, 3],
  [1, 2, 3, '--double-next'],
  [1, 2, 3, '--discard-next']
])


module.exports = {
  transform
};
