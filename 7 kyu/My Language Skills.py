'''
https://www.codewars.com/kata/5b16490986b6d336c900007d/

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
'''

# my solution
def my_languages(results):
    arr = [key for key, value in results.items() if value >= 60]        
    
    def descending(x):
        return results[x]
        
    return sorted(arr, key=descending, reverse=True)
    

#! alternative-solution-1
def my_languages(results):
    return sorted((l for l,r in results.items() if r>=60), reverse=True, key=results.get)
# just passing results.get does make sense

#! alternative-solution-2
def my_languages(results):
    return sorted([ e for e in results.keys() if results[e]>=60], reverse=True, key=lambda x: results[x])

#! alternative-solution-3
def my_languages(results):
    return sorted([lang for lang in results if results[lang] >= 60], key=lambda l: -results[l])
# my man didn't even need reverse=True. genius