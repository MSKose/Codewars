'''
https://www.codewars.com/kata/51f2b4448cadf20ed0000386

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
'''

# my solution
def remove_url_anchor(url):
    return url.split('#')[0]