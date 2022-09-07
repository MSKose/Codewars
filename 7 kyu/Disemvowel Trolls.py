'''
https://www.codewars.com/kata/52fba66badcd10859f00097e

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
'''

# my solution
def disemvowel(p):
    y = "aeiouAEIOU"
    return ''.join(x for x in p if x not in y)

#! alternative-solution-1
import re
def disemvowel(string):
    return re.sub('[aeiou]', '', string, flags = re.IGNORECASE)

#! alternative-solution-2
import re
def disemvowel(string):
    return re.sub(r"[aeiouAEIOU]", "", string)