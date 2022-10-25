'''
https://www.codewars.com/kata/55f3facb78a9fd5b26000036

While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
'''

# my solution
def check_root(string):
    x = string.split(',')
    
    try:
        x = [int(i) for i in x]
    except:
        return "incorrect input"
    
    if len(x) != 4:
        return "incorrect input"
    
    if x[0] + 1 != x[1] or x[1] + 1 != x[2] or x[2] + 1 != x[3]:
        return "not consecutive"
    
    square = x[0] * x[1] * x[2] * x[3] + 1
    return f"{square}, {int(square ** .5)}"

#! alternative-solution
def check_root(string):
    try:
        a,b,c,d = [int(i) for i in string.split(',')]
        if not (a == b-1 and a == c-2 and a == d-3):
            return 'not consecutive'
        s = a*b*c*d+1
        return str(s)+', '+str(int(s**0.5))
    except:
        return 'incorrect input'