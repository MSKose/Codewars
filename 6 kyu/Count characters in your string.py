'''
https://www.codewars.com/kata/52efefcbcdf57161d4000091/

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
'''

# my solution
def count(str):
    dict = {}
    
    for i in str:
        if i in dict:
            dict[i] += 1
        else:
            dict[i] = 1
            
    return dict

#! alternative-solution
from collections import Counter

def count(string):
    return Counter(string)
# been seeing is Counter() all around lately. And I have the feeling this 
# is more pythonic way to count a key-value