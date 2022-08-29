'''
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
'''

# my solution
def solution(string, ending):
    return ending == string[-(len(ending)):] if ending else True

#! alternative-solution-1
def solution(string, ending):
    return string.endswith(ending)
# oh, the endswith method. smh

#! alternative-solution-2
def solution(string, ending):
    return ending in string[-len(ending):]
