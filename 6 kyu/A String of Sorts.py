'''
https://www.codewars.com/kata/536c6b8749aa8b3c2600029a


Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"
To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
'''

# my solution
def sort_string(s, ordering):
    list = []
    
    for i in ordering:
        while i in s:
            list.append(i)
            s = s.replace(i, "", 1)
            
    return ''.join(list) + s