'''
https://www.codewars.com/kata/5546180ca783b6d2d5000062

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
'''

# my solution
def squares(x, n):
    if n <= 0: 
        return []
    my_list = [x]
    for el, idx in enumerate(range(n - 1), 1):
        my_list.append(my_list[idx] ** 2)
    return my_list

#! alternative-solution
def squares(x,n):
    return [x**(2**i) for i in range(n)]