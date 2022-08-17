'''
https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
'''

# my solution
def get_sum(a,b):
    if a == b:
        return a
    elif a > b:
        return sum([el for el in range(b, a + 1)])
    else:
        return sum([el for el in range(a, b + 1)])

#! alternative-solution-1
def get_sum(a,b):
    return sum(range(min(a, b), max(a, b) + 1))
# holy molly, this is clever

#! alternative-solution-2
def get_sum(a, b):
    return (a + b) * (abs(a - b) + 1) // 2
# I actually have thought of this myself but ditched for using the sum 
# method. This is obviosly way faster than sum method since it is constant
