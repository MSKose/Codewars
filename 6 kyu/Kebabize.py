'''
https://www.codewars.com/kata/57f8ff867a28db569e000c4a

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
'''

# my solution
import re

def kebabize(string):
    string = re.sub("(?i)[^a-z]", "", string)
    str = ''
    
    for idx, el in enumerate(string):
        if idx == 0 and el.isupper():
            str += el.lower()
        elif el.isupper():
            str += '-' + el.lower()
        else:
            str += el
            
    return str

#! alternative-solution-1
def kebabize(s):
    return ''.join(c if c.islower() else '-' + c.lower() for c in s if c.isalpha()).strip('-')

#! alternative-solution-2
import re

def kebabize(s):
    return re.sub('\B([A-Z])', r'-\1', re.sub('\d', '', s)).lower()