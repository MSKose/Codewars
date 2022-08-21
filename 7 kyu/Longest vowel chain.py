'''
https://www.codewars.com/kata/59c5f4e9d751df43cf000035/

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
'''

# my solution
import re

def solve(s):
    x = re.split("[^aeiou]", s)
    return max(len(a) for a in x)

#! alternative-solution-1
def solve(s):
    totals = []
    total = 0
    for x in s:
        if x in 'aeiouAEIOU':
            total+=1
        else:
            totals.append(total)
            total = 0
    return max(totals)
# I really like this one, this is just so pure

#! alternative-solution-2
from re import findall

def solve(s):
    return max(map(len, findall("[aeiou]+", s)))
# The findall() function returns a list containing all matches.
# also, it really makes a lot of sense to use len function as map's
# first argument.

#! alternative-solution-3
import re

def solve(s):
    return max(len(x.group(0)) for x in re.finditer(r'[aeiou]+', s))
# .group() returns the part of the string where there was a match
# see here for finditer: https://www.pythontutorial.net/python-regex/python-regex-finditer/

