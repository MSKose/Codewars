'''
https://www.codewars.com/kata/55908aad6620c066bc00002a/

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
'''

# my function
def xo(s):
    a = s.lower()
    return a.count('x') == a.count('o')

#! alternative-solution
from collections import Counter

def xo(s):
    d = Counter(s.lower())
    return d.get('x', 0) == d.get('o', 0)
# also, from a comment below:
# "With collections.Counter you don't have to account for the case where the key doesn't exist, so: return d["x"] == d["o"] will work just fine."
