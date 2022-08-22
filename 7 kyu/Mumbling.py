'''
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
'''

# my solution
def accum(s):
    arr = list(s)
    return '-'.join((el*(idx+1)).capitalize() for idx,el in enumerate(arr))

#! alternartive-solution-1
def accum(s):
    return '-'.join((a * i).title() for i, a in enumerate(s, 1))
# two takeaways from this: Without having to convert it to a list I could have 
# just enumerated over the string s. Secondly, enumarate takes an optional start
# number and that's why they didn't have to use i + 1 here.

#! alternartive-solution-2
def accum(s):
    output = ""
    for i in range(len(s)):
        output+=(s[i]*(i+1))+"-"
    return output.title()[:-1]
