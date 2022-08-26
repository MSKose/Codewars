'''
https://www.codewars.com/kata/559f44187fa851efad000087/

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
'''

# my solution
def seven_ate9(str_):
    li = list(str_)
    
    for idx, el in enumerate(li):
        try:
          if li[idx-1] == '7' and li[idx+1] == '7' and li[idx] == '9':
                li.pop(idx)
        except:
          print("IndexError: List Index Out of Range")
            
    return ''.join(li)

#! alternative-solution-1
def seven_ate9(str_):
    if '797' not in str_:
        return str_
    else:
        return seven_ate9(str_.replace('797', '77'))
# recursion, love it.

#! alternative-solution-2
def seven_ate9(str_):
   while str_.find('797') != -1:
       str_ = str_.replace('797','77')
   return str_
# find() returns -1 when it cannot find the value

#! alternative-solution-3
def seven_ate9(str_):
    while "797" in str_:
        str_ = str_.replace("797", "77")
    return str_
# or, why not just use the keyword in

#! alternative-solution-4
import re

def seven_ate9(str_):
    return re.sub(r'79(?=7)', r'7', str_)
# regex

#! alternative-solution-5
import re

def seven_ate9(str_):
    return re.sub(r"(?<=7)9(?=7)", "", str_)
# regex