'''
https://www.codewars.com/kata/54edbc7200b811e956000556/

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.
'''


# my solution
def count_sheeps(sheep):
  return sum(1 for x in sheep if x == True)
# this is the first time I'm using sum and list comprehension
# together. This actually is pretty awesome

#! alternative-solution
def count_sheeps(arrayOfSheeps):
  return arrayOfSheeps.count(True)
# ok, I wasn't aware of the count method. It's cool