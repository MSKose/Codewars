'''
https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
'''

# my solution
def find_needle(haystack):
    for idx, x in enumerate(haystack):
        if x == "needle":
            return f"found the needle at position {idx}"
# had to look up enumerate on the internet. It's a shame python 
# does to have the for loops the way js has it. 

#! alternative-solution
def find_needle(haystack):
    return f'found the needle at position {haystack.index("needle")}'
# so apparantly index() in python is similar to indexOf() method in js