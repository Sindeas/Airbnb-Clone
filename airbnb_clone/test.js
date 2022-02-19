var sumOddFibonacci = function (max) {
    // Implement your code
    
    array = [1,1];
    var nextAt = 1;
    var count = 0;
  
  
    while (count < max) {
      count = array[nextAt-1] + array[nextAt];
      if (count < max) {
        array.push(count);
      }
      nextAt++;
    }
  
    //console.log(array)
    
    var odds = array.filter(function(x) {
     return x % 2 !== 0;
   });
    
    var result = odds.reduce(function(acc, val) { return acc + val; }, 0);
    return result;
    
  };
  
  console.log(sumOddFibonacci(10));
  // -> 10
  console.log(sumOddFibonacci(1));
  // // -> 2
  console.log(sumOddFibonacci(1000));
  // // -> 1785
  console.log(sumOddFibonacci(4000000));
  // // -> 4613732
  