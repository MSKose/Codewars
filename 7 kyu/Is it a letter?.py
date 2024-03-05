'''
https://www.codewars.com/kata/57a06b07cf1fa58b2b000252

Write a function isItLetter or is_it_letter, which tells us if a given character is an uppercase or lowercase letter.
'''

# my solution
def is_it_letter(s):
    return s.lower() != s.upper()