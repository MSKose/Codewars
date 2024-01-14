'''
https://www.codewars.com/kata/565c4e1303a0a006d7000127

Format any integer provided into a string with "," (commas) in the correct places.

Example:

For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.
'''

# my solution
def number_format(n):
    return f'{n:,}'