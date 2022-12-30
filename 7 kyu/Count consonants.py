'''
https://www.codewars.com/kata/564e7fc20f0b53eb02000106

Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
'''

# my solution
def consonant_count(s):
    vowels = ('a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U')
    return len([i for i in s if i.isalpha() and i not in vowels])