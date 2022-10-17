const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currentChain : [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.currentChain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.currentChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this._checkIntegerNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this._deleteChain();
        throw new Error ("You can't remove incorrect link!");       
      }
      const index = position - 1;
      this.currentChain.splice(index, 1);
      return this;
    }
    this._deleteChain();
    throw new Error ("You can't remove incorrect link!");
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const chain = this.currentChain.join('~~');
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.currentChain.length = 0;
  },
  _checkIntegerNumber(num) {
    return typeof num === 'number' && (num ^ 0) === num;
  }
};

module.exports = {
  chainMaker
};
