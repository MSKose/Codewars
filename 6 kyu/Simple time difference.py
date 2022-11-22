'''
https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2

In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.
In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!
'''

# my solution
from datetime import datetime
from math import floor

def converter(hours, minutes):
    if minutes == 60:
        hours += 1
        minutes = 0
    hours = f'0{hours}' if hours < 10 else hours
    return datetime.strptime(f"{hours}:{minutes}:00", "%H:%M:%S")

def solve(arr): 
    if len(arr) == 1: return "23:59"
    dupp = list(set(arr))
    x = sorted(dupp)
    max_time = 0
    
    for idx, el in enumerate(x):
        if idx != 0:
            curr_hour = int(el[0] + el[1])
            curr_min = int(el[3] + el[4])
            prev_hour = int(x[idx-1][0] + x[idx-1][1])
            prev_min = int(x[idx-1][3] + x[idx-1][4]) + 1
            
            start_time = converter(curr_hour, curr_min)
            end_time = converter(prev_hour, prev_min)
            
            diff = start_time - end_time
            sec = diff.total_seconds()
            min = int(sec / 60)
            if min > max_time:
                max_time = min
                
    hour_diff = 60 * (int(x[-1][0] + x[-1][1]) - (int(x[0][0] + x[0][1])))
    min_diff = -(int(x[-1][3] + x[-1][4]) + 1 - int(x[0][3] + x[0][4]))
    min = 24 * 60 - hour_diff + min_diff;
    if min > max_time:
        max_time = min
        
    def format(x):
        return f"0{x}" if x < 10 else x
        
    return f"{format(int(max_time / 60))}:{format(max_time % 60)}"