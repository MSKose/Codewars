'''
https://www.codewars.com/kata/58cda88814e65627c5000045

Write Number in Expanded Form - Part 2
This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
'''

# my solution
def expanded_form(num):
    arr = str(num).split('.')
    result = []

    for idx, el in enumerate(arr):
        for idx2, el2 in enumerate(el):
            if el2 != '0': 
                if idx == 0:
                    new_idx = len(el) - idx2 - 1
                    result.append(str(int(el2) * (10 ** new_idx)))

                else:
                    result.append(f"{el2}/{10 ** (idx2 + 1)}")
                

    return ' + '.join(result)