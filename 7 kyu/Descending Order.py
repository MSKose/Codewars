'''
https://www.codewars.com/kata/5467e4d82edf8bbf40000155

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
'''

# my solution
def descending_order(num):
    a = list(str(num))
    a.sort(reverse=True)
    return int(''.join(a))

#! alternative-solution
def Descending_Order(num):
    return int("".join(sorted(str(num), reverse=True)))
# so apparantly sorted() converts a string to an array and the syntax is:
# sorted(iterable, key=key, reverse=reverse)