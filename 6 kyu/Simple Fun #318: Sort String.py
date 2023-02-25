'''
https://www.codewars.com/kata/5936256f2e2a27edc9000047

Your task is to sort the characters in a string according to the following rules:

- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"
Input/Output
[input] string s

A non empty string contains any characters(English alphabets or non English alphabets).

[output] a string

A sorted string according to the rules above.

Example
For s = "cba", the output should be "abc".

For s = "Cba", the output should be "abC".

For s = "cCBbAa", the output should be "AaBbcC".

For s = "c b a", the output should be "a b c".

For s = "-c--b--a-", the output should be "-a--b--c-".

For s = "Codewars", the output should be "aCdeorsw".
'''

# my solution
def sort_string(s):
    alpha_chars = []
    non_alpha_chars = []

    for char in s:
        if char.isalpha():
            alpha_chars.append(char)
        else:
            non_alpha_chars.append(char)
            
    alpha_chars.sort(key=lambda x: x.upper())
            
    sorted_string = ''
    non_alpha_index = 0
    for char in s:
        if char.isalpha():
            sorted_string += alpha_chars.pop(0)
        else:
            sorted_string += non_alpha_chars[non_alpha_index]
            non_alpha_index += 1
            
            
    return sorted_string

#! alternative-solution
def sort_string(s):
    a = iter(sorted((c for c in s if c.isalpha()), key=str.lower))
    return ''.join(next(a) if c.isalpha() else c for c in s)