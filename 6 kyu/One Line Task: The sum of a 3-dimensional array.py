'''
https://www.codewars.com/kata/65b3fdc2df771d0010b9c3d0

Write a function cube_matrix_sum that calculates the sum of the elements of a 3-dimensional array.

The function should be one line long and less than 48 characters long.

Imports are prohibited

Example

cube_matrix = [
  [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  [[10,11,12],[13,14,15],[16,17,18]],
  [[19,20,21],[22,23,24],[25,26,27]]
]
cube_matrix_sum(cube_matrix) == 378
All elements of an array of type int or float. There may be negative elements.

This is my first kata and I hope you'll enjoy it :).

Best of luck!
'''

# my solution
cube_matrix_sum=lambda x:sum(sum(sum(x,[]),[]))