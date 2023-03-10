'''
https://www.codewars.com/kata/53fc954904a45eda6b00097f

Dave has a lot of data he is required to apply filters to, which are simple enough, but he wants a shorter way of doing so.

He wants the following functions to work as expected:

even    // [1,2,3,4,5].even() should return [2,4]
odd     // [1,2,3,4,5].odd() should return [1,3,5]
under   // [1,2,3,4,5].under(4) should return [1,2,3]
over    // [1,2,3,4,5].over(4) should return [5]
inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
They should also work when used together, for example:

[1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30) // should return [18, 20, 22, 30]
And finally the filters should only accept integer values from an array, for example:

["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even() // should return [300, 122]
Note: List with non-numbers will be tested as well.
'''

# my solution
class list(list):
    def isInt(self, x):
        return isinstance(x, int)

    def even(self):
        return list(filter(lambda x: self.isInt(x) and not x % 2, self))

    def odd(self):
        return list(filter(lambda x: self.isInt(x) and x % 2, self))

    def under(self, a):
        return list(filter(lambda x: self.isInt(x) and x < a, self))

    def over(self, a):
        return list(filter(lambda x: self.isInt(x) and x > a, self))

    def in_range(self, min, max):
        return list(filter(lambda x: self.isInt(x) and min <= x <= max, self))