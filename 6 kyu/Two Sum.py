'''
https://www.codewars.com/kata/52c31f8e6605bcc646000082/

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
'''

# my solution
def two_sum(numbers, target):
    
    for idx, el in enumerate(numbers):
        for idx2, el2 in enumerate(numbers):
            if idx != idx2 and el2 + el == target:
                return [idx , idx2]
# god, I hate enumerate for the reason below

#! alternative-solution-1
def two_sum(numbers, target):
    for i, val1 in enumerate(numbers[:-1]):
        for j, val2 in enumerate(numbers[i+1:]):
            if val1 + val2 == target:
                return (i, j+i+1)
# so this solution was my first try but I was wrong with the j+i+1 part.
# I, instead, wrote j+1

#! alternative-solution-2
def two_sum(nums, target):
    d = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in d:
            return [d[diff], i]
        d[num] = i
# This is what came to my mind before starting to solve the question
# I think this is the most optimal way