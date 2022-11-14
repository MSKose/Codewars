'''
https://www.codewars.com/kata/583ebb9328a0c034490001ba

Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
'''

# my solution
def duplicate_elements(m, n):
    if not m or not n:
        return False
    
    x = len(set([*set(m), *set(n)]))
    y = len(set(m)) + len(set(n))
    return x != y

#! alternative-solution-1
def duplicate_elements(m, n):
    return not set(m).isdisjoint(n)

#! alternative-solution-2
def duplicate_elements(m, n):
    return bool(set(m) & set(n))