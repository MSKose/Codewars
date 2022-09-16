'''
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
'''

# my solution
from collections import Counter

def duplicate_count(text):
    dict = Counter(text.lower())
    
    count = 0
    for x in dict:
        if dict[x] > 1:
            count += 1
            
    return count
# this is the first time I'm using the Counter() method and I love it. It 
# comes handy to count key-value pairs

#! alternative-solution-1
def duplicate_count(s):
    return len([c for c in set(s.lower()) if s.lower().count(c)>1])

#! alternative-solution-2
def duplicate_count(text):
    seen = set()
    dupes = set()
    for char in text:
        char = char.lower()
        if char in seen:
            dupes.add(char)
        seen.add(char)
    return len(dupes)