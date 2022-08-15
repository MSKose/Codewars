'''
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
'''

# my solution
def count_sheep(n):
    result = ''
    for x in range(n):
        result += f"{x + 1} sheep..."
    return result

#! alternative-solution
def count_sheep(n):
    return ''.join(f"{i} sheep..." for i in range(1,n+1))
    