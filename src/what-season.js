const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 //let date = new Date(2150, 7, 21, 18, 36, 41, 841);
function getSeason(date) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date !== undefined) {
    let month = date.getMonth();
   // if (Date.prototype.toString.call(new Date()) instanceof Date) throw new Error('Invalid date!');
    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {throw new Error('Invalid date!');}
      //if (month > 12) throw new Error('Invalid date!');
      if ((month >= 0 && month < 2) || month === 11) return 'winter';
      if ((month >= 2 && month < 5)) return 'spring';
      if ((month >= 5 && month < 8)) return 'summer';
      if ((month >= 8 && month < 11)) return 'autumn';

  } else return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason
};

getSeason(new Date(2150, 7, 21, 18, 36, 41, 841))//, 'summer');
