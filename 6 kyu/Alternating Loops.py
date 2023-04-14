'''
https://www.codewars.com/kata/55e529bf6c6497394a0000b5

Write

function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
'''

# my solution
def combine(*args):
    arr = []
    counter_index = 0
    total_len = sum(len(i) for i in args)
     
    while counter_index < total_len:
        for i in args:
            if counter_index < len(i):
                arr.append(i[counter_index])
        counter_index += 1

    return arr