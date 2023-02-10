'''
https://www.codewars.com/kata/61a8c3a9e5a7b9004a48ccc2

You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
'''

# my solution
DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

def direction(facing, turn):
    return DIRECTIONS[(DIRECTIONS.index(facing) + turn // 45) % 8]