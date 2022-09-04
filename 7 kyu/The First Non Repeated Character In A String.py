'''
https://www.codewars.com/kata/570f6436b29c708a32000826

You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)
'''

# my solution
def first_non_repeated(s):
    for i in s:
        if s.count(i) == 1:
            return i
        
    return None
# this is O(nˆ2). See a O(n) below

#! alternative-solution
from collections import Counter

def first_non_repeated(s):
    for k, c in Counter(s).items():
        if c == 1:
            return k
# A Counter is a container that keeps track of how many times equivalent values are added.