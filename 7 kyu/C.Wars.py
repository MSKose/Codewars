'''
https://www.codewars.com/kata/55968ab32cf633c3f8000008

Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
'''

# my solution
def initials(name):
    s = name.split()
    return '.'.join(el.title() if idx == len(s) - 1 else el[0].upper() for idx, el in enumerate(s))