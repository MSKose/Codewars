'''
https://www.codewars.com/kata/534d0a229345375d520006a0

Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
'''

# my solution
def power_of_two(x):
    binary = bin(x)[2:]

    if binary.count('1') == 1: return True
    
    else: return False
# future reference comment here: what bin(x) does is it converts my 
# integer into binary and although I didn't need the [:2] for this one 
# it basically gets rid of the prefix 0b when converted. 

#! alternative-solution
def power_of_two(x):
    return x != 0 and ((x & (x - 1)) == 0)
# this is a bitwise solution and I never understood bitwise lol. But still dropping some links:
# https://stackoverflow.com/questions/8556206/what-does-mean-in-python
# https://stackoverflow.com/questions/600293/how-to-check-if-a-number-is-a-power-of-2/600306#600306
