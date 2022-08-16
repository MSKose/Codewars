'''
https://www.codewars.com/kata/51c8991dee245d7ddf00000e/

Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
'''

# my solution
def reverse_words(s):
    return ' '.join(s.split(' ')[::-1])

#! alternative-solution
def reverseWords(string):
    return ' '.join(reversed(string.split())) 