'''
https://www.codewars.com/kata/526571aae218b8ee490006f4

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
'''

# my solution 
def count_bits(r):
    return bin(r).count('1') 

#! alternative-solution
def countBits(n):
    total = 0
    while n > 0:
        total += n % 2
        n >>= 1
    return total
# the >> operator is called bitwise shift (right shift) operator. See:
# https://stackoverflow.com/questions/141525/what-are-bitwise-shift-bit-shift-operators-and-how-do-they-work