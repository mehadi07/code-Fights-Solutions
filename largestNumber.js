////Given an integer n, return the largest number that contains exactly n digits.
////
////Example
////
////For n = 2, the output should be
////largestNumber(n) = 99.
////


//solution 1:

function largestNumber(n) {
    return Math.pow(10, n) - 1;
}

console.log(largestNumber(6));

//solution

function largestNumber(n) {
    return parseInt('9'.repeat(n));
}

console.log(largestNumber(6));

//solution

function largestNumber(n) {
    var total = '';
    for ( var i = 0; i < n; i++ ) {
        total += '9'; 
    }
    
    return parseInt( total );
}
console.log(largestNumber(6));


