'''
https://www.codewars.com/kata/57f222ce69e09c3630000212

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
'''

# my solution
def well(x):
    y = len([i for i in x if i == "good"])
    return "Fail!" if y < 1 else "Publish!" if y < 3  else "I smell a series!"

#! alternative-solution
well = lambda x: ('Fail!','Publish!','I smell a series!')[('good' in x) + (x.count('good')>2)]
# noice!