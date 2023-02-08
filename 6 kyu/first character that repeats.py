'''
https://www.codewars.com/kata/54f9f4d7c41722304e000bbb

Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
'''

# my solution
from collections import Counter

def first_dup(s):
    for key, value in Counter(s).items():
        if value > 1:
            return key