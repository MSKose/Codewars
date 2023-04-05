'''
https://www.codewars.com/kata/51675d17e0c1bed195000001

In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
'''

# my solution
def solution(digits):
    latest_index = len(digits) - 5
    max = 0
    
    for i in range(0, latest_index + 1):
        num = int(digits[i: i + 5])
        if num > max:
            max = num
        
    return max