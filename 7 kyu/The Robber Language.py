'''
https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d

Introduction
The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

Example
In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
Note: The dashes - in the example are added for readability and should not be included in the output.

The Assignment
Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

Notes
Only consonants should be modified; leave all other characters unchanged.
Both upper and lower case characters will be tested.
The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.
Testing
The tests will challenge your function with sentences of length 0-255, ASCII characters between 32-126 and nothing else.

Links
Check out these links for more information:

https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket
'''

# my solution
def robber_encode(sentence):
    x = "bcdfghjklmnpqrstvwxyz"
    y = "BCDFGHJKLMNPQRSTVWXYZ"
    z = ""
    
    for i in sentence:
        if i in x:
            z += i + 'o' + i
        elif i in y:
            z += i + 'O' + i
        else:
            z += i
            
    return z


#! alternative-solution
def robber_encode(sentence):
    result = ''
    for letter in sentence:
        if letter.lower() in 'bcdfghjklmnpqrstvwxyz':
            o = 'o' if letter.islower() else 'O'
            result += letter + o + letter
        else:
            result += letter
    return result
# didn't know about the islower() method.