'''
https://www.codewars.com/kata/5503013e34137eeeaa001648

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
'''

# my solution
def diamond(n):
    if n <= 0 or n % 2 == 0:
        return None
    if n == 1:
        return "*\n"

    x = (n + 1) // 2
    arr = []
    for i in range(1, x):
        arr.append(' ' * (x - i) + '*' * (2 * i - 1) + '\n')
    top = ''.join(arr)
    bottom = ''.join(arr[::-1])

    return top + '*' * n + '\n' + bottom