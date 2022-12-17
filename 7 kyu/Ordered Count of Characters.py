'''
https://www.codewars.com/kata/57a6633153ba33189e000074

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
'''

# my solution
def ordered_count(inp):
    dict = {}
    
    for i in inp:
        if i not in dict:
            dict[i] = 1
        else:
            dict[i] += 1
    
    return [(key, inp.count(key)) for key in dict]

#! alternative-solution
from collections import Counter

def ordered_count(input):
    return list(Counter(input).items())

#! alternative-solution
def ordered_count(inp):
    return [(i, inp.count(i)) for i in sorted(set(inp), key=inp.index)]