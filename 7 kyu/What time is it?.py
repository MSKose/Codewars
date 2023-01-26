'''
https://www.codewars.com/kata/57729a09914da60e17000329

Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time
'''

# my solution
def get_military_time(s):
    hour = (0 if s[-2:] == 'AM' else 12) + (int(s[:2]) % 12)
    return str(hour).zfill(2) + s[2:-2]