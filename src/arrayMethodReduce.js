'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let currentElementIndex = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      currentElementIndex = 1;
    }

    for (let i = currentElementIndex; i < this.length; i++) {
      const currentElement = this[i];

      accumulator = callback(accumulator, currentElement, i, this);
    }

    return accumulator;
  };
};

module.exports = applyCustomReduce;
