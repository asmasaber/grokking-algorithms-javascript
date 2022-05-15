function  binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while(low <= high) {
    const mid = ~~((low + high) / 2);
    const guess = list[mid];
    if(guess === item) {
      return mid;
    } else if(guess > item) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

function recursiveBinarySearch(list, item, start = 0, end = list.length -1) {
  if(start <= end) {
    const mid = ~~((start + end) / 2);
    const guess = list[mid];
    if(guess === item) {
      return mid;
    } else {
        if(guess > item) {
          end = mid;
        } else {
          start = mid + 1;
        }
        return recursiveBinarySearch(list, item, start, end)
    }
  }
  return -1;
}

// const testingNumbers = [1, 3, 5, 7, 9, 11 , 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51];

// console.log('searching for 21', binarySearch(testingNumbers, 21));

