'''
https://www.codewars.com/kata/57a1d5ef7cb1f3db590002af

Create function fib that returns n'th element of Fibonacci sequence (classic programming task).
'''

# my solution
def fibonacci (n: int):
    pre1 = 0
    pre2 = 1
    temp = 0
    
    if n <= 0: return n 

    for i in range(n - 1):
        temp = pre2
        pre2 = pre1 + pre2
        pre1 = temp
        
    return pre2

#! alternative-solution
def fibonacci(n: int) -> int:
    a, b = 0, 1
    for i in range(0, n):
        a, b = b, a + b
    return a