console.log(5 & 3); // Output: 1
// 5 in binary:  0101
// 3 in binary:  0011
// Result:       0001 (1 in decimal)


console.log(5 | 3); // Output: 7
// 5 in binary:  0101
// 3 in binary:  0011
// Result:       0111 (7 in decimal)


console.log(5 ^ 3); // Output: 6
// 5 in binary:  0101
// 3 in binary:  0011
// Result:       0110 (6 in decimal)


console.log(~5); // Output: -6
// 5 in binary:  0101
// NOT result:   1010 (in two's complement)
// Decimal:      -6


console.log(5 << 1); // Output: 10
// 5 in binary:  0101
// Shifted left: 1010 (10 in decimal)


console.log(10 >> 1); // Output: 5
// 10 in binary:  1010
// Shifted right: 0101 (5 in decimal)


console.log(-10 >>> 1); // Output: 2147483643
// -10 in binary (32-bit):          11111111111111111111111111110110
// Shifted right (zero-filled):     01111111111111111111111111111011
// Decimal representation:          2147483643
