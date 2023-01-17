'''
https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
'''

# my solution
def nearest_sq(n):
    rounded_square = round(n ** (1/2))
    return rounded_square ** 2