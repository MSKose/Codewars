'''
https://www.codewars.com/kata/586d6cefbcc21eed7a001155

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
'''

# my solution
def longest_repetition(s):
    if not s: 
        return ('', 0)
    
    count = 0
    longest = ('', 0)
    
    for idx, el in enumerate(s):
        if idx != len(s) - 1 and el == s[idx + 1]:
            count += 1
        else:
            count += 1
            if longest[1] < count:
                longest = (el, count)
            count = 0
    
    return longest