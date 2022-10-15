const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {

  if (Array.isArray(arr)){
    let level = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])){
        let depth = level;
        //console.log(depth)
        level = 1;
        level = level + this.calculateDepth(arr[i]);
        if (level < depth) {
          level = depth;
        }  
      }
    }
  return level;
  } //else return []; 
  } 
   /* this.arr = arr;
    this.depth = 1;

  calculateDepth(arr) {
    if (depth > this.depth) this.depth = depth;
    for (let e of arr) {
        if (Array.isArray(e)) {
            this.calculateDepth(e, depth + 1);
        }
    }
    return this.depth;
    }

   /* let i = 0;
    while(arr.length){
         i++;
         arr = arr.reduce( (level, el) => {
              if(Array.isArray(el)) level.push(...el);
              return level;
         }, []);
    }
    return i;*/
  
}

module.exports = {
  DepthCalculator
};
