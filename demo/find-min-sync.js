'use strict';

function findMinSync(arr) {
  var minSoFar = 10000;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minSoFar) {
      minSoFar = arr[i];
    }
  }

  return minSoFar;
}