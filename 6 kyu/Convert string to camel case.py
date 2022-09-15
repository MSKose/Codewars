'''
https://www.codewars.com/kata/517abf86da9663f1d2000003/

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
'''

# my solution
def to_camel_case(text):
    my_list = [el.upper() if text[idx-1] == '-' or text[idx-1] == '_' else el for idx, el in enumerate(text)]
    return ''.join(x for x in my_list if x != '-' and x != '_')

#! alternative-solution-1
import re
def to_camel_case(text):
    return re.sub('[_-](.)', lambda x: x.group(1).upper(), text)
# group(1) captures the first parenthesized subgroup, that is, the character after dash/underscore in our case
# also see: https://docs.python.org/3/library/re.html#re.Match.group


#! alternative-solution-2
def to_camel_case(text):
    return text[:1] + text.title()[1:].replace('_', '').replace('-', '')