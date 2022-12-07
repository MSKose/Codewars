'''
https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
'''

# my solution
import re

def replace_exclamation(s):
    return re.sub("(?i)[aeiou]", "!", s)

#!alternative-solution
def replace_exclamation(s):
    return s.translate(s.maketrans('aeiouAEIOU', '!!!!!!!!!!'))