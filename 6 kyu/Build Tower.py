'''
https://www.codewars.com/kata/576757b1df89ecf5bd00073b

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

'''

# my solution
def tower_builder(n):
    result = []

    for idx in range(1, n + 1):
        ast = '*' * (2 * idx - 1)
        just = ' ' * (n - idx)
        result.append(f"{just}{ast}{just}")
        
    return result

#! alternative-solution
def tower_builder(n_floors):
    length = n_floors*2
    len_1 = length - 1
    return [('*'* i).center(len_1) for i in range(1, length, 2)]
# didn't know about the center method