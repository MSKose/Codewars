'''
https://www.codewars.com/kata/59e9f404fc3c49ab24000112

Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
'''

# my solution
import re

def nerdify(txt):
    x = re.sub("a|A", "4", txt)
    y = re.sub("e|E", "3", x)
    z = re.sub("l", "1", y)
    return z

#! alternative-solution-1
def nerdify(txt):
    return txt.translate(str.maketrans("aAeEl", "44331"))

#! alternative-solution-2
import re
def nerdify(_):
    return re.sub('(l)|(?i:(e)|(a))',lambda _:{3:'4',2:'3',1:'1'}.get(_.lastindex),_)