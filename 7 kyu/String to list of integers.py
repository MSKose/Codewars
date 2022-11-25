'''
https://www.codewars.com/kata/5727868888095bdf5c001d3d

Given a string containing a list of integers separated by commas, write the function string_to_int_list(s) that takes said string and returns a new list containing all integers present in the string, preserving the order.

For example, give the string "-1,2,3,4,5", the function string_to_int_list() should return [-1,2,3,4,5]

Please note that there can be one or more consecutive commas whithout numbers, like so: "-1,-2,,,,,,3,4,5,,6"
'''

# my solution
import re

def string_to_int_list(s):
    return [int(i) for i in re.split('[,]+', s) if i != '']