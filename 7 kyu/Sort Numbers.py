'''
https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
'''

# my solution
def solution(nums):
    try:
        return sorted(nums)
    except:
        return []
    
#! alternative-solution-1
def solution(nums):
    return sorted(nums or [])

#! alternative-solution-2
def solution(nums):
    return sorted(nums) if nums else []