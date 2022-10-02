'''
https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/

Your task is to create a function called addArrays, which takes two arrays consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962
'''

# my solution
def sum_arrays(arr1,arr2):
    if not arr1 and not arr2: return []
    if not arr1: return arr2
    if not arr2: return arr1

    num1 = int(''.join(str(i) for i in arr1)) 
    num2 = int(''.join(str(i) for i in arr2))

    if (num1 + num2) < 0:
        sum = [int(i) for i in str(num1 + num2) if i != '-']
        sum[0] *= -1
        return sum
    
    return [int(i) for i in str(num1 + num2)]