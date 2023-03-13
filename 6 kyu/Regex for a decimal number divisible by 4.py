'''
https://www.codewars.com/kata/5bf6bd7a3efceeda4700011f

Your task is to write a regular expression that matches positive decimal integers divisible by 4. Negative numbers should be rejected, but leading zeroes are permitted.

Random tests can consist of numbers, ascii letters, some puctuation and brackets. But no need to check for line breaks (\n) and non-ASCII chatracters, nothing that fancy in the tests.

There is 50 characters limit for this regex to avoid hardcoding and keep the "puzzle" status :) Good luck!
'''

# my solution
div_4 = '(0|4|8)$|\d*([02468][048]|[13579][26])$'