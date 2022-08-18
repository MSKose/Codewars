'''
https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/

Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
'''

# my solution
def combine(*obj):
    result = {}
    for el in list(obj):
        for i in el:
            if i in result:    # checking if key i already exists in result dict
                result[i] += el[i]
            else:
                result[i] = el[i]
    return result

#! alternative-solution-1
def combine(*bs):
    c = {}
    for b in bs:
        for k, v in b.items():
            c[k] = v + c.get(k, 0)
    return c
# get() method's second argument is optional and it returns it 
# if the specified key does not exist.

#! alternative-solution-2
from collections import Counter

def combine(*args):
    return sum((Counter(a) for a in args), Counter())
# see the Counter() subclass for dictionaries
