'''
https://www.codewars.com/kata/515decfd9dcfc23bb6000006

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
'''

# my solution
def is_valid_IP(s):
    x = s.split('.')
    
    if len(x) != 4: return False

    for i in x:
        try:
            if len(i) > 3: return False
            if i[0] == '-': return False
            if len(i) > 1 and i[0] == '0': return False
            if 255 < int(i) or int(i) < 0: return False
            if str(int(i)) != i: return False
        except:
          return False
    
    return True 

#! alternative-solution
def is_valid_IP(s):
    return s.count('.')==3 and all(o.isdigit() and 0<=int(o)<=255 and str(int(o))==o for o in s.split('.'))
# didn't know about the all() method. It's basically equivalent to JavaScript's  every() method