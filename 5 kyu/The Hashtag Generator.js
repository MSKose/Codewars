/*
https://www.codewars.com/kata/52449b062fb80683ec000024

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

// my solution
function generateHashtag (str) {
    const x = str.replace(/(\b[a-zA-Z]+\b)/g, (x) => x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase())
    const y = x.replace(/\s/g, '')
    const result = '#' + y
    return 1 < result.length && result.length < 141 ? result : false 
}