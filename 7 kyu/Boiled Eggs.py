'''
https://www.codewars.com/kata/52b5247074ea613a09000164

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
'''

# my solution
from math import ceil

def cooking_time(eggs):
    return ceil(eggs / 8) * 5