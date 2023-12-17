'''
https://www.codewars.com/kata/5ce6728c939bf80029988b57

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.

More examples in test cases. Good luck!
'''

# my solution
def total_consecutive_num_sum(first_num, last_num):
    return (first_num + last_num) * (last_num - first_num + 1) // 2

def solve(st):
    min_val = float('inf')
    max_val = float('-inf')
    total_sum = 0

    for char in st:
        point = ord(char)
        min_val = min(min_val, point)
        max_val = max(max_val, point)
        total_sum += point

    return total_consecutive_num_sum(min_val, max_val) == total_sum