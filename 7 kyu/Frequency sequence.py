'''
https://www.codewars.com/kata/585a033e3a36cdc50a00011c

Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
'''

# my solution
from collections import Counter

def freq_seq(s, sep):
    return f'{sep}'.join(str(Counter(s)[i]) for i in s)