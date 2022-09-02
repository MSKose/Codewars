'''
https://www.codewars.com/kata/5a262cfb8f27f217f700000b

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.
'''

# my solution
def solve(a,b):
    x = ''.join(i for i in a if i not in b)
    y = ''.join(i for i in b if i not in a)
    return x + y

#! alternative-solution-1
def solve(a,b):
    s = set(a) & set(b)
    return ''.join(c for c in a+b if c not in s)
# see set intersection (&) for this question

#! alternative-solution-2
def solve(a,b):
    keep = set(a) ^ set(b)
    return ''.join(ch for ch in a + b if ch in keep)
# see set symmetric difference (ˆ) for this question