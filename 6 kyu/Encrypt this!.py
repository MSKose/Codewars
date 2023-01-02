'''
https://www.codewars.com/kata/5848565e273af816fb000449

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
'''

# my solution
def encrypt_this(text):
    if not text: 
        return ''
    result = ''
    
    for i in text.split(' '):
        if len(i) == 1:
            result += str(ord(i[0])) + ' '
        elif len(i) == 2:
            result += str(ord(i[0])) + i[1] + ' '
        elif len(i) == 3:
            result += str(ord(i[0])) + i[-1] + i[1] + ' '
        else:
            result += str(ord(i[0])) + i[-1] + i[2:-1] + i[1] + ' '
        
        
    return result[:-1]