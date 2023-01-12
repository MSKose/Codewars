'''
https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
'''

# my solution
def reverse(n):
    reversed_n = 0
    
    while n > 0:
        reversed_n = reversed_n * 10 + n % 10
        n = n // 10
        
    return reversed_n