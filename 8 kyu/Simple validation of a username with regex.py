'''
https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
'''

# my solution
import re

def validate_usr(username):
    return len(re.findall(r"^[a-z0-9_]{4,16}$", username))