'''
https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
'''

# my solution
def sortme(words):
    return sorted(words, key=lambda x: x.lower())