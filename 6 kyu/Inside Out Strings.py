'''
https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/javascript

You are given a string of words (x), for each word within the string 
you need to turn the word 'inside out'. By this I mean the internal 
letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is 
odd, you are expected to leave the 'middle' letter of the word where 
it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
'''

# my solution
def inside_out(st):
    arr = st.split(' ')
    result =[]
    
    for i in arr:
        leng = len(i)
    
        if leng % 2:
            half = int((leng - 1)/2)
            x = i[:half][::-1]
            y = i[half + 1:][::-1]
            result.append(x + i[half] + y)
        else: 
            half = int(leng/2)
            x = i[:half][::-1]
            y = i[half:][::-1]
            result.append(x + y)
            
    return ' '.join(result)

#! alternative-solution
def check(st):
    l = len(st)
    if l%2:
        return st[:l//2][::-1] + st[l//2] + st[1+l//2:][::-1]
    return st[:l//2][::-1] + st[l//2:][::-1]

def inside_out(st):
    return ' '.join(check(word) for word in st.split(' '))
# this is essentially the same solution as mine, but I really gotta get 
# used to using floor division. It makes life easier on situations like 
# this one!
