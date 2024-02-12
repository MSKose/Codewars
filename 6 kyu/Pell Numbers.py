'''
https://www.codewars.com/kata/5818d00a559ff57a2f000082

The Pell sequence is the sequence of integers defined by the initial values

P(0) = 0, P(1) = 1
and the recurrence relation

P(n) = 2 * P(n-1) + P(n-2)
The first few values of P(n) are

0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ..
Task
Your task is to return the nth Pell number
'''

# my solution
cache = {0: 0, 1: 1}

def pell(n):
    if n in cache:
        return cache[n]
    cache[n] = 2 * pell(n - 1) + pell(n - 2)
    return cache[n]