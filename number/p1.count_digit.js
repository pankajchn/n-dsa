// Write a function that counts digit in a Number

function countDigit(n) {
    if ( n == 0 ) return 1;
    n = Math.abs(n)
    let count = 0;
    while ( n > 0 ) {
        n = Math.floor(n/10);
        count++
    }
    return count;
}

const res = countDigit(-3434453)
console.log(res);


