'''
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
'''

# my solution
def find_uniq(arr):
    p = set(arr)
    return [i for i in p if arr.count(i) == 1][0]

#! alternative-solution-1
def find_uniq(arr):
    a, b = set(arr)
    return a if arr.count(a) == 1 else b

#! alternative-solution-2
def find_uniq(arr):
    a = sorted(arr)
    return a[0] if a[0] != a[1] else a[-1]