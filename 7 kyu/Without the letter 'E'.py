'''
https://www.codewars.com/kata/594b8e182fa0a0d7fc000875

Is it possible to write a book without the letter 'e' ?

Task
Given String str, return:

How many "e" does it contain (case-insensitive) in string format.
If given String doesn't contain any "e", return: "There is no "e"."
If given String is empty, return empty String.
If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`
'''

# my solution
def find_e(s):
    if s == None: return None
    if len(s) == 0: return ''
    return str(s.lower().count('e') or 'There is no "e".')