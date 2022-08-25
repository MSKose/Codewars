'''
https://www.codewars.com/kata/56a4872cbb65f3a610000026/

Let us begin with an example:

Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:

max_rot(56789) should return 68957

max_rot(38458215) should return 85821534
'''

# my solution
def max_rot(n):
    result = [n]
    val = str(n)
    
    for i in range(len(val)):
        val = val[:i] + val[i+1:] + val[i]
        result.append(val)
        
    return max(int(x) for x in result)

#! alternative-solution
def max_rot(n):
    s, arr = str(n), [n]
    for i in range(len(s)):
        s = s[:i] + s[i+1:] + s[i]
        arr.append(int(s))
    return max(arr)
# looks like I could have just appended the int(val) and get rid of the
# complication with the max() problem in the end