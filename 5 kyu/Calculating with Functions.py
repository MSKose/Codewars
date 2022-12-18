'''
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())) # must return 35
four(plus(nine())) # must return 13
eight(minus(three())) # must return 5
six(divided_by(two())) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, divided_by
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(divided_by(three()))
'''

# my solution
def zero(arg=None):
    return 0 if not arg else arg(0)
def one(arg=None):
    return 1 if not arg else arg(1)
def two(arg=None):
    return 2 if not arg else arg(2)
def three(arg=None):
    return 3 if not arg else arg(3)
def four(arg=None):
    return 4 if not arg else arg(4)
def five(arg=None):
    return 5 if not arg else arg(5)
def six(arg=None):
    return 6 if not arg else arg(6)
def seven(arg=None):
    return 7 if not arg else arg(7)
def eight(arg=None):
    return 8 if not arg else arg(8)
def nine(arg=None):
    return 9 if not arg else arg(9)

def plus(right):
    return lambda left: left + right
def minus(right):
    return lambda left: left - right
def times(right):
    return lambda left: left * right
def divided_by(right):
    return lambda left: left // right

#! alternative-solution
def zero(func=''): return eval(f"0{func}")
def one(func=''): return eval(f"1{func}")
def two(func=''): return eval(f"2{func}")
def three(func=''): return eval(f"3{func}")
def four(func=''): return eval(f"4{func}")
def five(func=''): return eval(f"5{func}")
def six(func=''): return eval(f"6{func}")
def seven(func=''): return eval(f"7{func}")
def eight(func=''): return eval(f"8{func}")
def nine(func=''): return eval(f"9{func}")

def plus(a): return f"+{a}"
def minus(a): return f"-{a}"
def times(a): return f"*{a}"
def divided_by(a): return f"//{a}"