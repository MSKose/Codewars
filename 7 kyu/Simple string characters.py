'''
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
'''

# my solution
import re

def solve(s):
    x = len(re.findall(r"[A-Z]", s))
    y = len(re.findall(r"[a-z]", s))
    z = len(re.findall(r"[0-9]", s))
    k = len(s) - (x+y+z)
    
    return [x,y,z,k] 

#! alternative-solution-1
def solve(s):
  uc, lc, num, sp = 0, 0, 0, 0
  for ch in s:
    if ch.isupper(): uc += 1
    elif ch.islower(): lc += 1
    elif ch.isdigit(): num += 1
    else: sp += 1
  return [uc, lc, num, sp]

#! alternative-solution-2
import re
def solve(s):
    return [len(re.findall(i,s)) for i in ('[A-Z]','[a-z]','\d','[^a-zA-Z0-9]')]