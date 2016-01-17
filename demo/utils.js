var INF = 10000;

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function generateRandomArray(len) {
  var arr = [];

  for (var i=0; i<len; i++) {
    var n = getRandomArbitrary(0, INF);
    arr.push(n);
  }

  return arr;
}

