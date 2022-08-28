'''
https://www.codewars.com/kata/546e2562b03326a88e000020

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
'''

# my solution
def square_digits(num):
    arr = list(str(num))
    x = [str(int(x) ** 2) for x in arr]
    return int(''.join(x))

#! alternative-solution
def square_digits(num):
    ret = ""
    for x in str(num):
        ret += str(int(x)**2)
    return int(ret)
