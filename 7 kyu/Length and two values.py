'''
https://www.codewars.com/kata/62a611067274990047f431a8

Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
'''

# my solution
def alternate(n, first_value, second_value):
    return [second_value if i%2 else first_value for i in range(n)]