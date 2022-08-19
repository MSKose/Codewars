'''
https://www.codewars.com/kata/5250a89b1625e5decd000413

Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
'''

# my solution
def flatten(lst):
    arr = []
    
    for i in lst:
        if type(i) == list:
            for k in i:
                arr.append(k)
        else:
            arr.append(i)
            
    return arr

#! alternative-solution-1
def flatten(lst):
    r = []
    for x in lst:
       if type(x) is list:
          r.extend(x)
       else:
          r.append(x)
    return r 
# learned two things here: you don't have to check type with type(x) == list
# rather use type(x) is list. secondly, extend method adds the elements of a 
# list (or any iterable), to the end of the current list

#! alternative-solution-2
def flatten(lst):
    return sum([i if type(i) is list else [i] for i in lst], [])
# see here for the sum(arr, []) method: https://stackoverflow.com/a/952946
