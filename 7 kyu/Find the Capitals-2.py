'''
https://www.codewars.com/kata/53573877d5493b4d6e00050c

Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.

Examples
[{'state': 'Maine', 'capital': 'Augusta'}] --> ["The capital of Maine is Augusta"]
[{'country' : 'Spain', 'capital' : 'Madrid'}] --> ["The capital of Spain is Madrid"]
[{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}] --> ["The capital of Maine is Augusta", "The capital of Spain is Madrid"]
'''

# my solution
def capital(capitals): 
    arr = []
    for i in capitals:
        state = i['state'] if 'state' in i else i['country']
        arr.append(f"The capital of {state} is {i['capital']}")
    return arr