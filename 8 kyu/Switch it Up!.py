'''
https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
'''

# my solution
def switch_it_up(number):
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]