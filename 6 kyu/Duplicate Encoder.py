'''
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
'''

# my solution
from collections import Counter

def duplicate_encode(w):
    dict = Counter(w.lower())
    result = ''
    
    for i in w.lower():
        if dict[i] == 1:
            result += '('
        else: result += ')'
        
    return result

#! alternative-solution
def duplicate_encode(word):
    word = word.lower()
    
    dict = {}
    for char in word:
        dict[char] = ')' if char in dict else '('
    
    return ''.join( dict[char] for char in word )
# so elegant, love it!