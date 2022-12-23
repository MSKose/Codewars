'''
https://www.codewars.com/kata/550554fd08b86f84fe000a58

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
'''

# my solution
import re

def in_array(array1, array2):
    string = ' '.join(array2)
    return sorted(i for i in set(array1) if re.search(i, string) != None)

# my second solution
def in_array(array1, array2):
    arr =[]
    
    for i in array1:
        for k in array2:
            if len(k.split(i)) > 1:
                arr.append(i)
            
    return sorted(set(arr))

