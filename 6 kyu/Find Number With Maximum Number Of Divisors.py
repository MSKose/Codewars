'''
https://www.codewars.com/kata/588c0a38b7cd14085300003f/

Find the integer from a to b (included) with the greatest number of divisors. For example:

divNum(15, 30)   ==> 24
divNum(1, 2)     ==> 2
divNum(0, 0)     ==> 0
divNum(52, 156)  ==> 120
If there are several numbers that have the same (maximum) number of divisors, the smallest among them should be returned. Return the string "Error" if a > b.
'''

# my solution
def div_num(a, b):
    if a > b: return "Error"
    dict = {}
    
    for i in range(a, b+1):
        count = 0
        for j in range(1, i+1):
            if i % j == 0:
                count += 1
        dict[i] = count
        
    maxi = max(dict.values())
    result = [i for i in dict.keys() if dict[i] == maxi]
    
    return min(result)

#? my solution is the one above and although it works it 
#? gets timeout. So I added the factors function I found
#? from stackoverflow: https://stackoverflow.com/a/6909532
#? Therefore, the code below passes the tests
# def div_num(a, b):
#     if a > b: return "Error"
#     dict = {}
    
#     for i in range(a, b+1):
#         dict[i] = len(factors(i))
        
#     maxi = max(dict.values())
#     result = [i for i in dict.keys() if dict[i] == maxi]
    
#     return min(result)

# def factors(n):
#     return set(x for tup in ([i, n//i] 
#                 for i in range(1, int(n**0.5)+1) if n % i == 0) for x in tup)