'''
https://www.codewars.com/kata/56747fd5cb988479af000028

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
'''

# my solution
def get_middle(s):
    if len(s) % 2 == 1:
        x = int(len(s) / 2)
        return s[x]
    else:
        y = int(len(s) / 2)
        return s[y - 1] + s[y]

#! alternative-solution-1
def get_middle(s):
    i = (len(s) - 1) // 2
    return s[i:-i] or s
# this is self explanatory but just wanted to comment for the "or s" part.
# that part exists since for if the length is 2 or shorter s[i:-i] will turn
# an empty string which is not the anwser. So what the author did is he used 
# boolean power since empty string is False in Python, it will evaluate the 
# second part which is just the whole s. This is clever really

#! alternative-solution-2
def get_middle(s):
    index, odd = divmod(len(s), 2)
    return s[index] if odd else s[index - 1:index + 1]
# see the divmod() method on the internet. This is clever

#! alternative-solution-3
def get_middle(s):
    while len(s) > 2:
        s = s[1:-1]
    return s
# holy molly. This is out of my league lol.