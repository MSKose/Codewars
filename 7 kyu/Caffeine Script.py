'''
https://www.codewars.com/kata/5434283682b0fdb0420000e6

Complete the function which takes a non-zero integer as its argument.

If the integer is divisible by 3, return the string "Java".

If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

If one of the condition above is true and the integer is even, add "Script" to the end of the string.

If none of the condition is true, return the string "mocha_missing!"

Examples
1   -->  "mocha_missing!"
3   -->  "Java"
6   -->  "JavaScript"
12  -->  "CoffeeScript"
'''

# my solution
def caffeine_buzz(n):
    if (not n % 3) and (not n % 4):
        return "CoffeeScript"
    elif not n % 3:
        if not n % 2:
            return "JavaScript"
        return "Java"
    else:
        return "mocha_missing!"

#! alternative-solution
result = ("mocha_missing!", "Java", "JavaScript", "CoffeeScript")

def caffeineBuzz(n):
    return result[(not n%3) + (not n%6) + (not n%12)]