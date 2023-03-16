'''
https://www.codewars.com/kata/52fb87703c1351ebd200081f

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
'''

# my solution
def ordinals (x):
    if 4 <= x <= 20: return 'th'
    elif x % 10 == 1: return 'st'
    elif x % 10 == 2: return 'nd'
    elif x % 10 == 3: return 'rd'
    else: return 'th'

def what_century(year):
    num = (int(year[0:2]) if year[2:] == '00' else int(year[0:2]) + 1)
    ord = ordinals(num)
    return str(num) + ord