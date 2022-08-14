'''
https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
'''

# my solution
def count_positives_sum_negatives(arr):
    count = 0
    sum = 0
    
    for idx, el in enumerate(arr):
        if el > 0: 
            count = count + 1
        if el < 0: 
            sum += el
            
    return [count, sum] if arr else []

#! alternative-solution
def count_positives_sum_negatives(arr):
    pos = sum(1 for x in arr if x > 0)
    neg = sum(x for x in arr if x < 0)
    return [pos, neg] if len(arr) else []
# see list comprehension for the within of sum method but the basic
# syntax is; [expression for item in iterable if condition == True]