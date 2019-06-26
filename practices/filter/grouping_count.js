'use strict';

function grouping_count(collection) {
  return collection.reduce((acc, current) => {
    if(Object.keys(acc).includes(current)) return acc;
    return {...acc,[current]: collection.filter(c => c === current).length }
  }, {})

  //implement here
}

module.exports = grouping_count;
