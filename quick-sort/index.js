const printArray = (array, length) => {
  let i;

  for (i = 0; i < length; i++) {
    console.log(array[i]);
  }
};

const partition = (array, lowerBound, upperBound) => {
  let a, down, up, temp;

  a = array[lowerBound];
  up = upperBound;
  down = lowerBound;

  while (down < up) {
    while((array[down] <= a) && (down < upperBound)) {
      down++;
    }
    while (array[up] > a) {
      up--;
    }
    if (down < up) {
      temp = array[down];
      array[down] = array[up];
      array[up] = temp;
    }
  }

  array[lowerBound] = array[up];
  array[up] = a;
  return up;
};

const quickSort = (array, left, right) => {
  let p;

  if (left > right) {
    return;
  }

  p = partition(array, left, right);

  quickSort(array, left, p-1);
  quickSort(array, p+1, right);
};

const main = () => {
  array = [80, 40, 30, 20, 10, 00, 70, 90, 50, 60];

  printArray(array, 10);
  quickSort(array, 0, 9);
  printArray(array, 10);
};

main();