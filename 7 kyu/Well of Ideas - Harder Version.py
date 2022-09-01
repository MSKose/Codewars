'''
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
'''

# my solution
def well(arr):
    string = str(arr).lower().count("good") 
    return "Fail!" if string == 0 else "I smell a series!" if string > 2 else "Publish!"
    
#! alternative-solution
def well(arr):
    count = sum([str(y).lower() == "good" for x in arr for y in x])
    return "I smell a series!" if count > 2 else "Publish!" if count > 0 else "Fail!"
# this solution is more ideal than mine since if the array also included items like "good something"
# my solution would count that as a valid "good" but it should not. Therefore, accessing the flattened
# list is the right way.