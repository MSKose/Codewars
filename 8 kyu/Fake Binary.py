'''
https://www.codewars.com/kata/57eae65a4321032ce000002d/

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
'''

# my solution
def fake_bin(x):
    arr = [int(a) for a in x]
    result = ""
    
    for n in arr:
        if n < 5:
            result += "0"
        else: 
            result += "1"
            
    return result

#! alternative-solution-1
def fake_bin(s):
  return ''.join('0' if int(c) < 5 else '1' for c in s)
'''
See generator expression to understand how they did not need to write [] and () was suffice.
See: https://www.pythonlikeyoumeanit.com/Module2_EssentialsOfPython/Generators_and_Comprehensions.html
only recently switching from js, join method, along with many other like map, filter, reduce and split
does feel different with how chaining with dot notation is not very likely in python. Python's syntax 
instead is something more like list(len()). Thus chaining with paranthesis, if that's the right choice
of words
'''

#! alternative-solution-2
def fake_bin(x):
    result = ""
    for num in x:
        if int(num) < 5:
            result = result + "0"
        else:
            result = result + "1"
    return result

#! alternative-solution-3
import string

def fake_bin(s):
    return s.translate(string.maketrans('0123456789', '0000011111'))
