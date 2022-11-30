'''
https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0

Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
'''

# my solution
def solution(n, d):
    if d <= 0: return []
    return list(map(lambda x: int(x), list(str(n)[-d:])))

#! alternative-solution
def solution(n,d):
    s = str(n)
    return list(map(int,s))[-d if d>0 else len(s):]