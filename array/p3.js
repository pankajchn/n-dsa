// In js there is something known as Infinity - Infinity, -Infinity

function largestNum(A) {
  let largest = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
      largest = A[i];
    }
  }
  return largest;
}

// const A = [1, 23, 3, 4, 5];
// const A = [-1, -23, -3, -4, -5, 0];
const A = [-9, -23, -2];
const res = largestNum(A);
console.log(res);
