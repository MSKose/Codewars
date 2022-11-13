'''
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
'''

# my solution
def paperwork(n, m):
    return (n > 0 and m > 0) * n * m

#! alternative-solution
def paperwork(n, m):
    return max(n, 0)*max(m, 0)