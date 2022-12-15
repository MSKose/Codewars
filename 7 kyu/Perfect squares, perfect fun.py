'''
https://www.codewars.com/kata/5705ca6a41e5be67720012c0

Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
'''

# my solution
import re

def square_it(digits):
    leng = len(str(digits))
    
    if leng ** 0.5 % 1:
        return "Not a perfect square!"
    
    square = int(leng ** 0.5)
    regex = re.compile(r".{{1,{}}}".format(square))
    return '\n'.join(regex.findall(str(digits)))

#! alternative-solution
def square_it(digits):
    s = str(digits)
    n = len(s)**0.5
    if n != int(n):
        return "Not a perfect square!"
    n = int(n)
    return "\n".join(s[i*n:i*n+n] for i in range(int(n)))