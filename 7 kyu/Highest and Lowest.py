'''
https://www.codewars.com/kata/554b4ac871d6813a03000035

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
'''

# my solution
def high_and_low(numbers):
    arr = [int(x) for x in numbers.split(' ')]
    arr.sort(reverse=True)
    return f"{arr[0]} {arr[-1]}"

#! alternative-solution-1
def high_and_low(numbers):
  numbers = [int(c) for c in numbers.split(' ')]
  return f"{max(numbers)} {min(numbers)}"
# ok, so apparently max() and min() returns the max and min in a iterable

#! alternative-solution-2
def high_and_low(numbers):
    nums = sorted(numbers.split(), key=int)
    return '{} {}'.format(nums[-1], nums[0])
# a reminder that sorted syntax is as follows:
# sorted(iterable, key=key, reverse=reverse)
