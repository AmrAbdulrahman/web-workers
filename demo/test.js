function test(len) {
  len = len || 1000;
  var arr1 = generateRandomArray(len),
      arr2 = generateRandomArray(len);

  // Sync test
  var syncStart = new Date();
  findMinSync(arr1);
  var syncEnd = new Date();
  console.log('Sync time: ' + (syncEnd - syncStart) + ' ms');

  // Parallel test
  var parallelStart = new Date();
  findMinParallel(arr2, function() {
    var parallelEnd = new Date();
    console.log('Parallel time: ' + (parallelEnd - parallelStart) + ' ms');
  });
}