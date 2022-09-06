'''
https://www.codewars.com/kata/5208f99aee097e6552000148/

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
'''

# my solution:
def solution(w):
    return ''.join(x if x.islower() else ' ' + x for x in w)

#! alternative-solution
import re
def solution(s):
    return re.sub('([A-Z])', r' \1', s)