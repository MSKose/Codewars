'''
https://www.codewars.com/kata/5939ab6eed348a945f0007b2

When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
'''

# my solution
from functools import reduce

def longest_word(string_of_words):
    return reduce(lambda a, b: a if len(a) > len(b) else b, string_of_words.split(" "))