const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.addition === undefined) options.addition = '';
 // let additions = options.addition.join(options.additionSeparator).repeat(options.additionRepeatTimes);
  //console.log(additions);
  
  let additionSeparator = options.additionSeparator;
  let additionSeparatItem = options.addition + options.additionSeparator;
  let additionRepeat = additionSeparatItem.repeat(options.additionRepeatTimes);
  let finalAddition = additionRepeat.slice(0, additionRepeat.length - additionSeparator.length);
  console.log(finalAddition);
  let separator = options.separator
  let string = (str + finalAddition + options.separator).repeat(options.repeatTimes);
  console.log(string);
  let result = string.slice(0, string.length - separator.length);
  console.log(result)
  return result;
}

module.exports = {
  repeater
};

repeater('5tz2rIiyuQ', { repeatTimes: 6, separator: 'HWG1Oh8oRJ', addition: 'u2xi8NVMLf', additionRepeatTimes: 4, additionSeparator: 'JxbPFzu8A9' })//, '5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfHWG1Oh8oRJ5tz2rIiyuQu2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLfJxbPFzu8A9u2xi8NVMLf');
//repeater('UEtWfLO7OQ', { repeatTimes: 5, separator: '6Ex9QcGUW8', addition: 'T0bGgKkt57', additionRepeatTimes: 1, additionSeparator: 'BzP84Ofzxt' })//, 'UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt57');
//repeater('Gtb0Opufwx', { repeatTimes: 6, separator: 'wVDpcl3Qig', addition: 'HpF80x0xag', additionRepeatTimes: 6, additionSeparator: 'icBEXbYWiA' })//, 'Gtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagwVDpcl3QigGtb0OpufwxHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xagicBEXbYWiAHpF80x0xag')