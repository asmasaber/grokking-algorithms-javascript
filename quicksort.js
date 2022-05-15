function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    const less = [];
    const greater = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
    return quicksort(less).concat(pivot).concat(quicksort(greater))
  }
}

console.log(quicksort([10, 5, 2, 3, 0, -1]));