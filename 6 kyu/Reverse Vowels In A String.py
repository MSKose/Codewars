'''
https://www.codewars.com/kata/585db3e8eec141ce9a00008f

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
'''

#  my solution
import re

def reverse_vowels(s):
    vowels = list(re.sub("(?i)[^aeiou]", "", s))
    return re.sub("(?i)[aeiou]", lambda x: vowels.pop(), s)