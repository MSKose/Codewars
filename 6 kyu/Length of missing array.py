'''
https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

DESCRIPTION:
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
'''

# my solution
def get_length_of_missing_array(array_of_arrays):
    if array_of_arrays is None or not array_of_arrays:
        return 0
    
    arrLens = sorted(len(x) if x is not None else 0 for x in array_of_arrays)
    
    if arrLens[0] == 0:
        return 0
    
    for i in range(len(arrLens)-1):
        if (arrLens[i] + 1) != arrLens[i+1]:
            return arrLens[i] + 1