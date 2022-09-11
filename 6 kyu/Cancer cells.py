'''
https://www.codewars.com/kata/5931614bb2f657c18c0001c3/

Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
'''

# my solution
import re

def cut_cancer_cells(organism):
    x = re.sub("([a-z]?)C([a-z]?)", "", organism)
    y = re.sub("c", "", x)
    return y
# this is my first time ever I have used the ? on my own. I had the feeling I 
# could have combined the y into x, that is, in one sub. I wasn't wrong, see the 
# alternative solution below:

#! alternative-solution
import re

reg = re.compile(r"c|[a-z]?C[a-z]?")
def cut_cancer_cells(s):
    return reg.sub("", s)