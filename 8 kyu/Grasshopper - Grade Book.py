'''
https://www.codewars.com/kata/55cbd4ba903825f7970000f5/

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
'''

# my solution
def get_grade(*args):
    x = sum(args) / len(args)
    if x >= 90:
        return "A"
    elif x >= 80:
        return "B"
    elif x >= 70:
        return "C"
    elif x >= 60:
        return "D"
    else:
        return "F"
    
#! alternative-solution
def get_grade(*s):
    match sum(s) // 30:
        case 10 | 9: return 'A'
        case 8: return 'B'
        case 7: return 'C'
        case 6: return 'D'
    return 'F'