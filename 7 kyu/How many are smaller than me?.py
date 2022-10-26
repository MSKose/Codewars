'''
https://www.codewars.com/kata/56a1c074f87bc2201200002e


Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
'''

# my solution
def smaller(arr):
    result = []
    
    for idx1, el1 in enumerate(arr):
        count = 0
        for idx2, el2 in enumerate(arr[idx1+1:]):
            if el2 < el1:
                count += 1
        result.append(count)
        
    return result

#! alternative-solution
def smaller(arr):
    return [sum(b < a for b in arr[i + 1:]) for i, a in enumerate(arr)]