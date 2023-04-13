'''
https://www.codewars.com/kata/55dd54631827120dd800002b

Write

String.prototype.hashify()
that will turn a string into a hash/object. Every character in the string will be the key for the next character.
E.g.

'123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"} // The last char will be key for 1st
char
'11223'.hashify() == {"1":["1","2"],"2":["2","3"],"3":"1"} // when duplicates exist, group them in an array
// i.e. 1 is key for next char 1, that 1 is key for next char 2, but 1 is already in the hash, so add 2 to key 1
'Codewars'.hashify() == {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}
Order is not important
There is a preloaded function equals(x,y) that will check if objects are same regardless of property order.
'''

# my solution
def hashify(st):
    dict = {}
    
    for idx, el in enumerate(st):
        if idx == len(st) - 1:
            if el in dict:
                dict[el] = [*dict[el], st[0]]
            else:
                dict[el] = st[0]
        elif el in dict:
            dict[el] = [*dict[el], st[idx + 1]]
        else:
            dict[el] = st[idx + 1]
            
    return dict