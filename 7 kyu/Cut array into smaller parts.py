'''
https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150

Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
'''

# my solution
def make_parts(arr, chunkSize):
    result = []
    count = 0
    app = []

    if len(arr) <= chunkSize:
        return [arr[::]]

    for idx, el in enumerate(arr):
        
        if count < chunkSize:
            app.append(el)
            count += 1
            if count == chunkSize:
                result.append(app)
                count = 0
                app = []
            elif idx == len(arr) - 1:
                result.append(app)
            
    return result

#! alternative-solution
def makeParts(arr, chunkSize):
  return [arr[i:i+chunkSize] for i in range(0, len(arr), chunkSize)]
# smh lol. Anyways, a reminder that range syntax is as follows: range(start, stop, step)