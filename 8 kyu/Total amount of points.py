'''
https://www.codewars.com/kata/5bb904724c47249b10000131

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
'''

# my solution
def points(games):
    count = 0
        
    for x in games:
        if x[0] > x[-1]:
            count += 3
        elif x[0] < x[-1]:
            continue
        else:
            count += 1
        
    return count
    
#! alternative-solution
def points(a):
    return sum((x >= y) + 2 * (x > y) for x, y in (s.split(":") for s in a))
'''
explanation:
(x >= y) + 2 * (x > y) - this compares scores (alphabetically, but that's okay with current constraints):

if x is less than y, this becomes 0 + 2 * 0 => 0
if x is greater or equal to y, this becomes 1 + 2 * 0 => 1
and if x is strictly greater than y, this becomes 1 + 2 * 1 => 3
'''