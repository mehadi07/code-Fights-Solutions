/*

You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.

*/

function addTwoDigits(n) {
 return n % 10 + Math.floor(n / 10);
}
