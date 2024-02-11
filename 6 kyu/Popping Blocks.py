'''
https://www.codewars.com/kata/651bfcbcdb0e8b104175b97e

When two blocks of the same "type" are adjacent to each other, the entire contiguous block disappears (pops off). If this occurs, this can allow previously separated blocks to be in contact with each other, setting off a chain reaction. After each pop, the remaining items get pushed back before popping the next consecutive items.

This will continue until each block is surrounded by a different block. If the first round has multiple poppable blocks, pop starting from the left.

Here's a demonstration:

["A", "B", "C", "C", "B", "D", "A"]
// The two adjacent Cs pop off

["A", "B", "B", "D", "A"]
// Two adjacent Bs pop off

["A", "D", "A"]
// No more blocks can be popped off
Another demonstration:

["A", "B", "A", "A", "A", "B", "B"]
# The three adjacent As will pop off
# (before the two adjacent Bs)

["A", "B", "B", "B"]
# 3 adjacent Bs pop off

["A"]
# Final result
Examples
["B", "B", "A", "C", "A", "A", "C"] ➞ ["A"]

["B", "B", "C", "C", "A", "A", "A"] ➞ []

["C", "A", "C"] ➞ ["C", "A", "C"]

['ab', 'ab', 'cd', 'cx', 'B'], ['cd', 'cx', 'B']

[] ➞ []
Notes
0 <= len(lst) <= 500
Blocks may consist of several characters.
'''

# my solution
def pop_blocks(lst):
    if len(lst) < 2:
        return lst
    
    adjacent_val = False
    adj_start_index = None
    adj_end_index = None
    
    for i in range(1, len(lst)):
        if lst[i] == lst[i-1]:
            if not adjacent_val:
                adjacent_val = True
                adj_start_index = i - 1
            adj_end_index = i
        elif adjacent_val:
            break
    
    if adjacent_val:
        lst = lst[:adj_start_index] + lst[adj_end_index + 1:]
        
    return pop_blocks(lst) if adjacent_val else lst