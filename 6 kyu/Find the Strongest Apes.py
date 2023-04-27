'''
https://www.codewars.com/kata/617af2ff76b7f70027b89db3

DESCRIPTION:
Imagine that you went to a zoo and some zoologists asked you for help. They want you to find the strongest ape of its own kind and there are 4 types of apes in the zoo. (Gorilla, Gibbon, Orangutan, Chimpanzee)

There will be only one parameter which is a list containing lots of dictionaries.
Each dictionary will be like this: {"name": name, "weight": weight, "height": height, "type": type}
To find the strongest ape, you need to compare the sum of weight and height of each apes of that kind.
The ape with the highest weight and height will be the strongest ape.
You need to return a dictionary which contains the names of the strongest apes of all kinds.{"Gorilla": strongest_gorilla, "Gibbon": strongest_gibbon, "Orangutan": strongest_orangutan, "Chimpanzee": strongest_chimpanzee}
There can be 2 or more apes which has the same highest weight and height. In that case, you need to sort their names by alphabet and then choose the first one as the strongest ape.
If there are no apes for a kind (e.g. Gorilla), you need to return a dictionary like this: {"Gorilla": None, "Gibbon": strongest_gibbon, "Orangutan": strongest_orangutan, "Chimpanzee": strongest_chimpanzee}
Example 1:

find_the_strongest_apes(
            [{"name": "aba", "weight": 101, "height": 99, "type": "Gorilla"},
             {"name": "abb", "weight": 99, "height": 101, "type": "Gorilla"},
             {"name": "abc", "weight": 101, "height": 99, "type": "Orangutan"},
             {"name": "abd", "weight": 99, "height": 101, "type": "Orangutan"}])
Should return {'Gorilla': 'aba', 'Gibbon': None, 'Orangutan': 'abc', 'Chimpanzee': None}

Example 2:

find_the_strongest_apes(
            [{"name": "aba", "weight": 140, "height": 120, "type": "Gorilla"},
             {"name": "abb", "weight": 20, "height": 50, "type": "Gibbon"},
             {"name": "abc", "weight": 75, "height": 110, "type": "Orangutan"},
             {"name": "abd", "weight": 50, "height": 100, "type": "Chimpanzee"}])
Should return {'Gorilla': 'aba', 'Gibbon': 'abb', 'Orangutan': 'abc', 'Chimpanzee': 'abd'}

Example 3:

find_the_strongest_apes(
            [{"name": "aba", "weight": 140, "height": 120, "type": "Gorilla"},
             {"name": "abb", "weight": 150, "height": 120, "type": "Gorilla"},
             {"name": "abc", "weight": 75, "height": 110, "type": "Orangutan"},
             {"name": "abd", "weight": 50, "height": 100, "type": "Chimpanzee"}])
Should return {'Gorilla': 'abb', 'Gibbon': None, 'Orangutan': 'abc', 'Chimpanzee': 'abd'}
'''

# my solution
def find_the_strongest_apes(_list):
    res = {'Gorilla': None, 'Gibbon': None, 'Orangutan': None, 'Chimpanzee': None}
    power = {'Gorilla': 0, 'Gibbon': 0, 'Orangutan': 0, 'Chimpanzee': 0}
    
    for i in _list:
        if res[i['type']] != None:
            if power[i['type']] == i['weight'] + i['height']:
                 res[i['type']] = min(i['name'], res[i['type']])
            elif power[i['type']] < i['weight'] + i['height']:
                res[i['type']] = i['name']
                power[i['type']] = i['weight'] + i['height']
        else:
            res[i['type']] = i['name']
            power[i['type']] = i['weight'] + i['height']
    
    return res