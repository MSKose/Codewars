'''
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
'''

# my solution
def remove_every_other(my_list):
    return [el for inx, el in enumerate(my_list) if not inx % 2]

#! alternative-solution
def remove_every_other(my_list):
    return my_list[::2]
# damn, with slicing in Python everything looks simple. Also an explanation from a comment on this solution:
# "the slicing syntax is [beginning:end(not inclusive):step size]. That's also why [::-1] will return the list reversed"