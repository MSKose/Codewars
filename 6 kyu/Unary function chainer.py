'''
https://www.codewars.com/kata/54ca3e777120b56cb6000710

DESCRIPTION:
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input)))
'''

# my solution
def chained(functions):
    def func(arg):
        for f in functions:
            arg = f(arg)
        return arg
    return func