'''
https://www.codewars.com/kata/56ee74e7fd6a2c3c7800037e

Write a function unpack() that unpacks a list of elements that can contain objects(int, str, list, tuple, dict, set) within each other without any predefined depth, meaning that there can be many levels of elements contained in one another.

Example:

unpack([None, [1, ({2, 3}, {'foo': 'bar'})]]) == [None, 1, 2, 3, 'foo', 'bar']
Note: you don't have to bother about the order of the elements, especially when unpacking a dict or a set. Just unpack all the elements.
'''

# my solution
def unpack(l):
    res = []
    
    for i in l:
        if isinstance(i, (list, tuple)):
            res.extend(unpack(i))
        elif isinstance(i, dict):
            [res.extend(unpack([k, v])) for k, v in i.items()]
        elif isinstance(i, set):
            res.extend(list(i))
        else:
            res.append(i)
            
    return res