'use strict';

// idea: i try here to apply simple "divide and conquer" technique
// i split huge array into smaller ones, get their minimums
// then get min of these minimums

//window.findMinParallelArray = null;
function findMinParallel(arr, callback) {
  window.findMinParallelArray = arr;

  // if arr is less than 10, then make it sync
  var numberOfWorkers = arr.length < 10 ? 1 : 10,
      chunkStartIndex = 0,
      chunkSize = parseInt(arr.length / numberOfWorkers),
      localMins = [], // holds the min of each chunk
      workers = {}; // holds references of workers

  // loop, create workers, send chunks
  for (var i = 0; i < numberOfWorkers; i++) {
    //var chunk = arr.splice(0, chunkSize);

    workers[i] = new Worker('find-min-worker.js');
    workers[i].postMessage({start: chunkStartIndex, end: chunkStartIndex + chunkSize - 1});
    chunkStartIndex += chunkSize;

    workers[i].onmessage = function(event) { // worker sends its min
      var localMin = event.data;
      localMins.push(localMin); // save local min

      // when all workers finish, then get min of local MINs
      if (localMins.length == numberOfWorkers) {
        window.findMinParallelArray = localMins;
        workers[0].postMessage({start: 0, end: localMins.length - 1});
        workers[0].onmessage = function(event) {
          callback(event.data);
        };
      }
    };
  }
}