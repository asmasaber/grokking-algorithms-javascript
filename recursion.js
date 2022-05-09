// NOTE 
// “Loops may achieve a performance gain for your program. 
// Recursion may achieve a performance gain for your programmer. 
// Choose which is more important in your situation!”

// factorial without recursive approach
function factorial(num) {
  const pile = [];
  while(num > 1) {
      pile.push(num);
      --num;
  }

  return pile.reduce((t, c) => t * c);
}

// factorial with recursive approach
function recursiveFactorial(num) {
  console.trace();
    if(num === 1) { // Base case
        return 1;
    } else { // Recursive case
        return num * recursiveFactorial(num-1);
    }
  }
  
// factorial with tail recursive approach (out of the book scope)
function tailRecursiveFactorial(number, total = 1) {
  // Tail Recursion:- A special form of recursion where the last operation of a function is a recursive call. 
  // The recursion may be optimized away by executing the call in the current stack frame and returning its result rather than creating a new stack frame.
  // more about Tail Call Optimization in ECMAScript 6  https://2ality.com/2015/06/tail-call-optimization.html
  // more about browser that support Tail Call Optimization https://stackoverflow.com/questions/37224520/are-functions-in-javascript-tail-call-optimized
  
  console.trace();
  if (number === 0) {
      return total;
  }
  // proper tail call
  return tailRecursiveFactorial(number - 1, number * total);
}

const runPrimePerformance = (...arguments) => {
  for (var i=0; i < arguments.length; i++) {
      console.time(arguments[i].name);
      arguments[i](6900);
      console.timeEnd(arguments[i].name);
  }
}
  
tailRecursiveFactorial(5);
  
// runPrimePerformance(factorial,tailRecursiveFactorial, recursiveFactorial);