const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== "string" || sampleActivity === null || sampleActivity === undefined ||
   sampleActivity.length <= 0 || 
  sampleActivity === NaN || sampleActivity.match(/[^\d\.EXABCDEF\-\+]/gi))  return false; //if(object.match(/[^\d\.EXABCDEF\-\+]/gi) || isNaN(parseFloat(object))) return false;
  const radioactiveDecayConstant = Math.log(2) / HALF_LIFE_PERIOD;
  console.log(radioactiveDecayConstant);
  let number = Number(sampleActivity);
  console.log(Number(sampleActivity))
 // console.log(typeof number)
  if (number > 15 || number <= 0 || number === Infinity) {return false;}
  else {
  let time = (Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / radioactiveDecayConstant;
  console.log(time);
  return Math.ceil(time);}
}

//dateSample('9.59383373526808')//  3695

dateSample('9000')//, false);
dateSample('15.1')//, false);
      dateSample('0')//, false);
      dateSample('-5')//, false);
      dateSample('-55.8')//, false);

module.exports = {
  dateSample
};
