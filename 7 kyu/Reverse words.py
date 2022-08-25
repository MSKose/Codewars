'''
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
'''

# my solution
def reverse_words(text):
    return ' '.join(x[::-1] for x in text.split(' '))

#! alternative-solution
import re

def reverse_words(str):
  return re.sub(r'\S+', lambda w: w.group(0)[::-1], str)
# I'm not even sure how this works. Putting it here for maybe 
# I go deep in regex