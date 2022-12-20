'''
https://www.codewars.com/kata/590f5b4a7bbb3e246000007d

You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
Return an empty string if there are no instances of letter in the given string.
'''

# my solution
import re

def comes_after(st, l): 
    return ''.join(re.findall(rf"(?i)(?<={l})[a-z]", st))
# a little explanation: the (?i) is make it search case insensitive and the 
# (?<={l}) part is positive lookbehind

def comes_after(st, letter):
    letter = letter.lower()
    return ''.join(b for a, b in zip(st.lower(), st[1:]) if a == letter and b.isalpha())