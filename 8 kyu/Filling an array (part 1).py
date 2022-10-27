'''
https://www.codewars.com/kata/571d42206414b103dc0006a1

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
'''

# my solution
def arr(n=0): 
    return [i for i in range(0, n)] if n else []

#! alternative-solution-1
def arr(n=0): 
    return [*range(n)]

#! alternative-solution-2
def arr(n=0): 
    return list(range(n))