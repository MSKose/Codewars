'''
https://www.codewars.com/kata/566044325f8fddc1c000002c

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
'''

# my solution
def even_chars(st): 
    if (len(st) < 2 or len(st) > 100): return "invalid string"

    return list(st[1::2])

#! alternative-solution
def even_chars(st): 
    return list(st[1::2]) if 2<=len(st)<=100 else "invalid string" 
'''
didn't know you could use the <=> signs just like in maths. I am 
surprised since this was not possible in js.
lol, just checked and saw that this is possible in js too. smh
'''