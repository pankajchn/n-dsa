


function smallestNum (A) {
    
    
    let smallest = A[0] // 1
    
    for ( let i = 1; i < A.length; i++ ) {
        if ( A[i] < smallest ) {
            smallest = A[i]
        }
    }
    
    return smallest;
    
}

// const A = [1,2,3,4,5]
// const A = [23, 89, 2, 48, 98, 43]
const A = [-45, -9, -101, -1, -39]

const res = smallestNum(A)
console.log(res);