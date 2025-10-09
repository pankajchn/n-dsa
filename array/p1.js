
function searchElement(A, E) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === E) {
            return i;
        } 
    }
    return -1;
}

let A = [1, 2, 3, 4, -46, 23];

const result = searchElement(A, -46)
console.log(result);


