'''
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
'''

# my solution
def remove_char(s):
    return ''.join(item for index, item in enumerate(s) if index != 0 and index != len(s) - 1)
# I'm already getting used to generator comprehension and I love it

#! alternative-solution-1
def remove_char(s):
    return s[1 : -1]
# looks like I am so focused on using generator comprhension that
# I miss simple solutions like this one lol. 

#! alternative-solution-2
def remove_char(s):
    s = list(s)
    s.pop()
    s.pop(0)
    return ''.join(s)
# so pop() method's default is to remove the last element if not specified