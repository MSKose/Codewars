'''
https://www.codewars.com/kata/52a112d9488f506ae7000b95

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
'''

# my solution
def is_int_array(arr):
    if not arr and not isinstance(arr, list):
        return False
    if len(arr) == 0: 
        return True
    return all(i and not isinstance(i, str) and i == int(i) for i in arr)