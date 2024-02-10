'''
https://www.codewars.com/kata/6574d1bde7484b5a56ec8f29

Task
Write a function that takes the string and finds a repeating character in this string (there may or may not be several of them), returns the minimum difference between the indices of these characters and the character itself.

For example, in the string “aabcba” the minimum position difference of repeated characters will be equal to 1, since for the character “a” the position difference will be equal to 1.

The output should be a tuple.

If there are no duplicate characters in the line, it should output None.

The string can only lowercase ones, and nothing else!!!(there cannot be an empty line)

If the difference between repeated characters is the same, print the first character encountered.

Examples of outputs:

"aa" => (1, 'a')

"aabbca" => (1, 'a')

"abka" => (3, 'a')

"abcded" => (2, 'd')

"abbbbbc" => (1, 'b')

"abc" => None
'''

# my solution
def min_repeating_character_difference(text):
    repetion_dictionary = {}
    res_min = (float('inf'), text[0])
    
    for idx, c in enumerate(text):
        if c in repetion_dictionary:
            idx_difference = idx - repetion_dictionary[c]
            res_min = (idx_difference, c) if idx_difference < res_min[0] else res_min
        repetion_dictionary[c] = idx
            
    return res_min if len(repetion_dictionary) != len(text) else None