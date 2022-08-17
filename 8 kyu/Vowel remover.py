'''
https://www.codewars.com/kata/5547929140907378f9000039/

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
'''

# my solution
def shortcut( s ):
    x = ["a", "e", "i", "o", "u"]
    result = s[:]
    for el in s:
        if el in x:
            result = result.replace(el, '')
    return result

#! alternative-solution-1
def shortcut(s):
    return ''.join(c for c in s if c not in 'aeiou')

#! alternative-solution-2
import re

def shortcut( s ):
    return re.sub('[aoeui]', '', s)
# re is Regex in python. And sub() method is a replacement method which
# takes re.sub(argument_to_be_replaced, the_replacement, the_string)