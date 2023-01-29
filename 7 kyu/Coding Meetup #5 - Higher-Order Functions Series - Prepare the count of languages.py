'''
https://www.codewars.com/kata/5828713ed04efde70e000346

You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

list1 = [
    { 'firstName': 'Noah', 'lastName': 'M.', 'country': 'Switzerland', 'continent': 'Europe', 'age': 19, 'language': 'C' },
    { 'firstName': 'Anna', 'lastName': 'R.', 'country': 'Liechtenstein', 'continent': 'Europe', 'age': 52, 'language': 'JavaScript' },
    { 'firstName': 'Ramon', 'lastName': 'R.', 'country': 'Paraguay', 'continent': 'Americas', 'age': 29, 'language': 'Ruby' },
    { 'firstName': 'George', 'lastName': 'B.', 'country': 'England', 'continent': 'Europe', 'age': 81, 'language': 'C' },
    ]
your function should return the following object (associative array in PHP, table in COBOL):

{ 'C': 2, 'JavaScript': 1, 'Ruby': 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
'''

# my solution
def count_languages(lst): 
    dict = {}
    
    for i in lst:
        try:
            dict[i['language']] += 1
        except:
            dict[i['language']] = 1
            
    return dict

#! alternative-solution
from collections import Counter

def count_languages(lst): 
    return Counter(d['language'] for d in lst)