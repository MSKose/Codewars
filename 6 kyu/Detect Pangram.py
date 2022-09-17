'''
https://www.codewars.com/kata/545cedaa9943f7fe7b000048

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
'''

# my solution
import re

def is_pangram(s):
    q = re.sub("[^a-zA-Z]", "", s.lower())
    return len(set(q)) == 26

#! alternative-solution
import string

def is_pangram(s):
    s = s.lower()
    for token in string.ascii_lowercase:
        if token not in s:
            return False
    return True