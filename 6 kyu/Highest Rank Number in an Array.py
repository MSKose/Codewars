'''
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
'''

# my solution
def highest_rank(arr):
    max = -99999
    rep = 0
    
    for i in set(arr):
        x = arr.count(i)
        if x > max:
            max = x
            rep = i
        elif x == max and rep < i:
            rep = i
            
    return rep