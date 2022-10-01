'''
https://www.codewars.com/kata/541c8630095125aba6000c00/

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
'''

# my solution
def digital_root(n):
    if len(str(n)) > 1:
        x = sum(int(i) for i in str(n))
        if len(str(x)) == 1:
            return x
        else:
            return digital_root(x)
    else: 
        return n
    
#! alternative-solution
def digital_root(n):
    while n > 9:
        n = sum(map(int, str(n)))
    return n