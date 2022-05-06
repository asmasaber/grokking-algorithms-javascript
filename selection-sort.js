function findSmallest(arr) {
  let smallestIndex = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[smallestIndex]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  const length = arr.length;
  const sortedArray = [];
  for(let i = 0; i < length; i++) {
    let smallestIndex = findSmallest(arr);
    sortedArray.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));