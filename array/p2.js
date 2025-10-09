function countNegativeNumbers(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      ++count;
    }
  }
  return count;
}

const A = [1, -3, 5, 8, -13, -78, -84]
// const A = [1, 2, 3];

const result = countNegativeNumbers(A);
console.log(result);
