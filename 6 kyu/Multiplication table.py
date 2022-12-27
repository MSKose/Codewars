'''
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
'''

# my solution
def multiplication_table(size):
    arr = []
    
    for i in range(size):
        arr2 = []
        for k in range(size):
            arr2.append((k + 1) * (i + 1))
        arr.append(arr2)
        
    return arr

#! alternative-solution
def multiplication_table(n):
    return [list(range(m, m * n + 1, m)) for m in range(1, n + 1)]