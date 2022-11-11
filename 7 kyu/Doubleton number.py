'''
https://www.codewars.com/kata/604287495a72ae00131685c7

We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) == 121
doubleton(1234) == 1311
doubleton(10) == 12
'''

# my solution
def doubleton(num):
    for i in range(num + 1, 1000001):
        if len(set(str(i))) == 2:
            return i

#! alternative-solution
def doubleton(n):
    while len(set(str(n := n + 1))) != 2:
        pass
    return n
# so apparently := is called the walrus operator. see: https://stackoverflow.com/a/63876683