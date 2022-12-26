'''
https://www.codewars.com/kata/635b8fa500fba2bef9189473

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:


For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

0 is a space in the string.
1 is used to separate letters with the same number.
always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
you cannot return digits.
Given a empty string, return empty string.
Return a lowercase string.
Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
'''

# my solution
import re

def phone_words(string):
    alpha = [" ", None, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    x = re.findall(r"2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}", string)
    return ''.join(alpha[int(i[0])][len(i) - 1] for i in x)