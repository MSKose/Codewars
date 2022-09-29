'''
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
'''

# my solution
import re

def solution(s):
    x = re.findall(".{2}", s)

    if len(s) % 2:
        x.append(s[-1] + '_')
    
    return x

#! alternative-solution-1
import re

def solution(s):
    return re.findall(".{2}", s + "_")
# it makes sense to add s + "_" since if s is even in length originally it'll just ignore the '-'

#! alternative-solution-2
def solution(s):
    result = []
    if len(s) % 2:
        s += '_'
    for i in range(0, len(s), 2):
        result.append(s[i:i+2])
    return result