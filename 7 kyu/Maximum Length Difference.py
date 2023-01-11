'''
https://www.codewars.com/kata/5663f5305102699bad000056

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
'''

# my solution
def mxdiflg(a1, a2):
    if not len(a1) or not len(a2):
        return -1
    
    x = sorted(a1, key=len)
    y = sorted(a2, key=len)
    
    return max(
        len(x[-1]) - len(y[0]),
        len(y[-1]) - len(x[0])
    )