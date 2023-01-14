'''
https://www.codewars.com/kata/5c44b0b200ce187106452139

Create a function args_count, that returns the count of passed arguments

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
'''

# my solution
def args_count(*args, **kwargs):
    return len(args) + len(kwargs)