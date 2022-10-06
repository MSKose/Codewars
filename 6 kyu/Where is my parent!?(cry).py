'''
https://www.codewars.com/kata/58539230879867a8cd00011c/

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
'''

# my solution
def find_children(str):
    if not str: return ''
    
    x = sorted(str.lower())
    result = ''
    
    for idx, el in enumerate(x):
        if idx == 0 or x[idx-1] != el:
            result += el.upper()
        else:
            result += el
            
    return result

#! alternative-solution-1
def find_children(dancing_brigade):
    s = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    return ''.join(sorted(dancing_brigade, key = s.index))
# wow, amazing

#! alternative-solution-2
def find_children(dancing_brigade):
    return ''.join( sorted(dancing_brigade, key=lambda l: (l.lower(),l)) )
# Here, the letters are sorted first by lowercase letters, then, when the 
# lowercase version are equal, they are compared with their case because