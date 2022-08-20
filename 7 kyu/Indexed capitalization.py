'''
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
'''

# my solution
def capitalize(s,ind):
    x = ''
    for idx, el in enumerate(s):
        if idx in ind:
            x += el.upper()
        else:
            x += el
    return x

#! alternative-solution
def capitalize(s,ind):
    return ''.join(c.upper() if i in ind else c for i, c in enumerate(s))

x = 'abcdef'
print(x[:1], x[1:])