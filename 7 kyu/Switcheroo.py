'''
https://www.codewars.com/kata/57f759bb664021a30300007d

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
'''

# my solution
def switcheroo(s):
    return ''.join('a' if el == 'b' else 'b' if el == 'a' else 'c' for el in s)

#! alternative-solution
def switcheroo(s):
    return s.translate(str.maketrans('ab','ba'))