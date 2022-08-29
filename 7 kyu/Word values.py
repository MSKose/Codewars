'''
https://www.codewars.com/kata/598d91785d4ce3ec4f000018/

Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.
'''

# my solution
def name_value(arr):
    result =[]
    count = 0
    
    for idx1, el1 in enumerate(arr):
        for el2 in el1:
            if el2 != ' ':
                count += ord(el2) - 96
            
        result.append(count * (idx1 + 1))
        count = 0
        
    return result

#! alternative-solution-1
def nameValue(myList):
    return [sum(ord(c) - 96 for c in word.replace(" ", "")) * (i + 1) for i, word in enumerate(myList)]

#! alternative-solution-2
def name_value(my_list):
    return [(i+1)*count(x) for i,x in enumerate(my_list)]    
def count(string):
    letters = " abcdefghijklmnopqrstuvwxyz"
    return sum(letters.index(x) for x in string)
# Nice touch with the letters string starting with an empty string