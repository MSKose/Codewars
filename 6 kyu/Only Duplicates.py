'''
https://www.codewars.com/kata/5a1dc4baffe75f270200006b

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
'''

# my solution
def only_duplicates(string):
    return ''.join(i for i in string if string.count(i) > 1)