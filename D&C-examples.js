function squarePlots(width, height) {
  let longerSide, shorterSide;
  if(width > height) {
      longerSide = width;
      shorterSide = height;
  } else {
      longerSide = height;
      shorterSide = width;
  }
  // base case
  if((longerSide % shorterSide) === 0) {
      return shorterSide;
  } else {
      return squarePlots (longerSide % shorterSide, shorterSide);
  }
}

console.log(squarePlots(1680, 640));


function arraySum(arr) {
  // base case
  if(!arr || arr.length === 0) {
      return 0;
  } else if(arr.length === 1) {
      return arr[0];
  } else {
      const x = arr.pop();
      return x + arraySum(arr);
  }
}

console.log(arraySum([2, 4, 6, 20]));

function listCount(arr) {
  // base case
  if(!arr || arr.length === 0) {
      return 0;
  } else {
      arr.pop();
      return 1 + listCount(arr);
  }
}

console.log(listCount([1, 2 , 3]));

let max = 0;

// function maxNumber(arr) {
//     // base case
//     console.log('arr', arr);
//     if(!arr || arr.length === 0) {
//         return max;
//     } else {
//         const next = arr.pop();
//         console.log('next', next);
//         if(next > max) {
//             max = next;
//         }
//         console.log('max', max);
//         return maxNumber(arr, max);
//     }
// }

function maxNumber(arr) {
    if(arr.length === 2) {
        if(arr[0] > arr[1]) {
            return arr[0];
        } else {
            return arr[1];
        }
    } else {
        if(arr[0] < arr[1]){
            arr.shift();
        } else {
            arr.splice(1,1);
        }
        return maxNumber(arr);
    }
}
console.log(maxNumber([1, 2 , 3, 8 , 0]));