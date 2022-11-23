'''
https://www.codewars.com/kata/587731fda577b3d1b0001196

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

camelcase("hello case") => HelloCase
camelcase("camel case word") => CamelCaseWord
Don't forget to rate this kata! Thanks :)
'''

# my solution
def camel_case(string):
    return ''.join(word.capitalize() for word in string.split())

# my second solution
import re

def camel_case(string):
    return re.sub('\s+', '', string.title())

