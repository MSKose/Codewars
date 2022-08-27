'''
https://www.codewars.com/kata/5ba38ba180824a86850000f7

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
'''

# my solution
def solve(arr): 
    result = []
    
    for idx, el in enumerate(arr):
        
        if idx == len(arr) - arr[::-1].index(el) - 1:
            result.append(el)
            
    return result

#! alternative-solution-1
def solve(arr): 
    re = []
    for i in arr[::-1]:
        if i not in re:
            re.append(i)
    return re[::-1]
# I love this one

#! alternative-solution-2
def solve(arr): 
    return [a for i,a in enumerate(arr) if a not in arr[i+1:]]

