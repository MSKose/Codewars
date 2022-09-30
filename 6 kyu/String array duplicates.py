'''
https://www.codewars.com/kata/59f08f89a5e129c543000069/

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
'''

# my solution
def dup(arr):
    result = []
    
    for s in arr:
        string = ''
        for idx, el in enumerate(s):
            if idx > 0:
                if el != s[idx - 1]:
                    string += el
                
        result.append(s[0] + string)
    
    return result

#! alternative-solution
import re

def dup(arry):
    return list(map(lambda s: re.sub(r'(\w)\1+', r'\1', s), arry))