const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.log(members)
  console.log(members.length)
  let result = '';
  if (members === null || members === undefined || members.length === 0) { return false;}
  for (let i = 0; i < members.length; i++) {
    console.log(typeof members[i]);
    if (typeof (members[i]) == "string" || members[i] instanceof String) {
      let name = members[i].trim().toUpperCase();
      console.log(name);
      //for (let j = 0; j< members[i].length; j++ ){
      result = result + name[0];
      console.log(name[0]);
      console.log(result)
    //}
    } else { 
      result = result;
      i++;
    } //return result; 
    console.log(result)
  }
  
  let dreamTeamName = result.split('').sort().join('');
  console.log(dreamTeamName);
  return dreamTeamName;

}


//createDreamTeam(['Dylan', 'Keith', 'Madison', 'Ralph', 'Olivia', 'Raymond', 'Megan', 'Frank', 'Daniel', 'Carol'])
/*createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
])*/

/*createDreamTeam([
  'amelia',
  'ruby',
  'lily',
  'grace',
  'millie',
  'daisy',
  'freya',
  'erin',
  'megan',
  'jasmine',
  'brooke',
])*/

createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
])

module.exports = {
  createDreamTeam
};
