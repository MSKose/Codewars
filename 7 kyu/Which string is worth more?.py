'''
https://www.codewars.com/kata/5840586b5225616069000001

You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

In the event of a tie, you should return the first string, i.e. a.
'''

# my solution
def highest_value(a, b):
    x = sum(ord(i) for i in a)
    y = sum(ord(i) for i in b)
    return a if x > y else b if x < y else a

#! alternative-solution
def highest_value(a, b):
    return max(a, b, key=lambda s: sum(map(ord, s)))