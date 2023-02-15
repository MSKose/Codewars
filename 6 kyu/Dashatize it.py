'''
https://www.codewars.com/kata/58223370aef9fc03fd000071

Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "None".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
'''

# my solution
import re

def dashatize(n):
    x = re.sub(r"\d", lambda x: '-' + x.group() + '-' if int(x.group()) % 2 else x.group(), str(n))
    return '-'.join(x.split('--')).strip('-')

#! alternative-solution
from re import findall

def dashatize(num):
    return '-'.join(findall('([13579]|[02468]+)', str(num))) or 'None'