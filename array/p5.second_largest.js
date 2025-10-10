
function secondLargest(A) {

    if (A.length == 0) {
        return null
    }

    let firstLargest = A[0];
    let secondLargest = A[0];
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = A[i];
        } else if (A[i] > secondLargest) {
      secondLargest = A[i];
    }
}
return secondLargest;
}

// const A = [1, 2, 3, 4, 5];
// const A = [2, 98, 23, 47, 28, 3, 29]
// const A = []
const A = [1, 76, 39, 23, 76, 98, 12]


const res = secondLargest(A)
console.log(res);
