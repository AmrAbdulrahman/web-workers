var window = self;

onmessage = function(event) {
  var start = event.data.start,
      end = event.data.end,
      minSoFar = 10000;

  for (var i = start; i <= end; i++) {
    if (window.findMinParallelArray[i] < minSoFar) {
      minSoFar = window.findMinParallelArray[i];
    }
  }

  postMessage(minSoFar);
};