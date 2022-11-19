'''
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272


Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
'''

# my solution
def pts(y):
        return ord(y) - 96

def high(x):
    lst = x.split(' ')
    word_counts  = []

    for word in x.split(' '):
        sum = 0
        for letter in word:
            sum += pts(letter)
        word_counts.append(sum)
        
    return lst[word_counts.index(max(word_counts))]

#! alternative-solution-1
def high(x):
    return max(x.split(), key=lambda k: sum(ord(c) - 96 for c in k))

#! alternative-solution-2
def high(x):
    highest_score = 0
    for word in x.split(' '):
        score = sum(ord(c)-96 for c in word)
        if score > highest_score:
            highest_score = score
            highest_word = word
            
    return highest_word