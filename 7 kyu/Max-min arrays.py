'''
https://www.codewars.com/kata/5a090c4e697598d0b9000004

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
'''

# my solution
def solve(arr):
    new_arr = sorted(arr)
    min_index_counter = 1
    max_index_counter = len(new_arr) - 1 
    res = []
    
    for idx, el in enumerate(new_arr):
        if idx % 2:
            res.append(new_arr[idx - min_index_counter])
            min_index_counter += 1
        else:
            res.append(new_arr[max_index_counter])  
            max_index_counter -= 1
        
    return res